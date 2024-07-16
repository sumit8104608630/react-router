import {useEffect,useState} from "react"

function useFetchData(currency){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/053af0d57b7ece9afe0c5687/latest/${currency}`)
        .then(res=>res.json())
        .then(data=>setData(data[currency]))
        console.log(data)
    })
    return data
}

export default useFetchData
