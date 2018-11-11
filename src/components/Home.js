import React, { Component } from 'react'
import Navbar from './Navbar';
import Video from './Video';
import About from './About';
import Counter from './Counter';
import Managment from './Managment';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -60, scrollDuration: 800 })

export default class Home extends Component {
  render() {
    return (
      <div>
        <ScrollableAnchor id={'home'}>
          <div>
            <Navbar />
          </div>
        </ScrollableAnchor>
        <Video />
        <ScrollableAnchor id={'aboutUs'}>
          <div>
            <About />
          </div>
        </ScrollableAnchor>
        <Counter />
        <ScrollableAnchor id={'managment'}>
          <div>
            <Managment />
          </div>
        </ScrollableAnchor>
        <Portfolio />
        <ScrollableAnchor id={'contact'}>
          <div>
            <Contact />
          </div>
        </ScrollableAnchor>
        <Footer />
      </div>
    )
  }
}
