import React from 'react';
import './App.css';

const ESSENTIALS = {
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

const ESSENTIALS_INFO = {
    "Rucksack": "A 65-70L pack with an internal frame recommended",
    "Sleeping Bag": "Ideally lightweight and packable. Take note of the low and extreme ratings of your sleeping bag and whether you're a cold or warm sleeper",
    "Sleeping Mat": "3cm thick for comfort. Can choose to go sleeping pad for budget, self inflating mat for ease or inflatable mat for a good nights sleep. Don't forget to bring repair patches just incase :)",
    "Cutlery": "Robust and lightweight, preferably something aluminium or titanium for longevity",
    "Plate/Bowl": "One that doubles up for both would be best, if you had to choose one we would recommend picking a bowl over a plate for versatility",
    "Mug": "Something rigid and packable will do :)",
    "Water bottles": "2-4L capacity. Would recommend a water bottle over hydration bladder just incase things break :)",
    "Sunscreen": "50ml tube. Sunscreen with insect repellant infused are the best bang for buck",
    "Insect Repellant": "50ml tube. Insect repellant with sunscreen properties are a wise choice",
};

const CLOTHING = {  
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

const FOOD = {
  "Breakfast": false,
  "Lunch": false,
  "Dinner": false,
};

const EXTRAS = {
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
      // essentials: Essentials,
      // clothing: Clothing,
      // food: Food,
      // extras: Extras 
    }
  }

  render() {
    let category = {};
    switch (this.props.name) {
      case "Essentials": 
        category = ESSENTIALS; break;
      case "Clothing": 
        category = CLOTHING; break;
      case "Food": 
        category = FOOD; break;
      default: 
        category = EXTRAS; break;
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
      isChecked: false,
      information: ""
    };

    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  } 

  render() {
    const itemKey = this.props.k;
    const itemCategory= this.props.cat;
    const isChecked = this.state.isChecked;
    const info = this.state.information;

    return ( 
      <div className="row text-left" key={`${itemKey}-${itemCategory}`}>
      <p className="col-8 pl-3 pt-1">{itemKey}</p>
        { isChecked ? 
          <input type="image" className="col-2 tickbox-circle" value={isChecked} src="checked.svg" alt="tick-check" onClick={this.handleChecked}></input> :
          <input type="image" className="col-2 tickbox-circle" value={isChecked} src="unchecked.svg" alt="untick-check" onClick={this.handleChecked}></input>
        }
      <input type="image" data-toggle="modal" data-target="#itemModal" className="col-2 tickbox-circle" src="more-info.svg" alt="more-info"></input>
      <div className="modal fade" id="itemModal" tabIndex="-1" role="dialog" aria-labelledby="moreInfoTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="itemModalTitle">More Info</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {info}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
}

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <section className="row">
        <h1 className="col py-3 text-center font-weight-bold">Have you got everything?</h1>
      </section>
        <Category name="Essentials" />
        <Category name="Clothing" />
        <Category name="Food" />
        <Category name="Extras" />
    </div>
  );
}

export default App;
