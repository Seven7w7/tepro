import React from 'react'
import { Navbar } from '../Layouts/Navbar/Navbar';
import { ItemNavbar } from '../UI/ItemNavbar/ItemNavbar';



export const Header = () => {
  return (
    <div className="bg-black mb-4">
      <header className="w-full px-4">
        <div className="flex items-center justify-between h-24">
          <div className="text-violet-600 text-2xl font-bold">
            StevenVillegas
          </div>
          <Navbar>
            <ItemNavbar style_a="text-white bg-violet-700 hover:bg-violet-800 text-base font-bold py-2 px-4 rounded" content="Inicio" />
            <ItemNavbar style_a="text-white bg-violet-700 hover:bg-violet-800 text-base font-bold py-2 px-4 rounded" content="Acerca De Mi" />
            <ItemNavbar style_a="text-white bg-violet-700 hover:bg-violet-800 text-base font-bold py-2 px-4 rounded" content="Portafolio" />
            <ItemNavbar style_a="text-white bg-violet-700 hover:bg-violet-800 text-base font-bold py-2 px-4 rounded" content="Contact Me" />
            <ItemNavbar style_a="text-white bg-violet-700 hover:bg-violet-800 text-base font-bold py-2 px-4 rounded" content="Rutas Falsas" />
          </Navbar>
        </div>
      </header>
    </div>
  );

};