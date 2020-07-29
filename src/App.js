import React from 'react';
import './App.css';

const ICON_PATH = "images/items/"

const ESSENTIALS = {
  "Rucksack": false,
  "Sleeping bag": false,
  "Sleeping mat": false,
  "Cutlery": false,
  "Plate/Bowl": false,
  "Mug": false,
  "Water bottles": false,
  "Sunscreen": false,
  "Insect repellant": false,
};

const ESSENTIALS_INFO = {
  "Rucksack": "A 65-70L pack with an internal frame is recommended. Ensure the pack is well sized with an effective waist belt. Shoulders should not bear pack weight. :)",
  "Sleeping bag": "Ideally lightweight and packable. Note the comfort, low and extreme temperature ratings of your sleeping bag and ensure this suits your adventure",
  "Sleeping mat": "A 3cm thick sleeping mat is recommended for comfort. Select a foam pad for budget, self inflating mat for ease of deployment or inflatable mat for a good night's sleep. Don't forget to bring repair patches just incase :)",
  "Cutlery": "A robust and lightweight spork will do, but hey a knife, fork, spoon set will also work incase you lose the spork. Preferably something made of aluminium or titanium for longevity",
  "Plate/Bowl": "One that doubles up for both would be best :) if you had to choose we would recommend picking a bowl over a plate for versatility",
  "Mug": "Something rigid and packable, don't forget to use the space to store hot cocoa or your favourite drink! :)",
  "Water bottles": "Bottles amounting to 2-4L capacity. Would recommend a water bottle over hydration bladder just incase someone decides to be naughty :)",
  "Sunscreen": "50ml tube. Sunscreen with insect repellant infused brings the best of both worlds",
  "Insect repellant": "50ml tube. Likewise an insect repellant which doubles up as sunscreen is a wise choice",
};

const ESSENTIALS_ICONS = {
  "Rucksack": ICON_PATH + "backpack.svg",
  "Sleeping bag": ICON_PATH + "sleeping-bag.svg",
  "Sleeping mat": ICON_PATH + "sleeping-mat.svg",
  "Cutlery": ICON_PATH + "fork.svg",
  "Plate/Bowl": ICON_PATH + "bowl.svg",
  "Mug": ICON_PATH + "mug.svg",
  "Water bottles": ICON_PATH + "water.svg",
  "Sunscreen": ICON_PATH + "sunscreen.svg",
  "Insect repellant": ICON_PATH + "insect-repellent.svg",
}

const FOOD = {
  "Breakfast": false,
  "Lunch": false,
  "Dinner": false,
  "Snacks": false,
};

const FOOD_INFO = {
  "Breakfast": "Porridge, Oats, Muesli, Cereal. Embrace the grains. (Bronze = 2 Breakfasts, Silver = 3, Gold = 4)",
  "Lunch": "Pita Bread, Sandwiches, Wraps, Noodles, Tuna and Crackers, Water biscuits (Bronze = 2 Lunches, Silver = 3, Gold = 4)",
  "Dinner": "Dehydrated meals (Back Country Cuisine), Rice, Cous Cous, Pasta/Risotto, Instant Potato Mash, Cup of Soup (Bronze = 1 Dinner, Silver = 2, Gold = 3)",
  "Snacks": "Cereal/Energy bars, Dried Fruit and Nuts, Trail Mix, Fruit packs, Rice Crackers Chocolate bars :)"
}

const FOOD_ICONS = {
  "Breakfast": ICON_PATH + "breakfast.svg",
  "Lunch": ICON_PATH + "lunch.svg",
  "Dinner": ICON_PATH + "dinner.svg",
  "Snacks": ICON_PATH + "snacks.svg",
};

const CLOTHING = {  
  "Rain jacket": false,
  "Mid layer/Fleece top": false,
  "Base layer/Shirts": false,
  "Thermals": false,
  "Underwear": false,
  "Socks": false,
  "Shoes/Boots": false,
  "Camp shoes": false,
  "Hiking pants/Shorts": false,
  "Hat": false,
  "Beanie": false,
  "Sunglasses": false,
};

const CLOTHING_INFO = {  
  "Rain jacket": "This layer should be waterproof and windproof. Gortex is king. Check the waterproof rating of the jacket, it should be long enough cover below the waist and have a hood. Spray jackets, plastic raincoats and ponchos can be used if you're on a budget but they're not recommended due to lack of durability",
  "Mid layer/Fleece top": "This layer sits underneath your extenal jacket and keeps you warm. Effective layering is key, not how much clothing your pack. Think of the thick fur of a polar bear. We'd recommend fleece or a woolly top :)",
  "Base layer/Shirts": "This layer sits underneath your mid layer and should wick away moisture keeping your dry. Ultralight hikers take a 1x 'wet' and 1x 'dry' set of clothing. Consider this to reduce the weight of your pack. Wool is best, then synthetic then cotton due to moisture wicking properties. Collars preferred, no singlets.",
  "Thermals": "If cold weather with windchill is expected, consider taking a set of thermals. Thermals should be snug and not constrictive",
  "Underwear": "'Going commando' means wearing no underwear. This is not recommended, however 1 pair of clean underwear per day will boost your morale :)",
  "Socks": "1 pair of socks per day will keep your feet happy.",
  "Shoes/Boots": "The weather and terrain should dictate the footwear chosen. If rain is predicted and terrain is rocky, gortex boots may be handy in keeping your feet dry and ankles protected. If doing a flat established trail then basic sneakers will work",
  "Camp shoes": "An optional extra to bring you comfort when moving around the camp, something lightweight and closed toed is recommended like crocs or vibrams",
  "Hiking pants/Shorts": "Something that doesn't chafe, is lightweight and comfortable is recommended. Ideally pants/shorts with 'map' or side pockets are also useful. Would recommend cargo pants over jeans or to get the best of both worlds, hiking pants with zipoffs",
  "Hat": "This is personal preference, because how your feel inside matters! We would recommend a circular brimmed hat that protects both your neck and face from the sun",
  "Beanie": "Take note on the thickness of the beanie and select according to the conditions",
  "Sunglasses": "A must item not only to reduce eye strain but also give it protection. Polarised sunglasses work well for cutting large amounts of glare",
};

