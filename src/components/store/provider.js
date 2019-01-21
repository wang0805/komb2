import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './createContext'

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppProvider extends Component {
  state = {
    cart: [],
    setCart: items => this.setState({ cart: items }),
    addToCart: this.addToCart.bind(this),
  }

  addToCart(newItem) {
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: ++item.quantity }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }]
    }
    this.state.setCart(updatedCart)
    // Store the cart in the localStorage.
    localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
