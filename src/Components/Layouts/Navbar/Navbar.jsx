import React from 'react'

export const Navbar = ({children}) => {
  return (
    <nav className="flex items-center justify-center">
      <ul className="flex space-x-4">
        {children}
      </ul>
    </nav>
  );
}
