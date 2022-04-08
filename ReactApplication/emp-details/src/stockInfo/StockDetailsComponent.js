import React from 'react';
import Axios from "axios";

export default class StockDetailsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            pricecurrent: 0,
            priceprevclose: 0,
            company: "",
            pricechange: 0
        }

        this.deleteStockChild = this.deleteStockChild.bind(this);
    }

    render() {
        return (
            <div className="card" style={{"width": "18rem", padding: "5px", margin: "5px", display: "inline-block"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.state.company}</h5>
                    <div className="card-text">
                        <h6>Stock Current Price: {this.state.pricecurrent}</h6>
                        <b>Stock Current Price: {this.state.priceprevclose}</b>
                    </div><br/>
                    <input onClick={this.deleteStockChild} type="button" className="btn btn-primary" value="Delete" />
                </div>
            </div>
        )
    }

    deleteStockChild = () => {
        this.props.deleteStock(this.props.stockUrl);
    }

    componentDidMount() {
        setInterval(() => {
            Axios.get(this.props.stockUrl).then((response) => {
                this.setState({
                    pricecurrent: response.data.data.pricecurrent,
                    priceprevclose: response.data.data.priceprevclose,
                    company: response.data.data.company,
                    pricechange: response.data.data.pricechange
                })
            })
        }, 2000);

        Axios.get(this.props.stockUrl).then((response) => {
            this.setState({
                pricecurrent: response.data.data.pricecurrent,
                priceprevclose: response.data.data.priceprevclose,
                company: response.data.data.company,
                pricechange: response.data.data.pricechange
            })
        })
    }
}