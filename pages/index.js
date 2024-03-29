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
  const [darkMode, setDarkMode] = useState(() => true);
  return (
    <div>
      <Head>
        <title>Jenny Tan</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap' rel='stylesheet' />
      </Head>
      <Navigation setDarkMode={setDarkMode} isDark={darkMode} />
      <main className={`pt-20 ${darkMode ? 'dark' : null}`}>
        <div className='transition-colors duration-1000 ease-in-out bg-white dark:bg-darkpurple'>
          <section className='grid justify-items-center px-12 pt-24 md:px-32' id='about'>
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
                  <p className='font-sans text-sm text-gray-500 dark:text-white hover:text-gray-600 lg:text-xl pb-2 lg:pb-5'>I’m a senior studying CS at Brown.</p>
                  <p className='font-sans text-sm text-gray-500 dark:text-white hover:text-gray-600 lg:text-xl pb-2 lg:pb-5'>Previously, I was a software engineer intern at Stripe and Amazon.  
                    I am currently looking for new grad software engineering opportunities-- feel free to reach out!</p>
                </div>
              </div>
            </div>
            <FontAwesomeIcon icon={faArrowDown} className='h-8 w-8 mt-20 dark:text-white' />
          </section>
          <section className='py-28 px-8 md:px-28 lg:px-36 xl:px-72 dark:text-white md:pt-28' id='experience'>
            <h2>Experience</h2>
            <p>Click on the headings to learn more!</p>
            <Experience 
              image='/images/stripe.png'
              title='Software Engineer Intern'
              company='Stripe'
              date='May 2022 - August 2022'
              description={
                ['- Created and deployed an automated SignalFX dashboard infrastructure that uses a novel CSV parsing solution to increase card authorization rate observability for Stripe’s top 25 merchants',
                '- Wrote a shell script to automate the dashboard creation process, including querying merchant data and generating a Terraform plan and pull request, reducing engineer time required by 75% (Terraform, Ruby)',
                '- Implemented and deployed a data pipeline that processes 6 billion+ rows of payment attempt data daily',
                '- Developed and deployed web application to query credentials for charge authentication (gRPC, Java, React)', 
                '- Cards Authorization team'
                ]}
            />
            <Experience
              image='/images/amazon.png'
              title='Software Development Engineer Intern'
              company='Amazon'
              date='May 2021 - August 2021'
              description={['- Designed and developed a service backend to manage records excluded from enforcement action (Lambda, API Gateway, DocumentDB, CDK, Guice, Typescript, Java)',
                '- Deployed the service into production using a multi-stage CI/CD pipeline configured by CDK/TypeScript',
                '- Implemented Lambda functions triggered by S3 file upload to automate database record creation ',
                '- Seller Trust, Abuse, and Risk team']}
            />
            <Experience
              image='/images/brown.png'
              title='Undergraduate Teaching Assistant'
              company='CSCI 0330: Introduction to Computer Systems, CSCI 0200: Data Structures and Algorithms'
              date='August 2021 - May 2022'
              description={[
                '- Host weekly office hours to help students debug projects and labs for 300+ student classes', 
                '- Data Structures & Algorithms: rewrote tests to use JUnit and updated assignment handouts', 
                '- Computer Systems: redesigned a memory allocation project to increase student understanding'
              ]}
            />
            <Experience
              image='/images/fsab.jpg'
              title='Activities Director'
              company='Full Stack at Brown'
              date='January 2021 - May 2022'
              description={[
                '- Organized events for a 350+ student organization, including workshops on technical interviews and accessible web design and a web development bootcamp for new members  ',
                '- Previous Product Manager: Met with three project teams weekly to guide web app development throughout the project lifecycle', 
                '- Ensured teams made appropriate design decisions and helped debug technical issues '
              ]}
            />
            <Experience
              image='/images/brown.png'
              title='Socially Responsible Computing Teaching Assistant'
              company='CSCI 0300: Fundamentals of Computer Systems'
              date='December 2021 - April 2021'
              description={['- Redesign course assignments to include topics like privacy, environmental impact, and system design', '- Integrated GDPR-compliance component into a distributed key-value store assignment', '- Wrote and graded conceptual questions in projects']}
            />
            <Experience
              image='/images/bluebonnet.jpg'
              title='Data Fellow'
              company='Bluebonnet Data'
              date='June 2021 - November 2021'
              description={['- Serve as a volunteer data analyst for the Palmer campaign for Texas State Board of Education District 6', '- Provide analyses to help the campaign more efficiently target voters and understand demographics such as vote count estimates and choropleth maps (Python, SQL)', '- Trained on political data methods, such as working with Census data, the voter file, and VAN']}
            />
          </section>
          <br />
          <section className='pt-28 pb-14 md:pb-20' id='projects'>
            <h2 className='px-14 pb-5 md:pb-8 md:px-28 lg:px-36 xl:px-72 dark:text-white'>Projects</h2>
            <div className='flex flex-wrap px-5 md:px-28 lg:px-36 xl:px-56'>
              <Project
                title='CHAINge'
                tech='React, Python/Flask'
                description={['Web application that connects volunteers to nonprofits for volunteer opportunities', 'Rewards volunteers with decentralized tokens based on the Stellar blockchain network', 'Won Best Stellar Development Hack: 2nd place at Hack the Northeast']}
                img='/images/chainge.JPG'
                github='https://github.com/j-tan871/CHAINge-htne'
                link='https://folding-297715.web.app/'
              />
              <Project
                title='Spotify Song Recommender'
                tech='Next.js, Python/Flask, Spotify API, Tailwind CSS'
                description={["Web application that ranks and recommends an artist’s songs based on a user’s Spotify profile", "Implemented the K-nearest neighbors algorithm to calculate song similarity", "Used the Spotify API to gather user data, song data, and authorize access to a user profiles"]}
                img='/images/explorify.JPG'
                github='https://github.com/j-tan871/spotify-recommender'
                link='https://explorify.vercel.app/'
              />
              <Project
                title='Paul Quinn College Admissions Website'
                tech='Vue, Python/Flask, MongoDB'
                description={['Redesign of the Paul Quinn College admissions website to showcase their programs', 'Added new features to the site, including data visualizations, Facebook messenger chat, and an interactive Q&A board', 'Won 1st place at the JPMorgan Code for Good hackathon']}
                img='/images/pqc.jpg'
                link='https://fir-demo-c32f2.web.app/#/'
              />
              <Project 
                title='Trip Planner'
                tech='React, Python/Flask, MongoDB, Google Cloud Places API'
                description={['Web application that allows a user to search for activities, receive highly-rated recommendations, and save locations they are interested in', 'Won Best Use of Google Cloud at Surfs Up Hacks']}
                img='/images/surf.JPG'
                github='https://github.com/j-tan871/Surfs-Up-Hacks'
                link='https://beach-trip-planner.web.app/'
              />
              {/* <Project
                title='Vibecheck'
                tech='React Native, React, Node/Express, Sequelize, MySQL'
                description={['Mobile app that promotes party safety and accountability on Brown’s campus', 'Companion dashboard web application for administrators to view party safety rating data and statistics']}
                img='/images/vibecheck.JPG'
              /> */}
              <Project
                title='Markov Chain Text Generator'
                tech='React, Python/Flask'
                description={['Web application that generates text using Markov chains from a specified corpus and text length']}
                img='/images/markov.JPG'
                github='https://github.com/j-tan871/text-generator'
                link='https://markovtextgenerator64802.web.app/'
              />
              {/* <Project
                title='r/WallStreetBets'
                tech='Python, d3.js'
                description={['An analysis of the performance of stocks approved by r/WallStreetBets', 'Web scraped r/WallStreetBets and analyzed sentiment on stocks to construct a portfolio', 'Compared portfolio performance with the S&P 500']}
                img='/images/wsb.png'
                link='https://drive.google.com/file/d/1Ps01BaVyLuNETnunt1Sm2g7hFwAYnmeW/view?usp=sharing'
              /> */}
            </div>
          </section>
        </div>
      </main>
      <Footer isDark={darkMode} />
    </div>
  )
}
