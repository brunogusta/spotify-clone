import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Header, SongLists } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import { Creators as songActions } from '../../store/ducks/songs';
import Loading from '../../components/loading';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }).isRequired,
    getSongsRequest: PropTypes.func.isRequired,
    songsDetails: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            author: PropTypes.string,
            album: PropTypes.string
          })
        )
      }),
      loading: PropTypes.bool
    }).isRequired
  };

  componentDidMount() {
    this.loadPlaylistSongs();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistSongs();
    }
  }

  loadPlaylistSongs = () => {
    const { id } = this.props.match.params;
    this.props.getSongsRequest(id);
  };

  renderSongs = () => {
    const playlist = this.props.songsDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt="capa album" />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

            <button>Play</button>
          </div>
        </Header>
        <SongLists cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr>
                  <td>
                    <img src={PlusIcon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:26</td>
                </tr>
              ))
            )}
          </tbody>
        </SongLists>
      </Container>
    );
  };

  render() {
    return this.props.songsDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderSongs()
    );
  }
}

const mapStateToProps = state => ({
  songsDetails: state.songs
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(songActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
