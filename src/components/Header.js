import React from 'react';
import headerStyles from "../styles/header.module.css";
import cartImg from "../images/Cart.png";
import { useContext } from 'react';
import AppContext from '../services/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const [state , setState] = useContext(AppContext);
  return (
    <div className={headerStyles.headerContainer}>
    <div className={headerStyles.logo}>FreshKart</div>
    <div className={headerStyles.nav}>
        <div className={headerStyles.navitem}>
            <Link to="/items/fruits" >Fruits</Link>
        </div>
        
        <div className={headerStyles.navitem}>
            <Link to="/items/vegetables" >Vegetables</Link>
        </div>

    </div>
    <div className={headerStyles.cart}>
        <img src={cartImg} alt="This is a catrt Tag " />
        {state.cart.length > 0 ? (<div className={headerStyles.count}>{state.cart.length}</div>) : null}
        <span>Cart</span>
    </div>
    <div className={headerStyles.login}>Login</div>
    </div>


  )
}

export default Header;