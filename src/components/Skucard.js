import React from 'react'
import PropTypes from 'prop-types'

import { MyContext } from '../components/store/createContext'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

// const cardStyles = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-around',
//   alignItems: 'flex-start',
//   padding: '1rem',
//   marginBottom: '1rem',
//   boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
//   backgroundColor: '#fff',
//   borderRadius: '6px',
//   maxWidth: '300px',
// }
// const buttonStyles = {
//   fontSize: '13px',
//   textAlign: 'center',
//   color: '#fffff',
//   outline: 'none',
//   padding: '12px',
//   boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
//   borderRadius: '6px',
//   letterSpacing: '1.5px',
// }

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions)

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
    open: false,
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  resetButton() {
    this.setState({
      disabled: false,
      buttonText: 'ADD AGAIN!',
    })
  }
  // addToCart(event, skuId, quantity = 1)
  addToCart(event, sku) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: 'ADDED...' })
    // added to full cart inorder to display on cart component
    this.context.addToFullCart(sku)
    setTimeout(this.resetButton.bind(this), 500)
  }

  render() {
    const sku = this.props.sku
    return (
      //   <div style={cardStyles}>
      //     <h4>{sku.attributes.name}</h4>
      //     <br />
      //     <p>{formatPrice(sku.price, sku.currency)}</p>
      //     <img src={sku.image} width="200px" alt="TBA" />
      //     <br />
      //     <button
      //       style={buttonStyles}
      //       onClick={event => this.addToCart(event, sku.id)}
      //       disabled={this.state.disabled}
      //     >
      //       {this.state.buttonText}
      //     </button>
      //     <br />
      //     {this.state.paymentMessage}
      //   </div>
      <React.Fragment>
        <article className="6u 12u$(xsmall) work-item" key={this.props.key}>
          <span className="image fit thumb" onClick={this.handleClickOpen}>
            <img src={sku.image} alt="tba" height="200" />
          </span>

          <h3>{sku.attributes.name}</h3>
          <p>{formatPrice(sku.price, sku.currency)}</p>
        </article>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {sku.attributes.name}
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </Typography>
            <img src={sku.image} alt="tba" width="100%" />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={event => this.addToCart(event, sku)}
              color="primary"
              disabled={this.state.disabled}
            >
              {this.state.buttonText}
            </Button>
            <br />
            {this.state.paymentMessage}
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

SkuCard.propTypes = {
  sku: PropTypes.object,
  addToCart: PropTypes.func,
}

SkuCard.contextType = MyContext

export default SkuCard
