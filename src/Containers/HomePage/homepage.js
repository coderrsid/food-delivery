import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import './homepage.css';

class Home extends Component {

    scroll = () => {
        window.scrollTo(0, 600);
    }
    render() {
        return (
            <Container style={{ background: `url(${'../../assets/bg.png'})`, backgroundColor: 'transparent', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '0px', minHeight: '100vh', minWidth: '100vw' }}>
                <div className="topnav">
                    <div class="topnav">
                        <img style={{ width: '80px', height: '80px', borderRadius: '20px', margin: '20px 20px' }} src={require("../../assets/logo.png")}></img>
                    </div>
                    <div className="topnav" style={{ width: '40%' }}>
                        <a href="#news">ABOUT</a>
                        <a href="#contact">OUR FOOD</a>
                        <a href="#contact">PLANS</a>
                        <button className="button" href="#home">CONTACT US</button>
                    </div>
                </div>
                <section className="info">
                    <h1>Have no time </h1>
                    <br />
                    <h1>to prepare <span>food</span>?</h1>
                    <br /><br /><br /><br /><br />
                    <p>Choose one of your plans, enter delivery time</p><br />
                    <p>and enjoy delicious food without leaving your home!</p>
                    <button className="button">Order Food</button>
                    <br />
                    <img style={{ width: '40px', height: '40px', marginRight: '30px' }} src={require("../../assets/twitter.png")}></img>
                    <img style={{ width: '40px', height: '40px', marginRight: '30px' }} src={require("../../assets/dribbble.png")}></img>
                    <img style={{ width: '40px', height: '40px', marginRight: '30px' }} src={require("../../assets/insta.png")}></img>
                </section>
                <a onClick={this.scroll} className="scroll"><img style={{ width: '70px', height: '70px' }} src={require('../../assets/scroll.png')}></img></a>
            </Container>

        )
    }
}

export default Home;
