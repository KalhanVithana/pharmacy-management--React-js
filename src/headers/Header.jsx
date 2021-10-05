import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Carousel } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Authoption from './authoption';
import Cards from './Header-properties';
import Footer from '../Pages/Footer';
import FeedBack from '../Feedback/Feedback';

export default class Header extends Component {
    render() {
        return (
            <div  >
          <title>LifeCheck </title>
       
        <link rel="shortcut icon" href="img/short.ico" />
        <div className="wrapper">
          <div className="top-bar clearfix">
            <div className="top-bar-links">
              <ul>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Log In</a></li>
              </ul>
            </div> {/* top-bar-links */}
            <div className="top-bar-links-left">
              <p>Pharmacy Hotline : 071 9 774 774</p>
            </div>
            <div className="site-search">
              <form method="get" action="index.html">
                <input type="search" name="search-box" />
                <button type="submit" />
              </form>
            </div> {/* site-search */}
          </div> {/* top-bar */}
          <header className="clearfix">
            <div className="logo">
              
              <img src="https://i.pinimg.com/originals/26/a5/e1/26a5e1a57b0780c92bfa275431631b36.jpg" height="150px" width="300px" />
            </div> {/* logo */}
            <div className="socialmedia">
              <ul>
                <li><a href="#"><i className="fa fa-linkedin fa-fw" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest fa-fw" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus fa-fw" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-rss fa-fw" aria-hidden="true" /></a></li>
              </ul>
            </div> {/* socialmedia */}
          </header>
         </div>
          <nav  className="purple-gradient">
            <ul>
              <li className ="nav-ux"><a className ="nav-ux" href="#">Home</a></li>
              <li className ="nav-ux"><a className ="nav-ux" href="/pharmas">Pharmaceutical</a></li>
              <li className ="nav-ux"><a  className ="nav-ux"href="/echannel">About Us</a></li>
              <li className ="nav-ux"><a  className ="nav-ux"href="/Product">My Account</a></li>
              <li className ="nav-ux"><a className ="nav-ux" href="/contact">Contact</a></li>
            </ul>
          </nav>
     
       <div  className = "Carousel">
          <Carousel fade={true} pause={false} style={{height:"40rem"}}>
      <Carousel.Item  interval={2000}>
        <img
          className="d-block w-100"
          src={" https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={"https://images.unsplash.com/photo-1614859324967-bdf471b40aa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          <br>
          </br>
          <Cards/>

       
         
    
    </div>

          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br>
          <br></br>
    
        
    <FeedBack/>

            </div>
        )
    }
}
