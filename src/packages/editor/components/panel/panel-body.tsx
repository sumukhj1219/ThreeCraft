"use client"
import React from 'react'
import { useTabContext } from '../../context/tab.context'
import { tabs } from '../../config/tabs'

const PanelBody = () => {
  const { activeTab } = useTabContext()
  const Component = tabs[activeTab - 1].component   
  console.log(Component)
  return (
    <div className='w-full p-2'>
      <Component />  
    </div>
  )
}

export default PanelBody
