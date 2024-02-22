import React from 'react'

function layout({children}) {
  return (
    <div>
      <div className='sm:w-64 hidden sm:block fixed'>
        
      </div>
      {children}
    </div>
  )
}

export default layout