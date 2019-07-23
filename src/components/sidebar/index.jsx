import React, { Component } from 'react';

import { Container, NewPlayList, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a>Navegar</a>
            </li>
            <li>
              <a>Rádio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a>Seu Daily Mix</a>
            </li>
            <li>
              <a>Músicas</a>
            </li>
            <li>
              <a>Álbuns</a>
            </li>
            <li>
              <a>Artistas</a>
            </li>
            <li>
              <a>Estações</a>
            </li>
            <li>
              <a>Arquivos locais</a>
            </li>
            <li>
              <a>Vídeos</a>
            </li>
            <li>
              <a>Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
            </li>
            <li>
              <a href="">Melhores do rock</a>
            </li>
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

export default Sidebar;
