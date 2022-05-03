import { useState } from 'react';

import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';
import Delivery from './components/Delivery';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [deliveryIsShown, setDeliveryIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showDeliveryHandler = () => {
    setDeliveryIsShown(true);
  }
  
  const hideDeliveryHandler = () => {
    setDeliveryIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {deliveryIsShown && <Delivery onClose={hideDeliveryHandler} />}
      <Header onShowCart={showCartHandler} onShowDelivery={showDeliveryHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
