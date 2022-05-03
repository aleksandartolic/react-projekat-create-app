import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import HeaderDeliveryButton from './HeaderDeliveryButton';
import mealsImage from '../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Rostilj kod Joce</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        <HeaderDeliveryButton onClick={props.onShowDelivery}/>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
