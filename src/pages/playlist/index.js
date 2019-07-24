import React, { Component } from 'react';

import { Container, Header, SongLists } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

export default class Playlist extends Component {
  render() {
    return (
      <Container>
        <Header>
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/f0/f9/9f/f0f99fa4-3685-cf99-9676-3b303e22fbf7/source/1200x1200bb.jpg"
            alt="capa album"
          />

          <div>
            <span>PLAYLIST</span>
            <h1>Rock</h1>
            <p>12 Músicas</p>

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
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
          </tbody>
        </SongLists>
      </Container>
    );
  }
}
