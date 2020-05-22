import React from 'react';
import styled from 'styled-components';

const Content = styled.small`
  margin-top: 2rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid #ddd;

  a {
    font-style: normal;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    max-width: 1280px;
  }
`

const Disclaimer = () => (
  <Content>
    <p>
      This project is not affiliated with CIMB. {' '}
      <a
        href="https://github.com/michaelignacio/cimb-interest-calc"
        target="_blank"
        rel="noopener noreferrer"
      >
        fork me
      </a>
    </p>
  </Content>
);

export default Disclaimer;