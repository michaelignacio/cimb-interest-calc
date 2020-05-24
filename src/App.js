import React, { Component } from 'react';
import styled from 'styled-components';
import exitIntent from 'exit-intent';
import Table from './components/Table';
import { CSSTransition } from 'react-transition-group';
import Sidebar from './components/Sidebar';
import ExitIntentPopup from './components/ExitIntentPopup';
import Form from './components/Form';
import Landing from './components/Landing';
import Disclaimer from './components/Disclaimer';
import Legend from './components/Legend';
import Header from './components/Header';

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  opacity: 0;
  transition: all .5s;
  padding-top: 100px;

  h1 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    padding-top: 25px;
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

  &.container-appear,
  &.container-enter {
    opacity: 0;
  }

  &.container-appear-done,
  &.container-enter-done {
    opacity: 1;
  }
`

const FormArea = styled.div`
  @media (min-width: 768px) {
    display: flex;
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
      exitIntent: false,
      landing: true
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const removeExitIntent = exitIntent({
      threshold: 20,
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

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      landing: false
    });
  }

  render() {
    return (
      <>
        <Header />
      { this.state.landing ? (
        <CSSTransition
          in={!this.state.landing}
          timeout={400}
          classNames="landing-out"
          appear
        >
        <Landing
          className="landing-out"
          handleSubmit={(e) => this.handleSubmit(e)}
          handleChange={(e) => this.handleChange(e)}
          state={this.state}
        />
        </CSSTransition>
        ) : (
        <CSSTransition
          in={!this.state.landing}
          timeout={400}
          classNames="container"
          appear
        >
        <Container className="container">
          <Content>
          <FormArea>
            <Form
              handleChange={(e) => this.handleChange(e)}
              state={this.state}
            />
            <Legend props={this.state} />
          </FormArea>
          <Table props={this.state} />
          </Content>
          <Sidebar />
          {/*<Disclaimer />*/}
          { this.state.exitIntent && !this.state.landing &&
            <ExitIntentPopup
              onClick={() => this.setState({ exitIntent: false })}
            /> }
        </Container>
      </CSSTransition>
      )}
      </>
    );
  }
}

export default App;
