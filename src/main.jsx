import React from 'react';
import './main.css';
import dupp from './dupp.png'; 
export default function Main(){
    return (
        <div className="main">
            <nav class="navbar">
                <ul class="nav-links">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
            <div class="hero">
                <div class="hero-text">
                    <h1 class="hero-h1">It's a Big World Out There, Go Explore</h1>
                    <p class="para">We always make our customer happy by providing as many 
                        choices as possible</p>
                    <button class="hero-button">Explore Now</button>
                    
                </div>
                <div>
                    <img src={dupp} alt="image" />
                </div>
            </div>
            <hr></hr>
            <div class="foot-container">
                <div className='foot-text'>
                    <h5>HD</h5>
                    <h5>HoliDay</h5>
                    <p>Discover the most outstanding articles on all topics of life</p>
                </div>
                <div className='foot-text'>
                    <h5>Support</h5>
                    <p>Help Center</p>
                    <p>Safety information Cancellation options</p>
                </div>
                <div className='foot-text'>
                    <h5>Social Links</h5>
                    <h4>HoliDay</h4>
                    <p>Discover the most outstanding articles on all topics of life</p>
                </div>
            </div>
            <hr></hr>
            <footer>By continuing past this page, you agree to our Terms of Service,
                 Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of 
                 their respective owners.2022 © HD™ Ltd. All rights reserved.
            </footer>
        </div>  
    );
}