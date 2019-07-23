import React, { Component } from 'react';
import Slider from 'rc-slider';

import { Container, Current, Volume, Progress, Controls } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';

export default class Player extends Component {
  render() {
    return (
      <Container>
        <Current>
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/f0/f9/9f/f0f99fa4-3685-cf99-9676-3b303e22fbf7/source/1200x1200bb.jpg"
            alt="album cover"
          />
          <Progress>
            <Controls>
              <button />
            </Controls>
          </Progress>
          <div>
            <span>Bohemian Happysody</span>
            <small>Bohemian</small>
          </div>
        </Current>
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
