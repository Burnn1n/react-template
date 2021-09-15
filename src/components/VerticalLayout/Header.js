import React, { useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss'
const Header = ({history}) => {
  return (
    <React.Fragment>
    <header className="containing">
      <div className="logo">
        <a href="/">logo</a>
      </div>
      <div className="login">
        <a href="/admin" >admin</a>
      </div>
    </header>
    </React.Fragment>
  );
};

export default Header;