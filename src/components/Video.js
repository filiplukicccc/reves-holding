import React, { Component } from 'react';
import movie from '../images/City-Nights.mp4';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { zoomInDown, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import finance from '../images/finance.png';
import commerce from '../images/commerce.png';
import cogwheel from '../images/cogwheel.png';
import house from '../images/house.png';
import '../styles/styles.css'
import '../styles/styleHol.css'


const styles = {
  zoomInDown: {
    animation: 'x 3s',
    animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
  }
}


class Video extends Component {
  render() {
    return (
      <div>
      <Grid style={{ marginLeft: '-15px', marginRight: '0px' }}>
        <GridRow centered>
          <GridColumn width={16}>
            <div style={{ position: 'fixed', width: '100%' }}>
              <div className="videoDiv + ' ' +imgAfr">
              <div className='shadowDiv'><h1>OUR SECRET OF SUCCESS IS <br /><span>ENTHUSIASM</span></h1></div>
									<video className='videoCover' autoPlay loop src={movie}>
									</video>
									<div></div>
                <video style={{ width: '100%' }} className='videoCover' autoPlay loop src={movie}>
                </video>
                <div></div>
              </div>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
      <Grid centered style={{ margin: '0px', marginTop: '700px', position: 'relative', background: 'white' }}>
      <h2>IT’S THE FUEL THAT KEEPS OUR BUSINESSES AFLOAT.</h2>
      <GridRow centered className='homeText'>
        <GridColumn computer={5} tablet={7} mobile={14}>
          <p>
            REVES Holding is a leading investment holding company investing and operating in Central and Eastern Europe. Our mission is to bring convenience to our clients through innovation, efficient service delivery, competence and flexibility.
          </p>
        </GridColumn>
        <GridColumn computer={5} tablet={7} mobile={14}>
          <p>
            We offer customer convenience and customer satisfaction by providing innovative top-quality products and effectively processing high speed and high volume transactions, whilst adhering to principles of integrity, transparency and fairness.
          </p>
        </GridColumn>
      </GridRow>
      <GridRow centered>
        <GridColumn textAlign='center' className='flatDiv' computer={3} tablet={7} mobile={12}>
          <div className='flatBack'>
            <img src={finance} />
            <h3>FINANCE</h3>
          </div>
        </GridColumn>
        <GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={12}>
          <div className='flatBack'>
            <img src={commerce} />
            <h3>COMMERCE</h3>
          </div>
        </GridColumn>
        <GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={12}>
          <div className='flatBack'>
            <img src={cogwheel} />
            <h3>SOFTWARE DEVELOPMENT</h3>
          </div>
        </GridColumn>
        <GridColumn className='flatDiv' textAlign='center' computer={3} tablet={7} mobile={12}>
          <div className='flatBack'>
            <img src={house} />
            <h3>REAL ESTATE</h3>
          </div>
        </GridColumn>
      </GridRow>
    </Grid>
    </div>
    )
  }
}
export default Video;