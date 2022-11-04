import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function First() {
    const state = useSelector(state=>state.count)
    const name =useSelector(state=>state.name)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Num Demo Count:{state}</h1>
        <h1>name:{name}</h1>
        <button style={{margin:"8px"}} onClick={()=>dispatch({type:"incr"})}>Increment</button>
        <button style={{margin:"8px"}} onClick={()=>dispatch({type:"decr"})}>Increment</button>
       
       
    </div>
  )
}
