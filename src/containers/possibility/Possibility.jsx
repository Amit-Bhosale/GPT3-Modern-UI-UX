import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond our imagination</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iste atque quidem praesentium non? In qui fugiat pariatur magnam ipsam aliquam explicabo hic! Sint aperiam, non blanditiis recusandae mollitia amet illum unde sunt dolorem autem id quaerat, voluptates ullam quos!</p>
        <h4>Request Early Access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility