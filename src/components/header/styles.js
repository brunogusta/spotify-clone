import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0px 0px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  border-radius: 12px;
  width: 200px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;

  input {
    font-size: 13px;
    color: #121212;
    border: 0;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 300;

  img {
    margin-right: 10px;
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }
`;
