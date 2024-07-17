import {useEffect,useState} from "react"

function useFetchData(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_kZBSKv3UoA8DwS6rgJmHeV5przJkEiqEra1tzXRr`)
        .then(res=>res.json())
        .then(data=>setData(data["data"]))

    },[currency])
    return data
}

export default useFetchData
