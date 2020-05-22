import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Content = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: 1280px;
  margin: auto;
  transition: all .3s;

  &.container-appear {
    opacity: 0;
  }

  &.container-appear-done {
    opacity: 1;
  }
`

const Title = styled.p`
  font-size: 60px;
  text-align: center;
  margin-top: -40px;
`

const ADB = styled(Input)`
  border-radius: 3px;
  border-style: none;
  border: 1px solid #ccc;
  font-size: 2rem;
  min-width: 360px;
  text-align: center;
  padding: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  background-color: #007DFE;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 20px;
  padding: 20px;
  text-transform: uppercase;
  width: 350px;
  transition: all .3s;

  &:hover {
    filter: brightness(90%);
  }
`

const Landing = (props) => (
  <Content className={props.className}>
    <Title>
      How much is your average daily balance?
    </Title>
    <Form onSubmit={props.handleSubmit}>
      <ADB
        id="adb"
        type="number"
        min="0"
        name="adb"
        placeholder="Average daily balance..."
        onChange={props.handleChange}
        value={props.state.adb}
      />
      <Button onClick={props.handleSubmit}>
        Continue
      </Button>
    </Form>
  </Content>
);

export default Landing;