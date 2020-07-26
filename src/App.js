import React from 'react';
import logo from './logo.svg';
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
          {/* onclick */}
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
