import React from 'react'
import AboutImg from '../../assets/about.png'
import './About.css'

function About() {
  return (
    <div className='about-container'>
      <div className="about">
        <div className="img-container">
            <img src={AboutImg} alt="" />
        </div>
        <div className="text-container">
            <span className='heading'>About Us</span>
            <span className='sub-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</span>
            <button className='btn'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
