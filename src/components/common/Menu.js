import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menuWrap">
    <input type="checkbox" className="toggler">
    </input>
    <div className="hamburger"><div></div></div>
      <div className="menu">
        <div>
            <div>
                <ul>
                    <li><Link to="/" id="link">Home</Link></li>
                    <li><Link to="/addResource" id="link">Add Resource</Link></li>
                    <li></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

/* const myStyle ={
    menuWrap:{
        //positon: "fixed",
        //top: 0,
        //left: 0,
        zIndex: 1,
    },
    menuWrap toggler:{
        
    }
} */

export default Menu;