import React from "react";

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <ul className="flex justify-center space-x-6">
        <li><a href="#home" className="hover:text-blue-400">Início</a></li>
        <li><a href="#about" className="hover:text-blue-400">Sobre</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projetos</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contato</a></li>
      </ul>
    </nav>
  );
}