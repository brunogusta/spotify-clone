import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

import { Container } from './styles';

import CloseIcon from '../../assets/images/close.svg';

const Errorbox = ({ error: { message, visible }, setHide }) => visible && (
<Container>
  <p>{message}</p>
  <button onClick={setHide} type="button">
    <img src={CloseIcon} alt="fechar" />
  </button>
</Container>
);

const mapStateToProps = state => ({
  error: state.hasError,
});
const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Errorbox);
