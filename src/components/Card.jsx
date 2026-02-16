import React from 'react'

const Card = ({Data}) => {
  return (
      <div className='lg:h-screen bg-black text-white flex flex-row flex-wrap gap-20 justify-center w-full p-5 overflow-x-hidden ' >
      {Data.map(function(elem,idx) {
        return <a key={idx} href={elem.url} target="_blank" rel="noopener noreferrer" className='flex flex-col ' >
          <div className='flex flex-col ' >
            <img src={elem.download_url} className='h-50 w-60 rounded-2xl object-cover' alt="Image" />
            <h1 className='text-2xl text-center text-amber-400 ' >{elem.author}</h1>
          </div>
        </a>
        })}
    </div>
  )
}

export default Card
