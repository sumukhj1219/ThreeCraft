"use client"
import React, { useState } from 'react'
import { attributes } from '../config/attributes'

const PanelSubHeader = () => {
  const [active, setActive] = useState(1)
  return (
    <div className='w-full h-14 p-1 border-b'>
      <div className='flex  gap-x-3 py-3 px-1'>
        {
            attributes.map((a)=>(
                <span key={a.id} onClick={()=>setActive(a.id)} className={`${active === a.id ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"} p-1 hover:cursor-pointer px-3 text-sm rounded-lg`}>
                    {a.name}
                </span>
            ))
        }
      </div>
    </div>
  )
}

export default PanelSubHeader
