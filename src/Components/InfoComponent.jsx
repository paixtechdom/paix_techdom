import React from 'react'

const InfoComponent = ({title, info, children, icon}) => {
  return (

    <div className='w-full flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow cursor-pointer relative' >
      <div className='w-full flex items-center gap-2 text-sm'>
          <h2 className='font-bold'>{title}</h2>
          <p>{info}</p>
      </div>
      {icon}

      {children}
    </div>

  )
}

export default InfoComponent