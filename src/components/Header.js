import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: fixed;
  top: 0;
  width: 100%;
  /*border-bottom: 1px solid #ddd;

  @media (min-width: 768px) {
    border-bottom: unset;
  }*/
`

const Container = styled.div`
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 800;

  a {
    color: #007DFE;
    text-decoration: none;
  }

  @media (min-width: 1200px) {
    width: 1280px;
  }
`

const Header = () => (
  <Content>
    <Container>
    <a href="/">phinterest</a>
    </Container>
  </Content>
);

export default Header;