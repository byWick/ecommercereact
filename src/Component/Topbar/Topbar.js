import React from 'react'
import './topbar.css'
import {NavLink} from 'react-router-dom';

export default function Topbar() {
  return (
    <div>
      <ul className='nav justify-content-end me-5'>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/siparisim-nerede'>Siparişim Nerede</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/yardim'>Yardım</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/iletisim'>İletişim</NavLink>
        </li>
      </ul>
    </div>
  )
}
