import React from 'react';
import './App.css';
import { ICON_PATH, ESSENTIALS, ESSENTIALS_INFO, ESSENTIALS_ICONS,
  FOOD, FOOD_INFO, FOOD_ICONS, CLOTHING, CLOTHING_INFO, CLOTHING_ICONS,
  MISC, MISC_INFO, MISC_ICONS, OPTIONAL_ITEMS
} from './Data.js';

function AppInfo() {
  return (
    <div className="row px-3">
      <h5 className="px-3 pb-2"><b>Important:</b> This list is a guide for items you may need on your DofE expedition. By using this list you agree to our
        <a href="https://www.trekoa.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer"><b> Terms & Conditions</b></a>
      </h5>
      <h5 className="px-3 pb-3"><b>To use:</b> View on phone, tick off each item as you pack, click info for our recommendations</h5>
    </div>
  )
}

function WeightInfo() {
  return (
    <div className="pt-1">
      <h4 className="text-center pb-1">What do the coloured items mean?</h4>
      <div><h5>Glad you asked! Experts suggest you should carry less than 20% of your body weight.</h5></div>
        <h5 className="pb-1">Consider removing or reducing some of the these items</h5>
    </div>    
  )
}

class Headerbar extends React.Component {
  render() {
    return (
      <div className="header-style row py-3 px-3">
          <div className="col pl-2">
          <a href="http://www.trekoa.com">
            <img className="header-logo" src="trekoa-logo.png" alt="trekoa-logo"></img>
          </a>
          </div>
        <div className="col pr-4 text-right">
            <img className="header-button mt-3 pr-3" src="images/reset.svg" alt="reset"></img>
            <a href="http://www.trekoa.com"><img className="header-button mt-3" src="images/home.svg" alt="reset"></img></a>
        </div>
      </div>
    )
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props);

    //lift state from Item
    this.state = {}
  }

  render() {
    let category = {};
    let categoryInfo = {};
    let categoryIcons = {};
    switch (this.props.name) {
      case "Essentials": 
        category = ESSENTIALS; 
        categoryInfo = ESSENTIALS_INFO;
        categoryIcons = ESSENTIALS_ICONS;
        break;
      case "Clothing": 
        category = CLOTHING; 
        categoryInfo = CLOTHING_INFO;
        categoryIcons = CLOTHING_ICONS;
        break;
      case "Food": 
        category = FOOD; 
        categoryInfo = FOOD_INFO;
        categoryIcons = FOOD_ICONS;
        break;
      default: 
        category = MISC; 
        categoryInfo = MISC_INFO;
        categoryIcons = MISC_ICONS;
    };

    return ( 
    <section className="py-2">
        <h2 className="row pl-3 pb-1"><b><u>{this.props.name}</u></b></h2>
        { Object.keys(category).map((k,v) => {
          return (
              <div key={`${k}${category}`}><Item k={k} itemInfo={categoryInfo[k]} itemIcon={categoryIcons[k]}/></div>
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
    const itemIcon= this.props.itemIcon;
    const isChecked = this.state.isChecked;
    const showInfo = this.state.showInfo;

    return ( 
      <div className="row text-left">
      <img src={itemIcon} className="col-2" alt="item-icon"></img>
      {
         itemKey in OPTIONAL_ITEMS ? <p className="col-6 pl-3 pt-1 optional-item">{itemKey}</p> : <p className="col-6 pl-3 pt-1">{itemKey}</p>
      }
      { isChecked ? 
        <input type="image" className="col-2 tickbox-circle" src="images/checked.svg" alt="tick-check" onClick={this.toggleChecked}></input> :
        <input type="image" className="col-2 tickbox-circle" src="images/unchecked.svg" alt="untick-check" onClick={this.toggleChecked}></input>
      }
      <input type="image" className="col-2 tickbox-circle" value={showInfo} src="images/more-info.svg" alt="more-info" onClick={this.toggleMoreInfo}></input>
      { showInfo ? 
        <div className="info-text pb-3 px-3">{this.props.itemInfo}</div>: 
        <p></p> 
      }
    </div>
    )}
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weight: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({weight: e.target.value});
  }

  render() {
    return (
      <div className="row px-2 text-center">
        <div className="col-6">
        <h5>My weight</h5>
        <h5><input className="text-center" type="text" placeholder="kg" value={this.state.weight} onChange={this.handleChange}></input></h5>
        </div>
        <div className="col-6">
          <h5>Pack weight</h5>
          <h5><input className="text-center" type="text" value={`${(this.state.weight*0.2).toFixed(1)} kg`} readOnly></input></h5>
        </div>
      </div>
    )}
}

function App() {
  return (
    <div className="container-fluid">
      <Headerbar />
      <section className="row app-info px-3">
        <h1 className="col py-3 text-center font-weight-bold">Duke of Ed Checklist</h1>
        <AppInfo />
      </section>
      <section className="row mx-3">
        <Category name="Essentials" />
        <Category name="Clothing" />
        <Category name="Food" />
        <Category name="Misc" />
      </section>
      <section className="app-info px-3 py-3">
        <WeightInfo />
        <Calculator />
      </section>
    </div>
  )
}
export default App;
