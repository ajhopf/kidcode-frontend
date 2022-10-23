import React from 'react';
import LoggedHeader from '../organisms/LoggedHeader';
import SideMenu from '../organisms/SideMenu';

export default function LoggedArea(props) {
  return (
    <div className="loggedArea">
      <SideMenu />
      <div className="appMain">
        <LoggedHeader />
        {props.children}
      </div>
    </div>
  );
}
