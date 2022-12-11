import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl';


const Header = () => {
  return (
    <header className='p-6 ml-64 md:w-[calc(100%-256px)]'>
      <div>
        <SlOptionsVertical />
      </div>
    </header>

  )
}

export default Header