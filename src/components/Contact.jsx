import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28 px-4 max-w-5xl mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 inline-block">
          Contato
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Se você deseja entrar em contato comigo para oportunidades, dúvidas ou parcerias, sinta-se à vontade para me chamar!
        </p>

        <div className="flex justify-center gap-10 text-gray-300">
          <a
            href="mailto:rodrigorocha1032@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="Enviar Email"
          >
            <Mail size={28} />
          </a>

          <a
            href="https://github.com/Rodrigo2603"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="GitHub"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/rodrigo-brickmann-rocha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
