import React, { Component } from 'react';
import styled from 'styled-components';
import exitIntent from 'exit-intent';
import Table from './components/Table';
import Result from './components/Result';
import Sidebar from './components/Sidebar';
import ExitIntentPopup from './components/ExitIntentPopup';
import Form from './components/Form';
import Landing from './components/Landing';

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  h1 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    height: 95vh;
    max-width: 1280px;
    margin: 0 auto;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 1rem;
  align-items: center;
`

const Disclaimer = styled.small`
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

const Legend = styled.div`
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

class App extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      adb: 100000,
      interest: 4,
      days: 31,
      tax: 20,
      result: 0,
      exitIntent: false
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const removeExitIntent = exitIntent({
      threshold: 50,
      maxDisplays: 1,
      eventThrottle: 100,
      onExitIntent: () => {
        this.setState({ exitIntent: true });
      }
    });

    this.state.exitIntent && removeExitIntent();
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
        <Content>
        <h1>CIMB PH Interest Calculator</h1>
        <Form
          handleChange={(e) => this.handleChange(e)}
          state={this.state}
        />
        <Legend>
          <div>
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
            </div>
            <div>
            <code>
              <p><small>net interest = gross interest - withholding tax</small></p>
            </code>
            <p>
              <code>net interest = </code><strong>Php<Result data={this.state} type="net" /></strong>
            </p>
          </div>
        </Legend>
        <Table props={this.state} />
        </Content>
        <Sidebar />
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
        { this.state.exitIntent &&
          <ExitIntentPopup
            onClick={() => this.setState({ exitIntent: false })}
          />
        }
      </Container>
    );
  }
}

export default App;