const CLOTHING_ICONS = {
  "Rain jacket": ICON_PATH + "raincoat.svg",
  "Mid layer/Fleece top": ICON_PATH + "jumper.svg",
  "Base layer/Shirts": ICON_PATH + "tshirt.svg",
  "Thermals": ICON_PATH + "thermals.svg",
  "Underwear": ICON_PATH + "underwear.svg",
  "Socks": ICON_PATH + "socks.svg",
  "Shoes/Boots": ICON_PATH + "boots.svg",
  "Camp shoes": ICON_PATH + "crocs.svg",
  "Hiking pants/Shorts": ICON_PATH + "shorts.svg",
  "Hat": ICON_PATH + "hat.svg",
  "Beanie": ICON_PATH + "beanie.svg",
  "Sunglasses": ICON_PATH + "sunglasses.svg",
}

const MISC = {
  "Tent": false,
  "Stove": false,
  "Fuel": false,
  "Lighter/Matches": false,
  "Pots/Pans": false,
  "Notepad/pen(cil)": false,
  "First aid kit/Meds": false,
  "Headlamp": false,
  "Multi Tool/Knife": false,
  "Liner/Garbage bag": false,
  "Pack cover": false,
  "Toiletries": false,
  "Small towel": false,
  "Phone/Watch": false,
  "Compass": false,
};

const MISC_INFO = {
  "Tent": "If this is supplied, then happy days. Don't forget tent pegs :)",
  "Stove": "Liquid fuel stoves are preferred, check with your organiser on whether this is supplied",
  "Fuel": "Fuel is best carried in a dedicated fuel bottle, you don't really want this leaking in your pack",
  "Lighter/Matches": "Windproof matches work best if you had to choose",
  "Pots/Pans": "For cooking. Aluminium is great for weight and cost, titanium is also good however can be expensive, avoid stainless steel if possible due to weight",
  "Notepad/pen(cil)": "Map route planning is usually necessary, a small notebook and pencil/pen will help you record significant events. Don't forget your other Duke of Ed paperwork",
  "First aid kit/Meds": "Usually carried by a coordinator/supervisor. However you may want to keep plasters, antiseptic wipes on standby. Don't forget your medication!",
  "Headlamp": "Choose a headlamp over a torch so your hands can remain free. You'll be glad you did when you're eating and need light",
  "Multi Tool": "Opt for a multi tool over a knife. Something like a small Swiss Army knife or Leatherman will do the trick :)",
  "Liner/Garbage bag": "Waterproof your clothing by packing it into a garbage bag before placing it into your pack. Works every time :)",
  "Pack cover": "Rain or shine always take along a pack cover. You want to keep your pack dry if you can",
  "Toiletries": "Toothbrush, toothpaste, toilet paper",
  "Small towel": false,
  "Phone/Watch": false,
  "Compass": false,
};

const MISC_ICONS = {
  "Tent": ICON_PATH + "tent.svg",
  "Stove": ICON_PATH + "stove.svg",
  "Fuel": ICON_PATH + "fuel.svg",
  "Lighter/Matches": ICON_PATH + "match.svg",
  "Pots/Pans": ICON_PATH + "pan.svg",
  "Notepad/pen(cil)": ICON_PATH + "notepad.svg",
  "First aid kit/Meds": ICON_PATH + "first-aid-kit.svg",
  "Headlamp": ICON_PATH + "headlamp.svg",
  "Multi Tool/Knife": ICON_PATH + "swiss-army-knife.svg",
  "Liner/Garbage bag": ICON_PATH + "garbage-bag.svg",
  "Pack cover": ICON_PATH + "backpack.svg",
  "Toiletries": ICON_PATH + "toothbrush.svg",
  "Small towel": ICON_PATH + "towel.svg",
  "Phone/Watch": ICON_PATH + "phone.svg",
  "Compass": ICON_PATH + "compass.svg",
};

function Disclaimer() {
  return (
    <div className="px-3 pb-3"><b>Important:</b> This list is a guide for items you may need for your DofE expedition. By using this list you agree to our
      <a href="https://www.trekoa.com/terms-and-conditions/" target="_blank"><b> Terms & Conditions</b></a> and <a href="https://www.trekoa.com/privacy-policy/" target="_blank"><b>Privacy Policy</b></a>
    </div>
  )
}


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
            <img className="header-button mt-3" src="images/reset.svg" alt="reset"></img>
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
              <Item k={k} cat={category} itemInfo={categoryInfo[k]} itemIcon={categoryIcons[k]}/>
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
    const itemIcon= this.props.itemIcon;
    const isChecked = this.state.isChecked;
    const showInfo = this.state.showInfo;

    return ( 
      <div className="row text-left" key={`${itemKey}-${itemCategory}`}>
      <img src={itemIcon} className="col-2"></img>
      <p className="col-6 pl-3 pt-1">{itemKey}</p>
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

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <section className="row">
        <h1 className="col py-3 text-center font-weight-bold">Duke of Ed Checklist</h1>
        <Disclaimer />
      </section>
        <Category name="Essentials" />
        <Category name="Clothing" />
        <Category name="Food" />
        <Category name="Misc" />
    </div>
  )
}
export default App;
