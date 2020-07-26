import React from 'react';
import './App.css';

const items = {
  "Rucksack": false,
  "Tent": false,
  "Food": false,
  "Sleeping Bag": false,
  "Sleeping Mat": false,
  "Rain Jacket": false,
  "Water bottles": false,
};

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
            <img className="header-button mt-3" src="reset.svg" alt="reset"></img>
        </div>

      </div>
    )
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( 
    <div>
        <h3 className="row pl-3 pb-2">{this.props.name}</h3>
    </div>
    )}

} 

class Item extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return ( 
    <div>
      
    </div>
    )}
}

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <section className="row">
        <h2 className="col py-3 pl-3">Have you packed everything?</h2>
      </section>
      <section>
        <Category name="Essentials" />
        <div className="row">
          <div className="col text-center">Rucksack</div>
          <div className="col text-center">Sleeping Mat</div>
          <div className="col text-center">Sleeping Bag</div>
          <div className="col text-center">Rucksack</div>
        </div>
      </section>
    </div>
  );
}

export default App;
