import React from 'react';
import LoggedHeader from '../organisms/LoggedHeader';
import SideMenu from '../organisms/SideMenu';

export default function LoggedArea(props) {
  return (
    <>
      <SideMenu />
      <LoggedHeader />
      <div className="appMain">{props.children}</div>
    </>
  );
}
