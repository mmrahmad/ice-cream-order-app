import React from 'react';
import logo from '../../assets/images/logo.svg';
import reactlogo from '../../assets/images/react.svg';
import Classes from './Header.module.css';


 const Header = () => {
    return(
        <header>
            <div className="container">
                <div>
                    <img className={Classes.logo} src={logo} alt="Logo" />
                </div>
                <div className="textRight">
                    <img src={reactlogo} alt="React" className={Classes.reactLogo} /> <div><strong>React</strong></div>
                </div>
            </div>
      </header>
    )
}
export default Header;