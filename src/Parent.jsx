import { useReducer } from "react";
import { Child } from "./Child";



const reducer=(state,action)=>{

    if(action.type=='ADD'){
        return {counter:state.counter++}
    }else if(action.type=='REDUCE'){
        return {counter:state.counter--}
    }

}



export function Parent(){

const [data,dispatchData]=useReducer(reducer,{counter:0})



    return(<>
    from parent <strong>{data.counter}</strong>
    <button onClick={()=>dispatchData({type:'ADD'})}> Increment </button>
    <button onClick={()=>dispatchData({type:'REDUCE'})}> Decrement </button>
    <Child />
    </>)

}