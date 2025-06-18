import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import './Login.css';

const UserDashboard = () => {
  return (
   <>
<div className='user-dashboard'>
<Sidebar/>
<Dashboard/>
</div>
   </>
  )
}

export default UserDashboard
