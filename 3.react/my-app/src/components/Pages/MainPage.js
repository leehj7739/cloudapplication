import React from 'react';
import './MainPage.css';
import MainHeader from '../organisms/MainHeader';
import MainContainer from '../organisms/MainContainer';
import MainFooter from '../organisms/MainFooter';

function MainPage() {

  return (
    <React.Fragment>
      <MainHeader />
      <MainContainer />
      <MainFooter />
    </React.Fragment>
  );
}

export default MainPage;
