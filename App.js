import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return(
    <header className="header">
      <div className="container header-wrap">
        <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9RNx_tM1jdJJHp0lASjUdMUKsyMJhMWqqzI51BUBdw&usqp=CAU&ec=48600113"/>
        <ul className="header_nav-list">
          <li><a>Home</a></li>
          <li><a>About Us</a></li>
          <li><a>Contact</a></li>
          <li><a>Cart</a></li>
        </ul>
      </div>
    </header>
  )
}
const RestroCard = ({restroName , cuisine, img}) => {
  return(
    <div className="restro_card">
      <img className="restro_card-img" src={img}/>
      <div className="restro_card-heading">
        <h2>{restroName}</h2>
        <span className="rating">3.8</span>
      </div>
      <p>{cuisine}</p>
      <p>Umiya chowk, Unjha, India</p>
    </div>
  )
}
const Body = () => {
  return(
    <div className="container restro_container">
      <div className="search_filter">
        <input placeholder="search Restaurant"></input>
        <button className="search_btn">Search</button>
      </div>
      <div className="restro_row">
        <RestroCard restroName="Pizza Pay" cuisine="Dilicious Pizza, Burger, Pasta" img="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" />
        <RestroCard restroName="Honey Bee" cuisine="Dilicious Pizza, Burger, Pasta" img="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXhhei5qcGc.jpg?s=gayymr-MoZkhATCpk4H6JF11q8zWqNV8pVstYoefMiE"/>
        <RestroCard restroName="KFC" cuisine="Dilicious Pizza, Burger, Pasta" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUcddmGoR1BG7XXgG3p-WxjM3lMLKJh3ZRDFkzas7bw&usqp=CAU&ec=48665698"/>
        <RestroCard restroName="Dhosa Choise" cuisine="Dilicious Pizza, Burger, Pasta" img="https://media.istockphoto.com/id/1318575570/photo/plain-dosa-dish.jpg?b=1&s=170667a&w=0&k=20&c=2zO4hSg7g9Jw9R50m00jJ7Jmv0mh_o7MSDDn2zmEkfg="/>
        <RestroCard restroName="Relish" cuisine="Dilicious Pizza, Burger, Pasta" img="https://media.istockphoto.com/id/1318575570/photo/plain-dosa-dish.jpg?b=1&s=170667a&w=0&k=20&c=2zO4hSg7g9Jw9R50m00jJ7Jmv0mh_o7MSDDn2zmEkfg="/>
        <RestroCard restroName="Sankalp" cuisine="Dilicious Pizza, Burger, Pasta" img="https://media.istockphoto.com/id/1318575570/photo/plain-dosa-dish.jpg?b=1&s=170667a&w=0&k=20&c=2zO4hSg7g9Jw9R50m00jJ7Jmv0mh_o7MSDDn2zmEkfg="/>
        <RestroCard restroName="Umiya Fast Food" cuisine="Dilicious Pizza, Burger, Pasta" img="https://media.istockphoto.com/id/1318575570/photo/plain-dosa-dish.jpg?b=1&s=170667a&w=0&k=20&c=2zO4hSg7g9Jw9R50m00jJ7Jmv0mh_o7MSDDn2zmEkfg="/>
        <RestroCard restroName="Jagir da dhaba" cuisine="Dilicious Pizza, Burger, Pasta" img="https://media.istockphoto.com/id/1318575570/photo/plain-dosa-dish.jpg?b=1&s=170667a&w=0&k=20&c=2zO4hSg7g9Jw9R50m00jJ7Jmv0mh_o7MSDDn2zmEkfg="/>
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
