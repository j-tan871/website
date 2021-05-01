import Image from 'next/image';

export default function ProjectL(props) {
  // lg:ml-auto lg:mr-0
  return (
    <div className="max-w-md mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div>
        <div className="h-72 w-full relative">
          <Image
            src='/images/vibecheck.JPG'
            alt='Jenny'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className="p-4 md:p-8">
          <h3>Vibecheck</h3>
          <h4 className='text-gray-600'>React Native, Node/Express, Sequelize, MySQL</h4>
          <p className='font-sans text-sm text-gray-500 hover:text-gray-600'>Mobile app that promotes party safety and accountability on Brown’s campus</p>
          <p className='font-sans text-sm text-gray-500 hover:text-gray-600'>Designed REST API so that safety evaluations are stored persistently in the database</p>
          <p className='font-sans text-sm text-gray-500 hover:text-gray-600'>Implemented user interface that allows users to rate parties and view evaluations</p>
        </div>
      </div>
    </div>
  )
}