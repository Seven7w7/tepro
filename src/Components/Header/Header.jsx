import React from 'react'
import { Navbar } from '../Layouts/Navbar/Navbar';
import { ItemNavbar } from '../UI/ItemNavbar/ItemNavbar';



export const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-24 bg-violet-600">
      <Navbar>
        <ItemNavbar style_a="w-8 text-white text-2x1 font-bold " content="Inicio" />
        <ItemNavbar style_a="w-32 text-white text-2x1 font-bold " content="Acerca De Mi" />
        <ItemNavbar style_a="w-max text-white text-2x1 font-bold " content="Portafolio" />
        <ItemNavbar style_a="w-max text-white text-2x1 font-bold " content="Contact Me" />
      </Navbar>
    </header>
  );
};