import Head from 'next/head';
import Image from 'next/image';

import Navigation from '../components/Navigation';
import Project from '../components/Project';
import ProjectL from '../components/ProjectL';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jenny Tan</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"/> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Navigation />
      <main>
        <section className='grid justify-items-center px-12 pt-24 md:px-32'>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
            <div className="md:flex">
              <div className="h-48 md:flex-shrink-0 md:h-96 md:w-72 relative">
                <Image
                  src='/images/prof.jpg'
                  alt='Jenny'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className="p-4 md:p-8">
                <h1>Hi, I'm Jenny!</h1>
                <p className='font-sans text-sm text-gray-500 hover:text-gray-600 lg:text-2xl pb-2 lg:pb-5'>I’m a junior studying CS at Brown, with a focus in Software and AI/ML.</p>
                <p className='font-sans text-sm text-gray-500 hover:text-gray-600 lg:text-2xl'>Currently, I’m a Software Development Engineer intern at Amazon. </p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-14 md:py-28'>
          <h2 className='px-14 md:px-28 lg:px-36 xl:px-72'>Projects</h2>
          <div className='flex flex-wrap px-5 md:px-28 lg:px-36 xl:px-56'>
            <Project 
              title='Vibecheck' 
              tech='React Native, Node/Express, Sequelize, MySQL' 
              description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Designed REST API so that safety evaluations are stored persistently in the database', 'Implemented user interface that allows users to rate parties and view evaluations']}
              img='/images/vibecheck.JPG'
            />
            <Project 
              title='Vibecheck' 
              tech='React Native, Node/Express, Sequelize, MySQL' 
              description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Designed REST API so that safety evaluations are stored persistently in the database', 'Implemented user interface that allows users to rate parties and view evaluations']}
              img='/images/chainge.JPG'
            />
            <Project 
              title='Vibecheck' 
              tech='React Native, Node/Express, Sequelize, MySQL' 
              description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Designed REST API so that safety evaluations are stored persistently in the database', 'Implemented user interface that allows users to rate parties and view evaluations']}
              img='/images/markov.JPG'
            />
            <Project 
              title='Vibecheck' 
              tech='React Native, Node/Express, Sequelize, MySQL' 
              description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Designed REST API so that safety evaluations are stored persistently in the database', 'Implemented user interface that allows users to rate parties and view evaluations']}
              img='/images/vibecheck.JPG'
            />

          </div>
        </section>
      </main>

      <footer>

      </footer>
    </div>
  )
}
