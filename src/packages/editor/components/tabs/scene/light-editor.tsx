import { useSceneContext } from '@/packages/editor/context/scene.context'
import React from 'react'

const LightEditor = () => {
  const {light, setLight} = useSceneContext()
  return (
    light &&
    <div className='w-full flex flex-col'>
        
    </div>
  )
}

export default LightEditor
