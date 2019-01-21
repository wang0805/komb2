import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import AppProvider from '../components/store/provider'
import Skus from '../components/Skus'
import Cart from '../components/Cart'

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
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
                arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
                lorem vulputate lorem neque cubilia.
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
              <h2>Our Kombucha creation</h2>
              <Skus />
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    Full Menu
                  </a>
                </li>
              </ul>
            </section>

            <Cart />

            <section id="three">
              <h2>Get In Touch</h2>
              <p>
                Accumsan pellentesque commodo blandit enim arcu non at amet id
                arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
                lorem vulputate lorem neque lorem ipsum dolor.
              </p>
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
