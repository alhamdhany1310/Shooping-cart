import React from 'react';
import CartItem from './Cart/CartItem';
import store from './app/store';
import Summary from './Cart/Summary';
import './App.css';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="h-100 gradient-custom">
      <div className="container">
        <h3 className="text-center pt-3">Shopping cart</h3>
        <div className="row d-flex justify-content-center my-4">
          <Provider store={store}>
            <CartItem />
            <Summary />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
