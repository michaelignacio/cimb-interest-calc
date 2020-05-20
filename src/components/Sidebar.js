import React from 'react';
import styled from 'styled-components';
import MobileStoreButton from 'react-mobile-store-button';

const ynabLink = 'https://ynab.com/referral/?ref=X3iIw2rgz_P89RJJ&utm_source=customer_referral';
const iOSUrl = 'https://apps.apple.com/ph/app/paymaya/id991673877';
const androidUrl = 'https://play.google.com/store/apps/details?id=com.paymaya&hl=en';

const StyledSidebar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  @media (min-width: 768px) {
    margin-left: 60px;
  }

  .mt {
    margin-top: 1.5rem;
  }
`

const YNAB = styled.div`
  background-color: #85C3E9;
  border-radius: 3px;
  color: #fff;
  font-size: 1.2rem;
  padding: 40px;
  max-width: 230px;
  margin-bottom: 20px;
`

const PayMaya = styled(YNAB)`
  background-color: #8DC640;
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

const PayMayaCode = styled.strong`
  font-size: 2.5rem;
`

const Title = styled.p`
  font-weight: 800;
  font-size: 1.4rem;
`

const Sidebar = () => (
  <StyledSidebar>
    <YNAB>
      <Title>Gain Total Control of Your Money</Title>
      <p>Stop living paycheck-to-paycheck, get out of debt, and save more money. </p>
      <p className="mt">
        <Button
          href={ynabLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Try YNAB for Free!
        </Button>
      </p>
    </YNAB>
    <PayMaya>
      <Title>Get P50 for FREE</Title>
      <p>When you sign-up to PayMaya using my invite code!</p>
      <p><PayMayaCode>bwx3jm</PayMayaCode></p>
      <MobileStoreButton
        store="ios"
        url={iOSUrl}
        linkProps={{ title: 'Download PayMaya on the App Store' }}
        width="150px"
        height="40px"
      />
      <MobileStoreButton
        store="android"
        url={androidUrl}
        linkProps={{ title: 'Download PayMaya on Google Play' }}
        width="175px"
        height="70px"
      />
    </PayMaya>
  </StyledSidebar>
);

export default Sidebar;