import React, { Component } from 'react';

import { Container, Title, List, Playlist } from './styles';

export default class Browse extends Component {
  render() {
    return (
      <Container>
        <Title>Navegar</Title>

        <List>
          <Playlist to="/playlists/1">
            <img
              src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/f0/f9/9f/f0f99fa4-3685-cf99-9676-3b303e22fbf7/source/1200x1200bb.jpg"
              alt="capa album"
            />
            <strong>Bohemias</strong>
            <p>Eu não sei o que é isso.</p>
          </Playlist>
          <Playlist to="/playlists/1">
            <img
              src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/f0/f9/9f/f0f99fa4-3685-cf99-9676-3b303e22fbf7/source/1200x1200bb.jpg"
              alt="capa album"
            />
            <strong>Bohemias</strong>
            <p>Eu não sei o que é isso.</p>
          </Playlist>
          <Playlist to="/playlists/1">
            <img
              src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/f0/f9/9f/f0f99fa4-3685-cf99-9676-3b303e22fbf7/source/1200x1200bb.jpg"
              alt="capa album"
            />
            <strong>Bohemias</strong>
            <p>Eu não sei o que é isso.</p>
          </Playlist>
        </List>
      </Container>
    );
  }
}
