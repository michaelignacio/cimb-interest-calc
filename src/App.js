import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;

  h1 {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    height: 95vh;

    h1 {
      font-size: 2rem;
    }
  }
`

const Input = styled.input`
  padding: 8px;
  min-width: 150px;
  margin-top: 5px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  margin: 5px;
`

const Label = styled.label`
  align-items: center;
  display: flex;
  margin-right: 10px;
  min-width: 200px;
`

const Disclaimer = styled.small`
  font-style: italic;
  margin-top: 1rem;

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

    position: unset;
    bottom: unset;
    background-color: none;
    border-top: none;
    width: unset;
  }
`

const Legend = () => {
  return (
    <LegendContent>
      <code>
      <p>gross interest = adb * interest * (days / 360)</p>
      <p>net interest = gross interest - withholding tax</p>
      </code>
    </LegendContent>
  );
}

const LegendContent = styled.div`
  // display: none;
  margin-top: auto;
  margin-bottom: 3.5rem;

  @media (min-width: 767px) {
    display: block;
    margin: 3.5rem 0 2rem;
  }
`

const Result = (props) => {
  const data = props.data;
  const interest = data.interest / 100;
  const tax = data.tax / 100;
  let result = 0;
  let net = 0;
  let gross = 0;

  gross = (data.adb * interest * (data.days / 360));
  net = gross * (1 - tax);

  if (props.type === 'net') {
    result = net;
  } else {
    result = gross;
  }

  return Math.round(result * 100) / 100;;
}

class App extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      adb: 100000,
      interest: 4,
      days: 31,
      tax: 20,
      result: 0
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Container>
        <h1>CIMB PH Interest Calculator</h1>
        <Row>
          <Label htmlFor="adb">Average daily PHP balance</Label>
          <Input
            id="adb"
            type="number"
            min="0"
            name="adb"
            placeholder="Average daily PHP balance..."
            onChange={this.handleChange}
            value={this.state.adb}
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
            onChange={this.handleChange}
            value={this.state.interest}
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
            onChange={this.handleChange}
            value={this.state.days}
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
            onChange={this.handleChange}
            value={this.state.tax}
          />
        </Row>
        <div>
          <p>The gross interest is <strong>Php<Result data={this.state} /></strong></p>
          <p>The net interest is <strong>Php<Result data={this.state} type="net" /></strong></p>
          <Legend />
        </div>
        <Disclaimer>
          <p>This project is not affiliated with CIMB. <a href="https://github.com" target="_blank" rel="noopener noreferrer">fork me</a></p>
        </Disclaimer>
      </Container>
    );
  }
}

export default App;
