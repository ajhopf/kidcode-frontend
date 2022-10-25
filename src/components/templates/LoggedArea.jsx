import React from 'react';

import LoggedNav from '../molecules/LoggedNav';
import AppHeader from '../organisms/AppHeader';
import AppFooter from '../organisms/AppFooter';

export default function LoggedArea(props) {
  const setOption = props.setOption;
  const [isHeaderActive, setIsHeaderActive] = React.useState(false);

  return (
    <div className="loggedArea">
      <AppHeader
        isHeaderActive={isHeaderActive}
        setIsHeaderActive={setIsHeaderActive}
      >
        <LoggedNav setOption={setOption} isHeaderActive={isHeaderActive} />
      </AppHeader>

      <main>{props.children}</main>
      <AppFooter />
    </div>
  );
}
