import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer(props) {
  return (
    <footer className={props.isDark ? 'dark' : null}>
      <div className='grid justify-items-center px-5 md:px-0 transition-colors duration-1000 ease-in-out bg-white text-black dark:bg-darkpurple dark:text-white'>
        <div className='h-24 flex flex-wrap items-center'>
          <a href='https://github.com/j-tan871' className='flex items-center mx-3'>
            <FontAwesomeIcon icon={faGithub} className='h-7 w-7 mr-3' />
            <p>j-tan871</p>
          </a>
          <a href='https://linkedin.com/in/jenny-l-tan' className='flex items-center mx-3'>
            <FontAwesomeIcon icon={faLinkedin} className='h-7 w-7 mr-3' />
            <p>jenny-l-tan</p>
          </a>
          <a href='mailto:jenny.tan.0871@gmail.com'className='flex items-center mx-3'>
            <FontAwesomeIcon icon={faEnvelope} className='h-7 w-7 mr-3' />
            <p>jenny.tan.0871@gmail.com</p>
          </a>
        </div>
      </div>
    </footer>
  )
}