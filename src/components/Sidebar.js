import React from 'react';
import styled from 'styled-components';
import MobileStoreButton from 'react-mobile-store-button';

const ynabLink = 'https://ynab.com/referral/?ref=X3iIw2rgz_P89RJJ&utm_source=customer_referral';
const iOSUrl = 'https://apps.apple.com/ph/app/paymaya/id991673877';
const androidUrl = 'https://play.google.com/store/apps/details?id=com.paymaya&hl=en';

const StyledSidebar = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-direction: column;

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
`

const YNAB = styled.div`
  background-color: #85C3E9;
  border-radius: 3px;
  color: #fff;
  font-size: 1.2rem;
  padding: 40px;
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
  flex-grow: 1;

  @media (min-width: 1200px) {
    // flex-grow: unset;
  }
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

const DownloadButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
          height={100}
          width={200}
        />
      </DownloadButtons>
    </PayMaya>
  </StyledSidebar>
);

export default Sidebar;