import { Headers } from 'components'
import React from 'react'

const Dashboard = () => {
  const user = {
    name: 'Shubham'
  }
  return (
   <main className='dashboard wrapper'>
    <Headers 
    title={`Welcome ${user?.name ?? 'Guest'} 👋`}
      description='Track activity,trend and popular destination in real time'
    />

    Dashboard page content
   </main>
  )
}

export default Dashboard
