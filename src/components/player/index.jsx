import React, { Component, Fragment } from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import Shuffle from '../../assets/images/shuffle.svg';
import Backward from '../../assets/images/backward.svg';
import Play from '../../assets/images/play.svg';
import Forward from '../../assets/images/forward.svg';
import Repeat from '../../assets/images/repeat.svg';
import PauseIcon from '../../assets/images/pause.svg';

import { Creators as PlayerActions } from '../../store/ducks/player';

class Player extends Component {
  static propTypes = {
    player: PropTypes.shape({
      currentSong: PropTypes.shape({
        files: PropTypes.string,
        thumbnail: PropTypes.string,
        author: PropTypes.string,
        title: PropTypes.string
      }),
      status: PropTypes.string
    }).isRequired,
    play: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    playing: PropTypes.func.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    handlePosition: PropTypes.func.isRequired,
    setPosition: PropTypes.func.isRequired,
    positionShown: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  };

  render() {
    const player = this.props.player;
    return (
      <Container>
        {!!player.currentSong && (
          <Sound
            url={player.currentSong.file}
            playStatus={player.status}
            onFinishedPlaying={this.props.next}
            onPlaying={this.props.playing}
            position={player.position}
            volume={this.props.player.volume}
          />
        )}

        <Current>
          {!!player.currentSong && (
            <Fragment>
              <img src={player.currentSong.thumbnail} alt="album" />
              <div>
                <span>{player.currentSong.title}</span>
                <small>{player.currentSong.author}</small>
              </div>
            </Fragment>
          )}
        </Current>

        <Progress>
          <Controls>
            <button>
              <img src={Shuffle} alt="control" />
            </button>
            <button onClick={this.props.prev}>
              <img src={Backward} alt="control" />
            </button>
            {!!player.currentSong && player.status === Sound.status.PLAYING ? (
              <button onClick={this.props.pause}>
                <img src={PauseIcon} alt="control" />
              </button>
            ) : (
              <button onClick={this.props.play}>
                <img src={Play} alt="control" />
              </button>
            )}
            <button onClick={this.props.next}>
              <img src={Forward} alt="control" />
            </button>
            <button>
              <img src={Repeat} alt="control" />
            </button>
          </Controls>

          <Time>
            <span>{this.props.positionShown || this.props.position}</span>
            <ProgressSlider>
              <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#1ed360' }}
                handleStyle={{ border: 0 }}
                value={this.props.progress}
                max={1000}
                onChange={value => this.props.handlePosition(value / 1000)}
                onAfterChange={value => this.props.setPosition(value / 1000)}
              />
            </ProgressSlider>
            <span>{this.props.duration}</span>
          </Time>
        </Progress>
        <Volume>
          <img src={VolumeIcon} alt="volume" />
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#fff' }}
            handleStyle={{ display: 'none' }}
            onChange={value => this.props.setVolume(value)}
            value={this.props.player.volume}
          />
        </Volume>
      </Container>
    );
  }
}

function msToTime(duration) {
  if (!duration) return '';
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
  player: state.player,
  position: msToTime(state.player.position),
  duration: msToTime(state.player.duration),
  positionShown: msToTime(state.player.positionShown),
  progress:
    parseInt(
      (state.player.positionShown || state.player.position) *
        (1000 / state.player.duration),
      10
    ) || 0
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
