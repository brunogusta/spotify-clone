import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';

import Sidebar from './components/sidebar';
import Player from './components/player';

import { Wrapper, Container } from './styles/components';

function App() {
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <Sidebar />
          <GlobalStyle />
        </Container>
        <Player />
      </Wrapper>
    </Fragment>
  );
}

export default App;
