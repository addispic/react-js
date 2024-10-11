import React from 'react'
import {useSelector} from 'react-redux'

// icons
import { PiBookOpenTextFill } from "react-icons/pi";

// slices
import {notesSelector} from '../features/notes/notesSlice'

const Header = () => {
  const notes = useSelector(notesSelector)
  return (
    <header className='flex items-center justify-between px-3 py-1 bg-green-600'>
        {/* left */}
        <div>
            <PiBookOpenTextFill className='cursor-pointer text-3xl text-gray-50'/>
        </div>
        {/* right */}
        <div>
            <span className='text-xs font-bold text-white'>{notes.length} total</span>
        </div>
    </header>
  )
}

export default Header