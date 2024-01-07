import React from 'react'
import {Article} from '../../components/index'
import {blog01,blog02, blog03, blog04,blog05} from './imports'
import './blog.css'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
          <h1 className='gradient__text'>A lot is happening, We are Blogging about it.</h1>
      </div>
      <div className='gpt3__blog_container'>
        <div className='gpt3__blog_container_groupA'>
          <Article imgUrl={blog01}  date="26 June 2022" title="Hello World"/>
        </div>
        <div className='gpt3__blog_container_groupB'>
          <Article imgUrl={blog02} date="26 June 2022" title="Hello World"/>
          <Article imgUrl={blog03} date="26 June 2022" title="Hello World"/>
          <Article imgUrl={blog04} date="26 June 2022" title="Hello World"/>
          <Article imgUrl={blog05} date="26 June 2022" title="Hello World"/>
        </div>
      </div>
    </div>
  )
}

export default Blog