import React from 'react'
import PropTypes from 'prop-types'

import { MyContext } from '../components/store/createContext'

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '300px',
}
const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fffff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  return numberFormat.format(price)
}

class SkuCard extends React.Component {
  state = {
    disabled: false,
    buttonText: 'ADD TO CART',
    paymentMessage: '',
  }

  resetButton() {
    this.setState({
      disabled: false,
      buttonText: 'ADD ME AGAIN!',
    })
  }
  // addToCart(event, skuId, quantity = 1)
  addToCart(event, skuId) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: 'ADDED...' })
    this.context.addToCart(skuId)
    setTimeout(this.resetButton.bind(this), 500)
  }

  render() {
    const sku = this.props.sku
    return (
      <div style={cardStyles}>
        <h4>{sku.attributes.name}</h4>
        <br />
        <p>{formatPrice(sku.price, sku.currency)}</p>
        <img src={sku.image} width="200px" alt="TBA" />
        <br />
        <button
          style={buttonStyles}
          onClick={event => this.addToCart(event, sku.id)}
          disabled={this.state.disabled}
        >
          {this.state.buttonText}
        </button>
        <br />
        {this.state.paymentMessage}
      </div>
    )
  }
}

SkuCard.propTypes = {
  sku: PropTypes.object,
  addToCart: PropTypes.func,
}

SkuCard.contextType = MyContext

export default SkuCard
