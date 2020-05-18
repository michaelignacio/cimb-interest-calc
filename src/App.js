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
  }
`

const Legend = styled.div`
  margin: 1.75rem;

  .mb {
    margin-bottom: 1.75rem;
  }

  p {
    margin: 5px;
  }
`

const Comparison = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  table {
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #bbb;
    padding: 10px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  // width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  border: 1px solid #ddd;
  padding: .35em;
}

@media (min-width: 768px) {
  table th,
  table tr:nth-child(even) {
    background-color: #f8f8f8;
  }
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
`

const Result = (props) => {
  const data = props.data;
  const tax = data.tax / 100;
  let interest = 0, result = 0, net = 0, gross = 0;

  if (!props.bank) {
    interest = data.interest / 100;
  } else {
    interest = 0.25 / 100;
  }

  gross = (data.adb * interest * (data.days / 360));
  net = gross * (1 - tax);

  if (props.type === 'net') {
    result = net;
  } else if (props.type !== 'net' || props.bank !== '') {
    result = gross;
  }

  return Math.round(result * 100) / 100;
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
        <Legend>
          <code>
            <p>
              <small>gross interest = adb * interest * (days / 360)</small>
            </p>
          </code>
          <p className="mb">
            <small>
              <code>gross interest = </code><strong>Php<Result data={this.state} /></strong>
            </small>
          </p>
          <code>
            <p><small>net interest = gross interest - withholding tax</small></p>
          </code>
          <p>
            <code>net interest = </code><strong>Php<Result data={this.state} type="net" /></strong>
          </p>
        </Legend>
        <Comparison>
          <p>
            <strong>
              Comparison with other banks' regular savings accounts
            </strong>
          </p>
          <table>
            <thead>
              <tr>
                <th>Bank</th>
                <th>Interest rate per annum</th>
                <th>Credited when</th>
                <th>Gross interest earned</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <a target="_blank"
                  href="https://www.bpiexpressonline.com/p/1/326/deposit-rates-savings-and-checking"
                  rel="noopener noreferrer">
                  BPI Express Teller
                </a>
              </td>
              <td>
                0.25%
              </td>
              <td>Quarterly</td>
              <td>
                Php<Result data={this.state} bank="bpi" />
              </td>
            </tr>
            <tr>
              <td>
                <a target="_blank"
                  href="https://www.bdo.com.ph/personal/accounts/peso-savings-account/passbook-savings"
                  rel="noopener noreferrer">
                  BDO Passbook/ATM Savings
                </a>
              </td>
              <td>
                  0.25%
              </td>
              <td>Quarterly</td>
              <td>
                Php<Result data={this.state} bank="bdo" />
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.cimbbank.com.ph/en/digital-banking/savings-accounts-and-loans/upsave.html">
                  CIMB
                </a>
              </td>
              <td>
                  4%
              </td>
              <td>Every 1 <sup>st</sup> of the month</td>
              <td>
                <strong>Php<Result data={this.state} /></strong>
              </td>
            </tr>
            </tbody>
          </table>
        </Comparison>
        <Disclaimer>
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
        </Disclaimer>
      </Container>
    );
  }
}

export default App;
