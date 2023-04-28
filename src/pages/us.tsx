import React from 'react'
import Link from 'next/link'
import ReactPlayer from 'react-player'
  
export default function VideoPlayer() {
  return (
    <>
    <Link href="/">
    <h4 className=" text-xl font-bold text-red-500"> RT</h4>
    </Link>
    <div className='w-full h-screen flex items-center justify-center'>
      <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
    </div>
    </>
  )
}