import React, {Component} from 'react';

const currencyData = [
	{ name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
	{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
	{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
	{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
	{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
]

export default class CurrencyConverter extends Component {
    state = {
        currencyChosen: false,
        selectedCurrency: 'Select Currency',
        amount: 0
    }

    handleAmountIncrease = () => {
        this.setState({amount: this.state.amount + 1});
    }

    handleAmountDecrease = () => {
        this.setState({amount: this.state.amount -1});
    }

    handleOptionSelect = (event) => {
        this.setState({
                selectedCurrency: event.target.value,
                currencyChosen: event.target.value === 'Select Currency' ? false: true
        })
    }

    render() {
        return (
            <div>
                <select value={this.state.selectedCurrency} onChange={this.handleOptionSelect}>
                    <option value='Select Currency' defaultValue>Select Currency</option>
                    {currencyData.map((country, index) => {
                        return <option key={country.id} value={index}>{country.name}</option>
                    })}
                </select>
                    <div>
                        <button onClick={this.handleAmountDecrease}>-</button>
                        <button onClick={this.handleAmountIncrease}>+</button>
                    </div>
                    {this.state.currencyChosen ? 
                            (this.props.render(currencyData[this.state.selectedCurrency], this.state.amount))
                        :
                            (<p>Please Select Currency</p>)
                    }
            </div>

        )
    }
}