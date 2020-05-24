import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Optin from './Optin';

const Container = styled.div`
  background: #fff;
  background: #007DFE;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
`

const Content = styled.div`
  max-width: 850px;
  padding: 20px;

  @media (min-width: 992px) {
    padding: unset;
  }

  .title {
    font-size: 28px;
    margin-top: 0;
    @media (min-width: 768px) {
      margin-top: unset;
      font-size: 60px;
    }
    margin-bottom: 1em;
  }

  .subtitle {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.8;
  }
`

const CloseButton = styled.div`
  font-size: 32px;
  text-align: right;
  position: relative;
  @media (min-width: 768px) {
    margin-top: -40px;
    right: -100px;
    top: unset;
  }


  a {
    text-decoration: none;
  }

  span:hover {
    cursor: pointer;
  }
`

const ExitIntentPopup = (props) => {
  const escFunc = useCallback((e) => {
    if(e.keyCode === 27) {
      props.onClick();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunc, false);

    return () => {
      document.removeEventListener('keydown', escFunc, false);
    };
  }, []);

  return (
    <Container>
      <Content>
      <CloseButton>
        <span onClick={props.onClick}>
          x
        </span>
      </CloseButton>
        <h1 className="title">How much more money should you be growing passively</h1>
        <Optin />
        <p className="subtitle">Latest local news on where to put your money to make the most out of it, as well as tips on how to get closer to financial independence, delivered straight to your inbox daily.</p>
      </Content>
    </Container>
  );
}

export default ExitIntentPopup;