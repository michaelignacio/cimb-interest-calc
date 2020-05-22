import React from 'react';
import styled from 'styled-components';
import Result from './Result';

const Content = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-height: 480px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    margin: 1.75rem;
  }

  p {
    margin: 5px;
  }
`

const Legend = ( {props} ) => (
  <Content>
    <div>
      <code>
        <p>
          <small>gross interest = adb * interest * (days / 360)</small>
        </p>
      </code>
      <p className="mb">
        <small>
          <code>gross interest = </code><strong>Php<Result data={props} /></strong>
        </small>
      </p>
      </div>
      <div>
      <code>
        <p><small>net interest = gross interest - withholding tax</small></p>
      </code>
      <p>
        <code>net interest = </code><strong>Php<Result data={props} type="net" /></strong>
      </p>
    </div>
  </Content>
);

export default Legend;