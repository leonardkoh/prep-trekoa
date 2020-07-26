import React from 'react';
import './App.css';

const Essentials = {
  "Rucksack": true,
  "Sleeping Bag": false,
  "Sleeping Mat": false,
  "Cutlery": false,
  "Plate/Bowl": true,
  "Mug": false,
  "Sunscreen": false,
  "Insect Repellant": false,
};

// const Clothing = {
//   "Shoes/Boots": false,
//   "Camp Shoes": false,
//   "Socks": false,
//   "Hiking pants/shorts": false,
//   "Thermals": false,
//   "Hat": false,
//   "Beanie": false,
//   "Sunglasses": false,
//   "Mid layer / Fleece top": false,
//   "Long/Short sleeve shirt": false,
//   "Rain Jacket": false,
// };

// const Food = {
//   "Water bottles": false,
//   "Breakfast": false,
//   "Lunch": false,
//   "Dinner": false,
// };

// const Extras = {
//   "Tent": false,
//   "Stove": false,
//   "Fuel": false,
//   "Lighter/Matches": false,
//   "Pots/Pans": false,
//   "First Aid Kit": false,
//   "Headlamp": false,
//   "Multi Tool / Knife": false,
//   "Pack Liner/Garbage Bag": false,
//   "Phone/Watch": false,
// };

class Header extends React.Component {
  render() {
    return (
      <div className="header-style row py-3">
          <div className="col pl-2">
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
    
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    console.log("Inside HandleImageClick");
  }

  render() {
    return ( 
    <section className="py-2">
        <h2 className="row pl-3 pb-1 font-weight-bold">{this.props.name}</h2>
        { Object.keys(Essentials).map((k,v) => {
          return <div className="row text-left" key={`${k}-${v}`}>
            <p className="col pl-3">{k}</p>
            {k.v ?
            <img className="col" src="checked.svg" alt="tick-check" onClick={this.handleImageClick}></img> :
            <img className="col" src="unchecked.svg" alt="untick-check" onClick={this.handleImageClick}></img> 
            }
            <div className="col"></div>
          </div>;
        })

        }
    </section>
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
        <h1 className="col py-3 text-center font-weight-bold">Have you packed everything?</h1>
      </section>
        <Category name="Essentials" />
        <Category name="Clothing" />
        <Category name="Food" />
        <Category name="Extras" />
    </div>
  );
}

export default App;
