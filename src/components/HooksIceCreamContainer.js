import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from "../redux" 

const HooksIceCreamContainer = () => {
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
        <h3>IceCreamContainer - {numOfIceCream}</h3>
        <button onClick={()=>dispatch(buyIceCream)}>Buy Ice Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer