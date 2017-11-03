import React from 'react';

const Layout = ({content}) => (
  <div>
  <header>
    <h1>Hello</h1>
  </header>
  <div>
      {content()}
    </div>
  </div>
);
export default Layout;
