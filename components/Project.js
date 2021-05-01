import Image from 'next/image';

export default function Project(props) {
  // lg:mr-auto lg:ml-12
  return (
    <div className="max-w-md mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div>
        <div className="h-72 w-full relative">
          <Image
            src={props.img}
            alt='Project Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className="p-4 md:p-8">
          <h3>{props.title}</h3>
          <h4 className='text-gray-600'>{props.tech}</h4>
          {
            props.description.map((text, idx) => <p className='font-sans text-sm text-gray-500 hover:text-gray-600' key={idx}>{text}</p>)
          }
        </div>
      </div>
    </div>
  )
}