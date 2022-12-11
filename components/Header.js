import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl';
import Link from 'next/link';
import { AiFillHeart, AiFillYoutube } from 'react-icons/ai';


const Header = () => {
  return (
    <header className='p-6 ml-64 md:w-[calc(100%-256px)]'>
      <div>
        <SlOptionsVertical />
      </div>
      <div className='mt-8'>
        <ul>
          <li>
            <Link href='https://youtu.be/R21xx2fEFO8?t=4025' className='flex items-center gap-5 font-bold hover:text-gray-50 transition-colors' >
              <AiFillYoutube className='text-2xl' /> Link del curso
            </Link>
          </li>
        </ul>
      </div>
    </header>

  )
}

export default Header