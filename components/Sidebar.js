import React from 'react';
import Image from 'next/image'
import { RiHome4Fill,RiSearchLine} from 'react-icons/ri';
// import { FiSearch} from 'react-icons/fi';



const Sidebar = () => {
  return (
    <div className='bg-Spotify-black-dark fixed top-0 left-0 w-72 h-full p-6'>
        <div>
            <div className=''>
                <Image src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
                width={130} 
                height={130}
                alt="Spotify" 
                />
            </div>
            <nav className='pt-8'>
                <ul className='flex flex-col gap-4'>
                    <li>
                        <a href='#' className='flex items-center gap-5 font-bold' >
                            <RiHome4Fill  className='text-2xl fill-Spotify-white' /> Inicio
                        </a>
                    </li>
                    <li>
                        <a href='#' className='flex items-center gap-5 font-bold' >
                            <RiSearchLine  className='text-2xl fill-Spotify-white' /> Buscar
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default Sidebar