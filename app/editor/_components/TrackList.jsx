"use client"
import React from 'react'
import { useState } from 'react'

const defaultFrame = {
    image:'/footage.png',
    text:'Hello World',
    textcolor:'black',
    fontSize:20,
    duration:2
}

function TrackList() {

    const [FrameList, setFrameList] = useState([defaultFrame])

  return (
    <div className='p-5 rounded-lg bg-gray-300 items-center'>
      <div>
        {FrameList.map((frame,index)=>{
            <div>
                
            </div>   
        })}
      </div>
    </div>
  )
}

export default TrackList
