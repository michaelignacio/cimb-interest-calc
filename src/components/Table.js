import React from 'react';
import styled from 'styled-components';
import Result from './Result';

const Comparison = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  a {
    color: #007DFE;
  }

  body {
    font-family: "Open Sans", sans-serif;
    line-height: 1.25;
  }

  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    border-radius: 5px;
    margin: 0;
    padding: 0;
    table-layout: fixed;

    th,
    td {
      padding: .625em;
      text-align: center;
    }

    th {
      font-size: .85em;
      letter-spacing: .1em;
      text-transform: uppercase;
    }
  }

  @media (min-width: 768px) {
    table th,
    table tr:nth-child(even) {
      background-color: #f8f8f8;
    }

    table tr {
      border: 1px solid #ddd;
      padding: .35em;
    }
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;

      thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625em;
      }

      td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .8em;
      }

      td::before {
        /*
        * aria-label has no advantage, it won't be read inside a table
        content: attr(aria-label);
        */
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }

      td:last-child {
        border-bottom: 0;
      }
    }
  }
`

const Table = ({props}) => (
  <Comparison>
    <h2>
      Comparison with other banks' regular savings accounts
     </h2>
    <table>
      <thead>
        <tr>
          <th>Bank</th>
          <th>Interest rate per annum</th>
          <th>Credited when</th>
          <th>Gross interest earned</th>
          <th>Yearly gross interest</th>
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
          <Result data={props} bank="bpi" />
        </td>
        <td>
          <Result data={props} bank="bpi" multiplier="3" />
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
          <Result data={props} bank="bdo" />
        </td>
        <td>
          <Result data={props} bank="bdo" multiplier="3" />
        </td>
      </tr>
      <tr>
        <td>
          <a href="https://www.cimbbank.com.ph/en/digital-banking/savings-accounts-and-loans/upsave.html">
            CIMB Upsave
          </a>
        </td>
        <td>
            4%
        </td>
        <td>Every 1 <sup>st</sup> of the month</td>
        <td>
          <strong><Result data={props} /></strong>
        </td>
        <td>
          <strong><Result data={props} multiplier="12" /></strong>
        </td>
      </tr>
      </tbody>
    </table>
  </Comparison>
);

export default Table