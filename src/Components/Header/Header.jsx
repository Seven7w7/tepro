import React from 'react'
import { Navbar } from '../Layouts/Navbar/Navbar';
import { ItemNavbar } from '../UI/ItemNavbar/ItemNavbar';



export const Header = () => {
  return (
    <header className='flex justify-center items-center flex-grow'>
      <Navbar>
        <ItemNavbar content='inicio' />
        <ItemNavbar content='acerca de mi' />
        <ItemNavbar content='inicio' />
        <ItemNavbar content='inicio' />

      </Navbar>
    </header>
  )
}