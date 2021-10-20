import Head from 'next/head'

import Layout from '../components/layout'
import Footer from '../components/section5/footer'

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen  ">
      <Head>
        <title>Your Online Record Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className="flex flex-col items-center flex-grow w-full flex-1  text-center font-montse overflow-scroll">
        <Layout/>
        
      </main>
      <Footer/>

      
    </div>
  )
}
