import React from 'react';

const books = [
  { id: 1, title: 'El Quijote', author: 'Miguel de Cervantes' },
  { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

const Catalogo = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4">Catálogo de Libros</h1>
      <p>
        Bienvenido a nuestro catálogo de libros. Aquí encontrarás una selección
        de nuestros libros disponibles.
      </p>
      <ul className="list-disc pl-5 mt-4">
        {books.map(book => (
          <li key={book.id} className="mb-2">
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;
