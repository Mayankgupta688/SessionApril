import React, { useState } from 'react';

import StockDetailsComponent from "./StockDetailsComponent"

export default function StockListComponent() {

    var [stockList, setStockList] = useState([
        "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC",
        "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI",
        "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SD6"
    ])

    var [inputValue, setInputValue ] = useState("");

    function deleteStock(stockUrl) {
        var filterList = stockList.filter((stock) => {
            return stock !== stockUrl;
        })

        setStockList(filterList)
    }

    function changeInput(event) {
        setInputValue(event.target.value)
    }

    function addStock() {
        setStockList([
            ...stockList,
            inputValue
        ])
    }

    return (
        <>
            <h1>My Favourite Stocks are:</h1>
            <input type="text" value={inputValue} placeholder="Enter Stock Url" onChange={changeInput} />
            <input type="button" onClick={addStock} value="Add Stock" /><br/><br/>
            {stockList.map((stockUrl, index) => {
                return <StockDetailsComponent deleteStock={deleteStock} stockUrl={stockUrl} key={stockUrl}></StockDetailsComponent>
            })}
        </>
    )
}