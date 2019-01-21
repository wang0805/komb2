/* eslint-disable no-debugger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkout from './Checkout'

import { MyContext } from '../components/store/createContext'

class Cart extends Component {
  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checkout_items')
    )
    if (existingCart && existingCart.length) {
      this.context.setCart(existingCart)
    }
  }

  render() {
    console.log(this.context)
    return (
      <div>
        <Checkout cart={this.context.cart} />
      </div>
    )
  }
}

Cart.propTypes = {
  children: PropTypes.node.isRequired,
}

Cart.contextType = MyContext

export default Cart
