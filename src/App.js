import React from 'react';
import './App.css';

const Essentials = {
  "Rucksack": false,
  "Sleeping Bag": false,
  "Sleeping Mat": false,
  "Cutlery": false,
  "Plate/Bowl": false,
  "Mug": false,
  "Water bottles": false,
  "Sunscreen": false,
  "Insect Repellant": false,
};

const Clothing = {  
  "Shoes/Boots": false,
  "Camp Shoes": false,
  "Socks": false,
  "Hiking pants/Shorts": false,
  "Thermals": false,
  "Hat": false,
  "Beanie": false,
  "Sunglasses": false,
  "Mid layer/Fleece top": false,
  "Long/Short sleeve shirt": false,
  "Rain Jacket": false,
};

const Food = {
  "Breakfast": false,
  "Lunch": false,
  "Dinner": false,
};

const Extras = {
  "Tent": false,
  "Stove": false,
  "Fuel": false,
  "Lighter/Matches": false,
  "Pots/Pans": false,
  "First Aid Kit": false,
  "Headlamp": false,
  "Multi Tool/Knife": false,
  "Pack Liner/Garbage Bag": false,
  "Phone/Watch": false,
};

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
    super(props);

    this.state = {
      essentials: Essentials,
      clothing: Clothing,
      food: Food,
      extras: Extras 
    }
  }

  render() {
    let category = {};
    switch (this.props.name) {
      case "Essentials": 
        category = this.state.essentials; break;
      case "Clothing": 
        category = this.state.clothing; break;
      case "Food": 
        category = this.state.food; break;
      default: 
        category = this.state.extras; break;
    };

    return ( 
    <section className="py-2">
        <h2 className="row pl-3 pb-1 font-weight-bold">{this.props.name}</h2>
        { Object.keys(category).map((k,v) => {
          return (
              <Item k={k} cat={category} />
        )})

        }
    </section>
    )}

} 

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemKey: this.props.k,
      itemCategory: this.props.cat,
      isChecked: false
    };

    this.handleChecked = this.handleChecked.bind(this);
    this.handleInfoClick = this.handleInfoClick.bind(this);
  }
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  } 

  handleInfoClick() {
    console.log("Inside HandleInfoClick");
  }

  render() {
    const itemKey = this.state.itemKey;
    const itemCategory= this.state.itemCategory;

    return ( 
      <div className="row text-left" key={`${itemKey}-${itemCategory}`}>
      <p className="col-8 pl-3 pt-1">{itemKey}</p>
        { this.state.isChecked ? 
          <input type="image" className="col-2 tickbox-circle" value={this.state.isChecked} src="checked.svg" alt="tick-check" onClick={this.handleChecked}></input> :
          <input type="image" className="col-2 tickbox-circle" value={this.state.isChecked} src="unchecked.svg" alt="untick-check" onClick={this.handleChecked}></input>
        }
      <img className="col-2" src="more-info.svg" alt="more-info" onClick={this.handleInfoClick}></img>
    </div>
    )}
}

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <section className="row">
        <h1 className="col py-3 text-center font-weight-bold">Duke of Ed Pack List</h1>
      </section>
        <Category name="Essentials" />
        <Category name="Clothing" />
        <Category name="Food" />
        <Category name="Extras" />
    </div>
  );
}

export default App;
