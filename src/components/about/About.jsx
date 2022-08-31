import React from 'react'
import './About.css'
import Zohaib from '../about/Zohaib1.jpg';
import Javad from '../about/JawadSoomro.jpg'
import facebook from '../about/facebook.png'
import github from '../about/github.png'
import insta from '../about/instagram.png'
import linkdin from '../about/linkedin.png'
export default function About() {
  return (
    <>
    <h3>Meet Our Team</h3>
    <div className="main">
      <div className="card">
        <img src={Zohaib} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>Zohaib Ahmed Khoso</b>
          </h4>
          <p>
            <b> Backend and Frontend Developer </b>
          </p>
          <hr />
          <div>
            <a href="#" target="_blank">
              <img src={facebook} alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com/zoha.ib714/" target="_blank">
              <img src={insta} alt="facebook icon" />
            </a>
            <a href="#" target="_blank">
              <img src={linkdin} alt="facebook icon" />
            </a>
            <a href="#" target="_blank">
              <img src={github} alt="facebook icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="card2">
        <img src={Javad} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>Jawad Jahangir Soomro</b>
          </h4>
          <p>
            {" "}
            <b> Frontend Designer</b>
          </p>
          <hr />
          <div>
            <a href="https://www.facebook.com/jawad.j.soomro/" target="_blank">
              <img src= {facebook} alt="facebook icon" />
            </a>
            <a href="https://www.instagram.com/jawad.somro1/" target="_blank">
              <img src= {insta}  alt="facebook icon" />
            </a>
            <a href="#" target="_blank">
              <img src= {linkdin} alt="facebook icon" />
            </a>
            <a href="#" target="_blank">
              <img src={github}  alt="facebook icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}
