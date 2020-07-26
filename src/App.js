import React from 'react';
import './App.css';
// import { render } from '@testing-library/react';

class Header extends React.Component {
  render() {
    return (
      <div className="header-style row py-3">
          <div className="col pl-5">
          <a href="http://www.trekoa.com">
            <img className="header-logo" src="trekoa-logo.png" alt="trekoa-logo"></img>
          </a>
          </div>
        <div className="col pr-5 text-right">
          {/* add onclick handler */}
            <img className="header-logo" src="reset.svg" alt="reset"></img>
        </div>

      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Header />
      hello
    </div>
  );
}

export default App;
