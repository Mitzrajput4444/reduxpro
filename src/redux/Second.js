import React from 'react'
import { useSelector } from 'react-redux'

export default function Second() {
    const state = useSelector(state=>state.count)
  return (
    <div>
        <h1>Num Demo2 count:{state}</h1>
       
    </div>
  )
}
