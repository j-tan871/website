import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Project(props) {
  // lg:mr-auto lg:ml-12
  return (
    <div className='transform hover:-translate-y-3 duration-100 ease-linear max-w-md mx-auto my-6 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='transition-colors duration-1000 ease-in-out bg-white dark:bg-lightpurple'>
        <div className='h-72 w-full relative'>
          <Image
            src={props.img}
            alt='Project Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='p-4 md:p-8 dark:text-white'>
          <h3>{props.title}</h3>
          <h4 className='text-gray-600 dark:text-white'>{props.tech}</h4>
          {
            props.description.map((text, idx) => <p className='font-sans text-sm text-gray-500 dark:text-white' key={idx}>{text}</p>)
          }
          <div className='flex'>
            {
              props.github ? <a href={props.github}><FontAwesomeIcon icon={faGithub} className='h-8 w-8 mt-5'/></a> : null
            }
            {
              props.link ? <a href={props.link}><FontAwesomeIcon icon={faLink} className='h-8 w-8 mt-5 ml-5' /></a> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}