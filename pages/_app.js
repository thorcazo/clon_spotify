import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  return ( 
    <> 
      <Head>
          <title>Clon UI Spotify</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-Spotify-black min-h-screen text-gray-300'> 
        <Header />
        <Sidebar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      </>
    );
}

export default MyApp
