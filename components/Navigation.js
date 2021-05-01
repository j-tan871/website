export default function Navigation(props) {
  return (
    <nav>
      <div className='grid grid-cols-3 pt-12 px-12 md:px-24 lg:px-32 xl:px-72'>
        <h2 className='col-start-1 col-span-1'>Jenny Tan</h2>
        <div className='col-start-3 flex justify-end '>
          <div className='px-5 md:px-12'>Github</div>
          <div>Resume</div>
        </div>
      </div>
    </nav>
  )
}