import Image from 'next/image'
import React from 'react'

export default function CloseFriend({user}) {
  return (
    <li className='flex items-center gap-3'>
     <Image
     src={user.profilePicture}
     alt='User picture'
     width={32}
     height={32}
     className='w-[32px] h-[32px] rounded-full cursor-pointer object-cover'
     /> 
     <span className='font-semibold'>{user.username}</span>  
    </li>
  )
}
