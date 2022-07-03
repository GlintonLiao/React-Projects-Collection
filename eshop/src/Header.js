import React from 'react';
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>

      <Link to='/' style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize='large' />
          <h2 className='header__logoTitle'>eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className="header__nav">
        <Link to="./login" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign in</span>
          </div>
        </Link>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">

          <Link to='/checkout' style={{ textDecoration: "none" }}>
            <span className="nav__itemBasket">
              <ShoppingBasketIcon />
              <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
