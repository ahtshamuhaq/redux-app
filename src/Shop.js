import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreators } from './State/index'
const Shop = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Deposit/Withdraw money</h2>
      <button className="btn btn-primary m-1" onClick={()=>dispatch(actionCreators.withdrawMoney(-100))}>-</button>
      Update Balance
      <button className="btn btn-primary m-1" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop
