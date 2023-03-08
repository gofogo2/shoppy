import React from 'react'

const User = ({user}) => {
  return (
    <div className='flex items-center' >
      <img className='w-14' src={user.photoURL} alt="" />
      <span className='hidden md:block' >{user.displayName}</span>
    </div>
  )
}

export default User
