import Head from 'next/head';
import Image from 'next/image';

import Project from '../components/Project';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jenny Tan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='grid justify-items-center px-12 pt-24 lg:px-32 lg:pt-48 lg:h-screen'>
          <div className='flex flex-wrap lg:w-2/3'>
            <div className='px-5 lg:px-12 lg:w-2/6'>
              <Image
                src='/images/profile.jpg'
                alt='Jenny Tan'
                width={275}
                height={366}
                className={`object-contain ${styles.rounded}`}
              />
            </div>
            <div className='lg:w-4/6'>
              <h1>Hi, I’m Jenny!</h1>
              <p className='font-sans font-bold text-gray-600 lg:text-3xl pb-5'>I’m a junior studying CS at Brown, with a focus in Software and AI/ML.</p>
              <p className='font-sans font-bold text-gray-600 lg:text-3xl'>Currently, I’m a Software Development Engineer intern at Amazon. </p>
            </div>
          </div>
        </section>
        <section className='p-12 lg:p-48'>
          <h2>Projects</h2>
          <div className='flex flex-wrap'>
            <Project />
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </div>
  )
}
