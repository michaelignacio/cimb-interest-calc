import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Content = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1280px;
  margin: auto;
  transition: all .3s;
  padding: 20px;
  height: 93vh;

  &.container-appear {
    opacity: 0;
  }

  &.container-appear-done {
    opacity: 1;
  }

  @media (min-width: 768px) {
    height: 100vh;
    padding: unset;
  }
`

const Title = styled.p`
  font-size: 36px;
  text-align: center;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 48px;
    margin-top: -40px;
  }
`

const ADB = styled(Input)`
  border-radius: 5px;
  border-style: none;
  border: 1px solid #ccc;
  font-size: 1.25rem;
  text-align: center;
  padding: 20px 0;
  min-width: 280px;
  max-width: 280px;

  @media (min-width: 768px) {
    min-width: 360px;
    max-width: unset;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Button = styled.button`
  background-color: #007DFE;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 20px 20px;
  text-transform: uppercase;
  transition: all .3s;
  min-width: 280px;
  margin-top: 10px;

  &:hover {
    filter: brightness(85%);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    margin-left: 15px;
    margin-top: unset;
    min-width: 350px;
    max-width: unset;
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