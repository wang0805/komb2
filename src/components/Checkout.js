import React from 'react'
import PropTypes from 'prop-types'

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fffff',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_mY3NLC56g1V6hPgEWvGkzxlW', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: this.props.cart,
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.error('Error:', error)
    }
  }

  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
        disabled={!this.props.cart.length}
      >
        {this.props.cart.length ? 'GO TO CHECKOUT' : 'CART IS EMPTY'}
      </button>
    )
  }
}

// require proptypes for typechecking otherwise can't include in clickevents/methods
Checkout.propTypes = {
  cart: PropTypes.array,
}

export default Checkout
