import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

const WhatGPT3 = () => {

  
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa sed voluptatibus assumenda voluptate, eos maxime corrupti ab laboriosam rem quo natus, vero enim?"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa sed voluptatibus assumenda voluptate, eos maxime corrupti ab laboriosam rem quo natus, vero enim?"/>
        <Feature title="KnowledgeBase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa sed voluptatibus assumenda voluptate, eos maxime corrupti ab laboriosam rem quo natus, vero enim?"/>
        <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa sed voluptatibus assumenda voluptate, eos maxime corrupti ab laboriosam rem quo natus, vero enim?s"/>
      </div>
    </div>
  )
}

export default WhatGPT3