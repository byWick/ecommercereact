import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'
import Topbar from '../Topbar/Topbar';


export default function Home() {
  return (
    <div className='container-fluid mb-5 r1-topbar'>
      <Topbar/>
    </div>
  )
}
