import React, { useEffect, useState } from 'react';
import Axios from "axios";

export default function StockDetailsComponent(props) {

    var [stockDetails, setStockDetails] = useState({
        pricecurrent: 0,
        priceprevclose: 0,
        company: "",
        pricechange: 0
    })

    useEffect(() => {

        Axios.get(props.stockUrl).then((response) => {
            setStockDetails({
                pricecurrent: response.data.data.pricecurrent,
                priceprevclose: response.data.data.priceprevclose,
                company: response.data.data.company,
                pricechange: response.data.data.pricechange
            })
        })

        setInterval(() => {
            Axios.get(props.stockUrl).then((response) => {
                setStockDetails({
                    pricecurrent: response.data.data.pricecurrent,
                    priceprevclose: response.data.data.priceprevclose,
                    company: response.data.data.company,
                    pricechange: response.data.data.pricechange
                })
            })
        }, 1000);
    }, [])

    function deleteStockChild() {
        props.deleteStock(props.stockUrl);
    }

    return (
        <div className="card" style={{"width": "18rem", padding: "5px", margin: "5px", display: "inline-block"}}>
            <div className="card-body">
                <h5 className="card-title">{stockDetails.company}</h5>
                <div className="card-text">
                    <h6>Stock Current Price: {stockDetails.pricecurrent}</h6>
                    <b>Stock Current Price: {stockDetails.priceprevclose}</b>
                </div><br/>
                <input onClick={deleteStockChild} type="button" className="btn btn-primary" value="Delete" />
            </div>

            <input type="text" />
        </div>
    )
}