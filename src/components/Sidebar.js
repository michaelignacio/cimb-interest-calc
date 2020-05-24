import React, { useState } from 'react';
import styled from 'styled-components';
import MobileStoreButton from 'react-mobile-store-button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const ynabLink = 'https://ynab.com/referral/?ref=X3iIw2rgz_P89RJJ&utm_source=customer_referral';
const iOSUrl = 'https://apps.apple.com/ph/app/paymaya/id991673877';
const androidUrl = 'https://play.google.com/store/apps/details?id=com.paymaya&hl=en';
const gcashLink = 'https://gcsh.app/r/5qQd0W9';

const StyledSidebar = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-direction: column;

  .not-copied {
    opacity: 0;
  }

  .copy {
    transition: all .3s;
    animation: opacityOn 1.9s normal forwards;
  }

  @keyframes opacityOn {
      0% {
          opacity: 0;
      }
      50% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    margin-bottom: 0;
    margin-left: 60px;
    flex-direction: column;
  }

  .mt {
    margin-top: 1.5rem;
  }

  .mt-0 {
    margin-top: 0;
  }

  .mb-0 {
    margin-bottom: 0;
  }
`

const YNAB = styled.div`
  background-color: #85C3E9;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  padding: 20px;
  margin-bottom: 20px;
  margin: 1rem;
  max-width: 230px;

  @media (min-width: 1200px) {
    flex-grow: unset;
    max-width: 230px;
  }
`

const PayMaya = styled(YNAB)`
  background-color: #8DC640;
  display: flex;
  flex-direction: column;
`

const Gcash = styled(YNAB)`
  background-color: #0332BE;
`

const Button = styled.a`
  background-color: #CEDD3E;
  border-radius: 3px;
  color: #244564;
  font-weight: 800;
  padding: 12px;
  text-decoration: none;
  transition: all .3s;

  &:hover {
    filter: brightness(90%);
  }
`

const GcashButton = styled(Button)`
  background-color: #fff;
  color: #2974e7;
`

const PayMayaCode = styled.strong`
  font-size: 2.5rem;
  transition: all .3s;

  &:hover {
    cursor: pointer;
  }
`

const Title = styled.p`
  font-weight: 800;
  font-size: 1.4rem;
  margin-top: 0;
`

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
`

const Sidebar = () => {
  const [ isCopied, setIsCopied ] = useState(false);

  return (
    <StyledSidebar>
      <YNAB>
        <Title>Gain Total Control of Your Money</Title>
        {/*<p>Stop living paycheck-to-paycheck, get out of debt, and save more money. </p>*/}
        <p className="mt">
          <Button
            href={ynabLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try YNAB Free
          </Button>
        </p>
      </YNAB>
      <Gcash>
        <Title>Try GCash and get P70 worth of freebies</Title>
        {/*<p>Stop living paycheck-to-paycheck, get out of debt, and save more money. </p>*/}
        <p className="mt">
          <GcashButton
            href={gcashLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Claim Gift Now
          </GcashButton>
        </p>
      </Gcash>
      <PayMaya>
        <Title>Signup to PayMaya and get P50</Title>
        <CopyToClipboard
          text='bwx3jm'
          onCopy={() => setIsCopied(true)}>
          <PayMayaCode>bwx3jm <FaCopy size=".5em" /></PayMayaCode>
        </CopyToClipboard>
        { isCopied
          ? <small className="copy">Copied to clipboard!</small>
          : <small className="not-copied">Copied to clipboard!</small> }
        {/*<p className="mt-0"><PayMayaCode>bwx3jm</PayMayaCode></p>*/}
        <DownloadButtons>
          <MobileStoreButton
            store="ios"
            url={iOSUrl}
            linkProps={{ title: 'Download PayMaya on the App Store' }}
            height={70}
            width={200}
          />
          <MobileStoreButton
            store="android"
            url={androidUrl}
            linkProps={{ title: 'Download PayMaya on Google Play' }}
            height={70}
            width={200}
          />
        </DownloadButtons>
      </PayMaya>
    </StyledSidebar>
  );
}

export default Sidebar;