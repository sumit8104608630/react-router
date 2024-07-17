
let fetches=async(currency)=>{
    let res= fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_kZBSKv3UoA8DwS6rgJmHeV5przJkEiqEra1tzXRr`)
    let data=(await res).json()
    return data
}
fetches("USD").then(res=>console.log(res))