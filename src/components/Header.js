import React, { Component } from 'react'
import '../styles/Header.scss'
import Image1 from '../assets/image-1.png'
import Image2 from '../assets/image-2.png'
import Image3 from '../assets/image-3.png'
import Image4 from '../assets/image-4.png'

export default class Header extends Component {
  render() {
    return (
      <div className="hearder-wrapper">
          <div className="left-block">
              <img src={Image1} alt="" />
              <div className="info">
                <p className="category">collection</p>
                <p className="name">new<br />crutains</p>
                <button type="button">explore</button>
              </div>
          </div>
          <div className="right-block">
              <div className="item">
                <img src={Image2} alt="" />
                <div className="info">
                    <p className="category">collection</p>
                    <p className="name">new collection</p>
                    <button type="button">explore</button>
                </div>
              </div>
              <div className="item">
                <img src={Image3} alt="" />
                <div className="info">
                    <p className="category">Sales</p>
                    <p className="name text-small">Sale upto</p>
                    <p className="offer">70%</p>
                    <button type="button">explore</button>
                </div>
              </div>
              <div className="item">
                <img src={Image4} alt="" />
                <div className="info">
                    <p className="category">Membership</p>
                    <p className="name text-small">New Membership</p>
                    <p className="offer">10% off</p>
                    <button type="button">explore</button>
                </div>
              </div>
          </div>
      </div>
    )
  }
}
