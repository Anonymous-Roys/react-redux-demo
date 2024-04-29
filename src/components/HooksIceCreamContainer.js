import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from "../redux" 

const HooksIceCreamContainer = () => {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h3>IceCreamContainer - {numOfIceCreams}</h3>
        <button onClick={()=>dispatch(buyIceCream)}>Buy Ice Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer