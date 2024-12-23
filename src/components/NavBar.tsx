import React from 'react';
import Link from 'next/link';
import {
  FaBook,
  FaUser,
  FaShoppingCart,
  FaBookOpen,
  FaSearch,
} from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-16 bg-gray-800 text-white">
      <div className="flex ml-10 gap-6 justify-center items-center">
        <FaBookOpen className="w-16 h-16" />
        <div>
          <h2 className="text-2xl"> The Bookseller </h2>
          <p>Tú libro ideal, libro a ciegas.</p>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full h-10 rounded-lg border-2 border-gray-700 px-4 text-sm focus:border-cyan-500"
        />
        <button>
          <FaSearch />
        </button>
      </div>

      <ul className="flex items-center gap-10 mr-10">
        <li>
          <Link href={'/catalogo'}>Catalógo</Link>
        </li>
        <li>Ofertas</li>
        <li>Mejor Vendidos</li>
        <li>Libro a Ciegas</li>
        <li>
          <FaBook />
        </li>
        <li>
          <FaShoppingCart />
        </li>
        <li>
          <FaUser />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
