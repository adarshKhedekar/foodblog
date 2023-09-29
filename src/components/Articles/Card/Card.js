import React from 'react'
import PropTypes from "prop-types";
import './Card.css'

function Card({url, title, desc}) {
  return (
    <div className='card-items'>
      <div className="image-container">
        <img src={url} alt="" />
      </div>
      <div className="text-container">
        <span className="heading">{title}</span>
        <span className="sub-heading">{desc}</span>
      <button>Read More</button>
      </div>
    </div>
  )
}

Card.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };
export default Card
