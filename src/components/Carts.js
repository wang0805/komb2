import React, { Component } from 'react'
import Cart from './Cart'
import { MyContext } from '../components/store/createContext'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class Carts extends Component {
  state = {}
  render() {
    console.log(this.context, 'context from carts')
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        scroll={this.props.scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title">Cart</DialogTitle>
        <DialogContent>
          {this.context.fullcart.map(item => (
            <>
              <img src={item.sku.image} alt="" width="100%" />
              <DialogContentText>QTY: {item.quantity}</DialogContentText>
            </>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Cart />
        </DialogActions>
      </Dialog>
    )
  }
}

Carts.contextType = MyContext

export default Carts
