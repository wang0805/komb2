import React, { Component } from 'react'
import Cart from './Cart'
import { MyContext } from '../components/store/createContext'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '50%', marginRight: '30px' }}>
                <img src={item.sku.image} alt="" width="100%" />
              </div>
              <div style={{ width: '50%' }}>
                <div
                  style={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <span
                    className="fa fa-plus"
                    onClick={() => this.context.addToFullCart(item.sku)}
                  />
                  &nbsp;
                  <span> {item.quantity} </span>
                  &nbsp;
                  <span
                    className="fa fa-minus"
                    onClick={() => this.context.remove(item.sku.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Cart />
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

Carts.contextType = MyContext

export default Carts
