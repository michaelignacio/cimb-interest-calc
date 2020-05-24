import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  .visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
  }

  input {
    border-radius: 3px;
    padding: 20px;
    border: none;
    min-width: 250px;
    // width: 85%;

    media (min-width: 992px) {
      // width: unset;
    }
  }

  button {
    margin-top: 10px;
    min-width: 290px;
    background-color: #000;
    border: 1px solid #000;
    border-radius: 3px;
    color: #fff;
    font-weight: 800;
    padding: 20px;
    text-transform: uppercase;
    transition: all .25s;

    &:hover {
      background-color: #555;
      border-color: #555;
    }

    @media (min-width: 768px) {
      margin-top: unset;
      width: unset;
      min-width: unset;
    }
  }

  .thank-you {
    font-size: 20px;
    font-weight: 300;
    transition: all .3s;
  }
`

class Optin extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Form
        onSubmit={this.submitForm}
        action="https://formspree.io/mpzyqkgn"
        method="POST"
      >
        <label className="visually-hidden">Email:</label>
        <input type="email" name="email" placeholder="Your email address..." autoFocus />
        {status === "SUCCESS" ? <p className="thank-you">Thank you! We'll get in touch with you shortly.</p> : <button>Subscribe</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Optin;