import styled from 'styled-components';
import React from 'react';
import Label from './Label';
import Input from './Input';
import Row from './Row';

const Content = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
`

const Form = (props) => (
	<Content>
    <Row>
      <Label htmlFor="adb">Average daily PHP balance</Label>
      <Input
        id="adb"
        type="number"
        min="0"
        name="adb"
        placeholder="Average daily PHP balance..."
        onChange={props.handleChange}
        value={props.state.adb}
      />
    </Row>
    <Row>
      <Label htmlFor="interest">
        Interest (in percent)
      </Label>
      <Input
        id="interest"
        type="number"
        placeholder="Interest in percent..."
        min="0"
        max="100"
        name="interest"
        onChange={props.handleChange}
        value={props.state.interest}
      />
    </Row>
    <Row>
      <Label htmlFor="days">
        Number of days in a month
      </Label>
      <Input
        id="days"
        type="number"
        placeholder="Number of days in month..."
        min="1"
        max="31"
        name="days"
        onChange={props.handleChange}
        value={props.state.days}
      />
    </Row>
    <Row>
      <Label htmlFor="tax">
        Withholding tax
      </Label>
      <Input
        id="tax"
        type="number"
        placeholder="Withholding tax..."
        min="0"
        max="100"
        name="tax"
        onChange={props.handleChange}
        value={props.state.tax}
      />
    </Row>
  </Content>
);

export default Form