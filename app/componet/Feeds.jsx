import React from 'react'
import Share from './Share'
import Post from './Post'
import { Posts } from '../../dummyData'

export default function Feeds() {
  return (
    <div className='w-[100vw] md:[75vw] lg:w-[45vw]  px-5 py-6 '>
      <div className="">
      <Share/> 
       {Posts.map(p=> (
       <Post key={p.id} post={p}/> 
       ))}
      </div>
    </div>
  )
}
