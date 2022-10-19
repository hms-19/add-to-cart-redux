import { Navbar } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const carts = useSelector(state => state.allCartList.cart)

  return (
    <Navbar
    color='primary'
    fluid={true}
    rounded={true}
    >
    <Navbar.Brand>
        <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
        </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
        <NavLink to='/'>
        Products
        </NavLink>  
        <NavLink to='/mycart'>
            My Cart <span className='bg-red-600 text-gray-100 text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-full'>{carts.length}</span>
        </NavLink>
       
    </Navbar.Collapse>
    </Navbar>
  )
}

export default Header