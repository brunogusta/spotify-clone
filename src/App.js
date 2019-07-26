import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotronConfig';

import Sidebar from './components/sidebar';
import Player from './components/player';
import Header from './components/header';
import ErrorBox from './components/Errorbox';

import { Wrapper, Container, Content } from './styles/components';
import GlobalStyle from './styles/global';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <ErrorBox />
                <Header />
                <Routes />
              </Content>
              <GlobalStyle />
            </Container>
            <Player />
          </Wrapper>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
