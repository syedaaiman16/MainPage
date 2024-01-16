import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BrandExample from "./Navbar"; 
// import SearchBar from "./SearchBar"; 
import Sidebar from './components/Sidebar'
// import { Button } from 'react-bootstrap';
// import BodyShorthandExample from "./card";
import YourMainComponent from "./card";


function App() {

  return (
    <>
    <BrandExample />
    <div className="main">
        <Sidebar />
        <div className="container back-color">
          <div>
            <h3>Questions</h3>
            <div className="scrollableContainer">
              <YourMainComponent />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <h1 className="title">My React App</h1>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="btn">Explore now</button>
      </div> */}
      
    </>
  )
}

export default App;
