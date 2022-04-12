import Axios from "axios";
import { useState, useEffect} from "react"

function useStockHook(apiUrl) {
    var [data, setData] = useState({});

    useEffect(() => {
       setInterval(() => {
            Axios.get(apiUrl).then((response) => {
                setData({
                    pricecurrent: response.data.data.pricecurrent,
                    priceprevclose: response.data.data.priceprevclose,
                    company: response.data.data.company,
                    pricechange: response.data.data.pricechange
                })
            })
       }, 5000)
    }, [])

    return [data]
}

export default function CustomHooksComponent() {
    var [data] = useStockHook("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
    var [sobhadata] = useStockHook("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SD6");
    var [nalcodata] = useStockHook("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC");
    return (
        <>
            <h1>SBI Stock Value is {data.pricecurrent}</h1>
            <h1>NALCO Stock Value is {sobhadata.pricecurrent}</h1>
            <h1>Sobha Stock Value is {nalcodata.pricecurrent}</h1>
        </>
    )
}