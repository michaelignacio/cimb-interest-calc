import React, { Component } from 'react';
import styled from 'styled-components';
import exitIntent from 'exit-intent';
import Table from './components/Table';
// import Result from './components/Result';
import Sidebar from './components/Sidebar';
import ExitIntentPopup from './components/ExitIntentPopup';
import Form from './components/Form';
import Landing from './components/Landing';
import Disclaimer from './components/Disclaimer';
import Legend from './components/Legend';

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
        <Legend props={this.state} />
        <Table props={this.state} />
        </Content>
        <Sidebar />
        <Disclaimer />
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
