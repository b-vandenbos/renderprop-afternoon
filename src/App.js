import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <>
        <CurrencyConverter
					render={(currencyData, amount) => (
            
						<p>
							${amount} - {currencyData.name}
							{currencyData.symbol}
              {(amount * currencyData.rate)}
              {amount}
						</p>
            
					)}
				/>
      </>
    );
  }
}

export default App;