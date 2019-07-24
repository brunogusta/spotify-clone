import React, { Component } from 'react';
import Slider from 'rc-slider';

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

export default class Player extends Component {
  render() {
    return (
      <Container>
        <Current>
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/f0/f9/9f/f0f99fa4-3685-cf99-9676-3b303e22fbf7/source/1200x1200bb.jpg"
            alt="album cover"
          />
          <div>
            <span>Bohemian Happysody</span>
            <small>Bohemian</small>
          </div>
        </Current>
        <Progress>
          <Controls>
            <button>
              <img src={Shuffle} alt="control" />
            </button>
            <button>
              <img src={Backward} alt="control" />
            </button>
            <button>
              <img src={Play} alt="control" />
            </button>
            <button>
              <img src={Forward} alt="control" />
            </button>
            <button>
              <img src={Repeat} alt="control" />
            </button>
          </Controls>

          <Time>
            <span>1:34</span>
            <ProgressSlider>
              <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#1ed360' }}
                handleStyle={{ border: 0 }}
                value={100}
              />
            </ProgressSlider>
            <span>4:22</span>
          </Time>
        </Progress>
        <Volume>
          <img src={VolumeIcon} alt="volume" />
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#fff' }}
            handleStyle={{ display: 'none' }}
            value={100}
          />
        </Volume>
      </Container>
    );
  }
}
