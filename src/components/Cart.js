/* eslint-disable no-debugger */
import React, { Component } from 'react'
import Checkout from './Checkout'

import { MyContext } from '../components/store/createContext'

class Cart extends Component {
  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingFullCart = JSON.parse(
      localStorage.getItem('stripe_checkout_fullitems')
    )
    if (existingFullCart && existingFullCart.length) {
      this.context.setFullCart(existingFullCart)
    }
  }

  render() {
    console.log(this.context)
    return (
      <div>
        <Checkout carts={this.context.fullcart} />
      </div>
    )
  }
}

Cart.contextType = MyContext

export default Cart
