import React from "react";
import { ExternalLink } from "lucide-react";
import projetoImg from '../assets/projeto-exemplo.png';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projetos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card de Projeto Exemplo */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={projetoImg}
              alt="Gerenciador de Estoque"
              className="w-full h-48 object-cover"
            />
            <div className="bg-zinc-800 rounded-xl p-6 shadow-lg relative">
            <h3 className="text-xl font-semibold text-white">Gerenciador de Estoque</h3>
            <p className="text-sm text-gray-400 mt-2">
                API para gerenciamento de estoque. Em desenvolvimento...
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-sm font-medium">
                .NET
                </span>
                <span className="bg-yellow-600 text-white text-xs px-3 py-1 rounded-full shadow-sm font-medium">
                PostgreSQL
                </span>
            </div>
            <a
                href="https://github.com/Rodrigo2603/StockManager"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 text-blue-400 hover:text-blue-500"
            >
                <ExternalLink size={18} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
