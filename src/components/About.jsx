const About = () => {
    return (
      <section id="about" className="py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Coluna 1 - Introdução */}
          <div>
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
              Sobre mim
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
                Engenheiro de Software formado em Ciência da Computação pela UNIOESTE, com experiência em desenvolvimento fullstack. Crio aplicações web completas, desde a arquitetura backend até a interface frontend, com integração a bancos de dados e autenticação segura.
            </p>
          </div>

          {/* Coluna 2 - Informações técnicas */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1">Tecnologias</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  <span className="font-semibold text-blue-300">Frontend:</span> React, Tailwind CSS, HTML5, CSS3
                </li>
                <li>
                  <span className="font-semibold text-blue-300">Backend:</span> Node.js (Express), Java, .NET (C#)
                </li>
                <li>
                  <span className="font-semibold text-blue-300">Banco de Dados:</span> PostgreSQL, Sequelize
                </li>
                <li>
                  <span className="font-semibold text-blue-300">Outros:</span> Git, GitHub, RESTful APIs
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1">Idiomas</h3>
              <p className="text-gray-300">Português (nativo), Inglês (intermediário/avançado)</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  