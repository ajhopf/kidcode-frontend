import React from 'react';
import AppHeader from '../organisms/AppHeader';
import AppFooter from '../organisms/AppFooter';
import MainNav from '../molecules/MainNav';

export default function Default(props) {
  return (
    <div className="default">
      <AppHeader>
        <MainNav />
      </AppHeader>
      {props.children}
      <AppFooter />
    </div>
  );
}
