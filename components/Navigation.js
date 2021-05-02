import DarkModeToggle from 'react-dark-mode-toggle';

export default function Navigation(props) {
  return (
    <nav className={props.isDark ? 'dark' : null}>
      <div className='transition-colors duration-1000 ease-in-out bg-white text-black dark:bg-darkpurple dark:text-white'>
        <div className='grid grid-cols-3 pt-12 px-12 md:px-24 lg:px-32 xl:px-72'>
          <div className='flex flex-wrap col-start-1 col-span-1'>
            <h2 className='mr-5 mb-2'>Jenny Tan</h2>
            <DarkModeToggle
              onChange={props.setDarkMode}
              checked={props.isDark}
              size={80}
            />
          </div>
          <div className='col-start-3 flex justify-end '>
            <div className='px-5 md:px-12'><a href='https://github.com/j-tan871'>Github</a></div>
            <div><a href='https://github.com/j-tan871'>Resume</a></div>
          </div>
        </div>
      </div>
    </nav>
  )
}