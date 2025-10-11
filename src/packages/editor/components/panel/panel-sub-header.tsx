"use client"
import React, { useState } from 'react'
import { tabs } from '../../config/tabs'
import { useTabContext } from '../../context/tab.context'

const PanelSubHeader = () => {
  const {activeTab, setActiveTab} = useTabContext()
  return (
    <div className='w-full h-14 p-1 border-b'>
      <div className='flex  gap-x-3 py-3 px-1'>
        {
            tabs.map((a)=>(
                <span key={a.id} onClick={()=>setActiveTab(a.id)} className={`${activeTab === a.id ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"} p-1 hover:cursor-pointer px-3 text-sm rounded-lg`}>
                    {a.name}
                </span>
            ))
        }
      </div>
    </div>
  )
}

export default PanelSubHeader
