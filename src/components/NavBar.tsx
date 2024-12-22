import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-16 bg-gray-800 text-white">
      <ul className="flex items-center">
        <li>Catalógo</li>
        <li>Ofertas</li>
        <li>Mejor Vendidos</li>
        <li>Libro A Ciegas</li>
      </ul>
    </nav>
  );
};

export default NavBar;
