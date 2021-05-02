import DarkModeToggle from 'react-dark-mode-toggle';

export default function Navigation(props) {
  return (
    <nav className={`fixed bg-white dark:bg-darkpurple w-full z-50 shadow ${props.isDark ? 'dark' : null}`}>
      <div className='pb-5 transition-colors duration-1000 ease-in-out bg-white text-black dark:bg-darkpurple dark:text-white'>
        <div className='grid grid-cols-3 pt-6 px-8 md:px-24 lg:px-48'>
          <div className='flex flex-wrap col-start-1 col-span-1'>
            <div className='font-sans font-bold text-base lg:text-3xl mr-5 mb-2'><a href='#about'>Jenny Tan</a></div>
            <DarkModeToggle
              onChange={props.setDarkMode}
              checked={props.isDark}
              size={70}
            />
          </div>
          <div className='col-start-3 flex items-center justify-end '>
            <div><a href='/#experience' className='text-xs md:text-base'>Experience</a></div>
            <div className='px-5 md:px-12'><a href='/#projects' className='text-xs md:text-base'>Projects</a></div>
            <div><a href='/#contact' className='text-xs md:text-base'>Contact</a></div>
          </div>
        </div>
      </div>
    </nav>
  )
}