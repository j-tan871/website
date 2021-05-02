import Image from 'next/image';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Experience(props) {
  const [detailed, setDetailed] = useState(false)
  return (
    <div className={`my-5 md:my-12 flex ${!detailed ? 'items-center' : null}`}>
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md relative ${detailed ? 'mt-3' : null}`}>
        <Image 
          src={props.image}
          alt='logo'
          layout='fill'
          objectFit='cover'
          className='rounded-full'
        />
      </div>
      <div className='transition-colors duration-1000 ease-in-out rounded-xl shadow-md ml-3 md:ml-5 p-3 md:p-5 w-3/4 dark:bg-lightpurple' onClick={() => setDetailed(!detailed)}>
        <h3>{props.title}</h3>
        <p className='text-gray-600 dark:text-white italic'>{props.company}</p>
        <p className='text-gray-600 dark:text-white'>{props.date}</p>
        <div className={`transition-visibility ease-linear duration-500 ${!detailed ? 'hidden' : 'block'}`}>
        <Transition
          show={detailed}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <br />
            { props.description.map((text, idx) => <p className='text-gray-600 dark:text-white' key={idx}>{text}</p>) }
        </Transition>
        </div>
      </div>
    </div>
  )
}