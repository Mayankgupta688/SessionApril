import React from 'react';

import StockDetailsComponent from "./StockDetailsComponent"

export default class StockListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stockList: [
            "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC",
            "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI",
            "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SD6"
            ], inputValue: ""
        };
    }

    deleteStock = (stockUrl) => {
        var filterList = this.state.stockList.filter((stock) => {
            return stock !== stockUrl;
        })

        this.setState({
            stockList: filterList
        })
    }

    changeInput = (event) => {
        this.setState({
            ...this.state,
            inputValue: event.target.value
        })
    }

    addStock = () => {
        this.setState({
            stockList: [
                ...this.state.stockList,
                this.state.inputValue
            ],
            inputValue: "",
        })
    }

    render() {
        return (
            <>
                <h1>My Favourite Stocks are:</h1>
                <input type="text" value={this.state.inputValue} placeholder="Enter Stock Url" onChange={this.changeInput} />
                <input type="button" onClick={this.addStock} value="Add Stock" /><br/><br/>
                {this.state.stockList.map((stockUrl) => {
                    return <StockDetailsComponent deleteStock={this.deleteStock} stockUrl={stockUrl}></StockDetailsComponent>
                })}
            </>
        )
    }
}