import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiHome4Fill, RiSearchLine } from 'react-icons/ri';
import { VscLibrary } from 'react-icons/vsc';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiFillHeart, AiFillYoutube } from 'react-icons/ai';




const Sidebar = () => {
    return (
        <div className='bg-Spotify-black-dark fixed top-0 left-0 w-64 h-full p-6  flex flex-col justify-between'>
            <div>
                <div className=''>
                    <Image src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                        width={130}
                        height={130}
                        alt="Spotify"
                    />
                </div>
                <nav className='pt-8'>
                    <ul className='flex flex-col gap-4 text-sm text-gray-300'>

                        <li>
                            <Link href='#' className='flex items-center gap-5 font-bold hover:text-gray-50 transition-colors' >
                                <RiHome4Fill className='text-2xl' /> Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center gap-5 font-bold hover:text-gray-50 transition-colors' >
                                <RiSearchLine className='text-2xl' /> Buscar
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center gap-5 font-bold hover:text-gray-50 transition-colors' >
                                <VscLibrary className='text-2xl' /> Tu biblioteca
                            </Link>
                        </li>
                    </ul>
                    <ul className='pt-8 flex flex-col gap-4 text-sm text-gray-300'>
                        <li>
                            <Link href='#' className='flex items-center gap-5 font-bold hover:text-gray-50 transition-colors' >
                                <BsFillPlusSquareFill className='text-2xl' /> Crear lista
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center gap-5 font-bold hover:text-gray-50 transition-colors' >
                                <AiFillHeart className='text-2xl' /> Canciones que te gustan
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <nav >
                    <ul className='flex flex-col gap-y-2'>

                        <li>
                            <Link href='#' className='text-sm hover:underline'>Cookies</Link>
                        </li>
                        <li>
                            <Link href='#' className='text-sm hover:underline'>Privacidad</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar