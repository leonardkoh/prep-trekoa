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
    "Rucksack": "A 65-70L pack with an internal frame is recommended. Ensure the pack is well sized and waist belt is effective. Shoulders should not bear pack weight :)",
    "Sleeping Bag": "Ideally both lightweight and packable. Note the comfort, low and extreme temperature ratings of your sleeping bag and ensure this suits your adventure",
    "Sleeping Mat": "A 3cm thick sleeping mat is recommended for comfort. Select a foam pad for budget, self inflating mat for ease of deployment or inflatable mat for a good night's sleep. Don't forget to bring repair patches just incase :)",
    "Cutlery": "1x robust and lightweight spork will do, but hey a knife, fork, spoon set will also do incase you lose the spork. Preferably made of aluminium or titanium for longevity",
    "Plate/Bowl": "One that doubles up for both would be best :) if you had to choose one we would recommend picking a bowl over a plate for versatility",
    "Mug": "Something rigid and packable will be great :)",
    "Water bottles": "Bottles amounting to 2-4L capacity. Would recommend a water bottle over hydration bladder just incase someone decides to be naughty :)",
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

    //lift state from Item
  }

  render() {
    let category = {};
    let categoryInfo = {};
    switch (this.props.name) {
      case "Essentials": 
        category = ESSENTIALS; 
        categoryInfo = ESSENTIALS_INFO;
        break;
      case "Clothing": 
        category = CLOTHING; break;
      case "Food": 
        category = FOOD; break;
      default: 
        category = EXTRAS; break;
    };

    return ( 
    <section className="py-2">
        <h2 className="row pl-3 pb-1 font-weight-bold"><u>{this.props.name}</u></h2>
        { Object.keys(category).map((k,v) => {
          return (
              <Item k={k} cat={category} itemInfo={categoryInfo[k]}/>
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
      showInfo: false
    };

    this.toggleChecked = this.toggleChecked.bind(this);
    this.toggleMoreInfo = this.toggleMoreInfo.bind(this);
  }

  toggleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  } 

  toggleMoreInfo() {
    this.setState({ showInfo: !this.state.showInfo });
  }
  render() {
    const itemKey = this.props.k;
    const itemCategory= this.props.cat;
    const isChecked = this.state.isChecked;
    const showInfo = this.state.showInfo;

    return ( 
      <div className="row text-left" key={`${itemKey}-${itemCategory}`}>
      <p className="col-8 pl-3 pt-1">{itemKey}</p>
        { isChecked ? 
          <input type="image" className="col-2 tickbox-circle" value={isChecked} src="checked.svg" alt="tick-check" onClick={this.toggleChecked}></input> :
          <input type="image" className="col-2 tickbox-circle" value={isChecked} src="unchecked.svg" alt="untick-check" onClick={this.toggleChecked}></input>
        }
      <input type="image" className="col-2 tickbox-circle" src="more-info.svg" alt="more-info" onClick={this.toggleMoreInfo}></input>
        { showInfo ? 
          <div className="info-text pb-3 px-3">{this.props.itemInfo}</div> : 
          <p></p> 
        }
      
    </div>
    )}
}

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <section className="row">
        <h1 className="col py-3 text-center font-weight-bold">Don't forget your smile :)</h1>
      </section>
        <Category name="Essentials" />
        <Category name="Clothing" />
        <Category name="Food" />
        <Category name="Extras" />
    </div>
  );
}

export default App;
