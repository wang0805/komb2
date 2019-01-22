import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import AppProvider from '../components/store/provider'
import Skus from '../components/Skus'
import Carts from '../components/Carts'

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      open: false,
      scroll: 'body',
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Pooch & Booch'
    const siteDescription = 'Site description'

    return (
      <AppProvider>
        <Layout>
          <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>

          <div id="main">
            <section id="one">
              <header className="major">
                <h2>About Us</h2>
              </header>
              <p>
                Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
                nisi lorem vulputate lorem neque cubilia ac in adipiscing in
                curae lobortis tortor primis integer massa adipiscing id nisi
                accumsan pellentesque commodo blandit enim arcu non at amet id
                arcu magna.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Learn More
                  </a>
                </li>
              </ul>
            </section>

            <section id="two">
              <h2>Our Kombucha Creations</h2>
              <Skus />
              <ul className="actions">
                <li>
                  <a className="button" onClick={this.handleClickOpen('body')}>
                    Cart
                  </a>
                </li>
              </ul>
            </section>

            {/* cart dialog box */}
            <Carts
              handleClose={this.handleClose}
              open={this.state.open}
              scroll={this.state.scroll}
            />

            <section id="three">
              <h2>Get In Touch</h2>
              <p>We at P&B are always glad to help</p>
              <div className="row">
                <div className="8u 12u$(small)">
                  <form method="post" action="#">
                    <div className="row uniform 50%">
                      <div className="6u 12u$(xsmall)">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="6u 12u$(xsmall)">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="12u">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Message"
                          rows="4"
                        />
                      </div>
                    </div>
                  </form>
                  <ul className="actions">
                    <li>
                      <input type="submit" value="Send Message" />
                    </li>
                  </ul>
                </div>
                <div className="4u 12u$(small)">
                  <ul className="labeled-icons">
                    <li>
                      <h3 className="icon fa-home">
                        <span className="label">Address</span>
                      </h3>
                      1234 Somewhere Rd.
                      <br />
                      Nashville, TN 00000
                      <br />
                      United States
                    </li>
                    <li>
                      <h3 className="icon fa-mobile">
                        <span className="label">Phone</span>
                      </h3>
                      000-000-0000
                    </li>
                    <li>
                      <h3 className="icon fa-envelope-o">
                        <span className="label">Email</span>
                      </h3>
                      <a href="#">hello@untitled.tld</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      </AppProvider>
    )
  }
}

export default HomeIndex
