import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/sidebar';
import Player from './components/player';
import Header from './components/header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
            <GlobalStyle />
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
