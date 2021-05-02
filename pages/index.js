import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Navigation from '../components/Navigation';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Footer from '../components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => false);
  return (
    <div>
      <Head>
        <title>Jenny Tan</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap' rel='stylesheet' />
      </Head>
      <Navigation setDarkMode={setDarkMode} isDark={darkMode} />
      <main className={darkMode ? 'dark' : null}>
        <div className='transition-colors duration-1000 ease-in-out bg-white dark:bg-darkpurple'>
          <section className='grid justify-items-center px-12 pt-24 md:px-32'>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl'>
              <div className='md:flex'>
                <div className='h-72 md:flex-shrink-0 md:h-96 md:w-72 relative'>
                  <Image
                    src='/images/prof.jpg'
                    alt='Jenny'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='transition-colors duration-1000 ease-in-out p-4 md:p-8 dark:bg-lightpurple'>
                  <h1 className='dark:text-white'>Hi, I'm Jenny!</h1>
                  <p className='font-sans text-sm text-gray-500 dark:text-white hover:text-gray-600 lg:text-2xl pb-2 lg:pb-5'>I’m a junior studying CS at Brown, with a focus in Software and AI/ML.</p>
                  <p className='font-sans text-sm text-gray-500 dark:text-white hover:text-gray-600 lg:text-2xl pb-2 lg:pb-5'>Currently, I’m a Software Development Engineer intern at Amazon. </p>
                  <p className='font-sans text-sm text-gray-500 dark:text-white hover:text-gray-600 lg:text-2xl'>Put more info later. </p>
                </div>
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowDown} className='h-8 w-8 mt-20 dark:text-white'/>
          </section>
          <section className='py-14 px-8 md:px-28 lg:px-36 xl:px-72 dark:text-white md:pt-28'>
            <h2>Experience</h2>
            <p>Click on the headings to learn more!</p>
            <Experience 
              image='/images/amazon.png'
              title='Software Development Engineer Intern'
              company='Amazon'
              date='May 2021 - Present'
              description={['line1', 'line2', 'line3']}
            />
            <Experience 
              image='/images/brown.png'
              title='Undergraduate Teaching Assistant'
              company='CSCI 0330: Introduction to Computer Systems'
              date='August 2021'
              description={['line1', 'line2', 'line3']}
            />
            <Experience 
              image='/images/fsab.jpg'
              title='Product Manager'
              company='Full Stack at Brown'
              date='January 2021 - Present'
              description={['line1', 'line2', 'line3']}
            />
            <Experience 
              image='/images/brown.png'
              title='Socially Responsible Computing Teaching Assistant'
              company='CSCI 0300: Fundamentals of Computer Systems'
              date='December 2021 - April 2021'
              description={['line1', 'line2', 'line3']}
            />
            <Experience 
              image='/images/bluebonnet.jpg'
              title='Data Fellow'
              company='Bluebonnet Data'
              date='June 2021 - November 2021'
              description={['line1', 'line2', 'line3']}
            />
          </section>
          <section className='pb-14 md:pb-20'>
            <h2 className='px-14 md:px-28 lg:px-36 xl:px-72 dark:text-white'>Projects</h2>
            <div className='flex flex-wrap px-5 md:px-28 lg:px-36 xl:px-56'>
              <Project
                title='Vibecheck'
                tech='React Native, React, Node/Express, Sequelize, MySQL'
                description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Designed REST API so that safety evaluations are stored persistently in the database', 'Created web application to allow administrators to easily view database contents']}
                img='/images/vibecheck.JPG'
                github='https://github.com/j-tan871'
                link='https://github.com/j-tan871'
              />
              <Project
                title='Vibecheck'
                tech='React Native, React, Node/Express, Sequelize, MySQL'
                description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Designed REST API so that safety evaluations are stored persistently in the database', 'Created web application to allow administrators to easily view database contents']}
                img='/images/chainge.JPG'
                github='https://github.com/j-tan871'
                link='https://github.com/j-tan871'
              />
              <Project
                title='Vibecheck'
                tech='React Native, React, Node/Express, Sequelize, MySQL'
                description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Designed REST API so that safety evaluations are stored persistently in the database', 'Created web application to allow administrators to easily view database contents']}
                img='/images/markov.JPG'
                github='https://github.com/j-tan871'
              />
              <Project
                title='Vibecheck'
                tech='React Native, React, Node/Express, Sequelize, MySQL'
                description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Designed REST API so that safety evaluations are stored persistently in the database', 'Created web application to allow administrators to easily view database contents']}
                img='/images/vibecheck.JPG'
                github='https://github.com/j-tan871'
              />

            </div>
          </section>
        </div>
      </main>
      <Footer isDark={darkMode}/>
    </div>
  )
}
