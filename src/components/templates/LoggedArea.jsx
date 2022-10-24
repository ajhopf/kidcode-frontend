import React from 'react';

import LoggedNav from '../molecules/LoggedNav';
import AppHeader from '../organisms/AppHeader';
import AppFooter from '../organisms/AppFooter';

export default function LoggedArea(props) {
  const setOption = props.setOption;

  return (
    <div className="loggedArea">
      <AppHeader>
        <LoggedNav setOption={setOption} />
      </AppHeader>

      <main>{props.children}</main>
      <AppFooter />
    </div>
  );
}
