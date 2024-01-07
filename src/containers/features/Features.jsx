import React from 'react'
import { Feature } from '../../components'
import './features.css'
const featuresData=[
  {
    title:'Improving and Distant instantly',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio praesentium cumque dicta corporis provident. Non qui atque dolores, ab repellendus quis! Non quia dicta dolores enim deleniti debitis soluta omnis.'
  },
  {
    title:'Become the tended active',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio praesentium cumque dicta corporis provident. Non qui atque dolores, ab repellendus quis! Non quia dicta dolores enim deleniti debitis soluta omnis.'
  },
  {
    title:'Message or arm nothing',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio praesentium cumque dicta corporis provident. Non qui atque dolores, ab repellendus quis! Non quia dicta dolores enim deleniti debitis soluta omnis.'
  }
  ,
  {
    title:'Really boy law county',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio praesentium cumque dicta corporis provident. Non qui atque dolores, ab repellendus quis! Non quia dicta dolores enim deleniti debitis soluta omnis.'
  }
]


const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize it. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text}/>
        ))}
      </div>
    </div>
  )
}

export default Features