import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlayList, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
import Loading from '../loading';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          loading: PropTypes.bool,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;
    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="/">Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="/">Seu Daily Mix</a>
            </li>
            <li>
              <a href="/">Músicas</a>
            </li>
            <li>
              <a href="/">Álbuns</a>
            </li>
            <li>
              <a href="/">Artistas</a>
            </li>
            <li>
              <a href="/">Estações</a>
            </li>
            <li>
              <a href="/">Arquivos locais</a>
            </li>
            <li>
              <a href="/">Vídeos</a>
            </li>
            <li>
              <a href="/">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {playlists.loading && <Loading />}
            </li>
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlayList>
          <img src={AddPlaylistIcon} alt="playlist" />
          <p>Nova Playlist</p>
        </NewPlayList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
