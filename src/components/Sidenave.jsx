import React from 'react'

const Sidenave = () => {
  return (
    <div className='nav-div '>
        <h2 className=' staff-header ps-3 py-5'>
            Staff area 2023
        </h2>
        <ul className='nav-ul'>
        <li className='active nav-li'>
                <a href='/' className='nav-link'>My Account</a>
            </li>
            <li className='nav-li'>
                <a href='/' className='nav-link'>Activities</a>
            </li>
            <li className='nav-li'>
                <a href='/' className='nav-link'>Order</a>
            </li>
            <li className='nav-li'>
                <a href='/' className='nav-link'>Custumer</a>
            </li>
            <li className='nav-li'>
                <a href='/' className='nav-link'>Analytics</a>
            </li>
            <li className='nav-li'>
                <a href='/' className='nav-link'>Finance</a>
            </li>
            <li className='nav-li'>
                <a href='/' className='nav-link'>
                    Products
                </a>
            </li>
            <li className='nav-li'>
                <a href='/' className='nav-link'>
                    Sign out
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidenave