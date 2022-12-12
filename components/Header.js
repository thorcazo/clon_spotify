import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl';
import Link from 'next/link';
import { AiFillHeart, AiFillYoutube } from 'react-icons/ai';


const Header = (props) => {

  const { setshowSidebar } = props;

  return (
    <header className='fixed top-0 left-0 px-5 py-2 md:ml-60 w-full md:w-[calc(100%-240px)] bg-Spotify-gray-dark flex items-center justify-between' >
      <div className=''>
        <SlOptionsVertical />
      </div>
      <div className='flex gap-6 mr-2 '>
        <button className='font-bold hover:scale-105 hover:text-white ease-in-out 	 '>Registrarte</button>
        <button className='py-2 md:py-3 px-6 md:px-8 rounded-full bg-white text-black font-bold hover:scale-105 '>Inicio sesión</button>

      </div>
      {/* <div className='mt-8'>
        { <Link href='https://youtu.be/R21xx2fEFO8?t=4025' className='flex items-center gap-5 font-bold hover:text-gray-50 transition-colors' >
          <AiFillYoutube className='text-2xl' /> Link curso
        </Link> }
      </div> */}
    </header>

  )
}

export default Header