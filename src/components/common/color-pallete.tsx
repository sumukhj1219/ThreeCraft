import { useSceneContext } from '@/packages/editor/context/scene.context'
import React from 'react'
import { Input } from '../ui/input'

const ColorPallete = () => {
    const { color, setColor } = useSceneContext()
    return (
        <div className='w-full flex items-center justify-center gap-x-1'>
            <div className='flex'>
                <span className={`w-9 h-9 rounded bg-${color} border`}></span>
            </div>
            <div className='flex w-full'>
                <Input className='w-full rounded' />
            </div>
            <div className='flex'>
                <span className={`w-9 h-9 rounded bg-${color} border`}></span>
            </div>
        </div>
    )
}

export default ColorPallete
