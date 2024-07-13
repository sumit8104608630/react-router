import { useReducer ,useEffect} from "react"
import axios  from "axios"

function FetchR() {

   const initialState={
    loading:false,load:true,
    error:null,
    data:{}
    }
    const reduce=(state,action)=>{
        switch(action.type){
            case 'Fetch':
                return{
                    load:false,
                    data:action.payload,
                    error:''
                }
            case 'notFetch':
                return{
                    load:false,
                    data:{},
                    error:"notFetch"
                }
        }
    }
    const [state,dispatch]=useReducer(reduce,initialState)
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
        dispatch({type:'Fetch',payload:res.data})
    }).catch((err)=>{
        dispatch({type:'notFetch',payload:err})
    })
})

  return (
    <div>
{
    state.load?'Load':state.data.title
}
{state.error?state.data.error:null}

    </div>
  )
}

export default FetchR