import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './common/Menu';

const Navbar = (props) => {
    return(
        <div className="header">
          <h1 className="title">
            <Link to="/">Welcome to BrainHive</Link>
          </h1>
          <div className="navigation">
            {/*<Link to="/addResource">Add Resource</Link>*/}
            <Menu />
          </div>
        </div>
    )
}
export default Navbar;