import React, { Component } from 'react';

import { Container, Search, User } from './styles';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Search>
          <input placeholder="Search" />
        </Search>

        <User>
          <img
            src="https://avatars3.githubusercontent.com/u/50206533?v=4"
            alt="avatar"
          />
          Bruno Gustavo
        </User>
      </Container>
    );
  }
}
