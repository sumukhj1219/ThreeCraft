import React from 'react'
import { navbar } from '../config/navbar'
import { Scale3D } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='w-full h-16 p-1 flex items-center justify-between border-b'>
            <div className='flex font-semibold items-center justify-center gap-x-1 px-3'>
                <Scale3D className='w-5 h-5' />
                <span>
                    ThreeCraft
                </span>
            </div>

            <div className='flex items-center justify-center gap-x-2'>
                {
                    navbar.map((n)=>(
                        <span key={n.id}>
                            <img src={n.logo} className='w-5 h-5 grayscale-100' />
                        </span>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar
