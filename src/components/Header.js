import React from 'react'

// icons
import { PiBookOpenTextFill } from "react-icons/pi";

const Header = () => {
  return (
    <header className='flex items-center justify-between px-3 py-1 bg-green-600'>
        {/* left */}
        <div>
            <PiBookOpenTextFill className='cursor-pointer text-3xl text-gray-50'/>
        </div>
        {/* right */}
        <div>
            <span className='text-xs font-bold text-white'>3 total</span>
        </div>
    </header>
  )
}

export default Header