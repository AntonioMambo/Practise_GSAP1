import React from "react";
// Importa os links de navegação do arquivo de constantes
import { navLinks } from "../Constants";
// Importa o hook do GSAP para React
import { useGSAP } from "@gsap/react";
// Importa a biblioteca principal do GSAP
import { gsap } from "gsap";
// Importa a função de animação personalizada para a navbar
import { animateNavbar } from "../Animations/Animations";

// Define o componente da navbar
const navbar = () => {
  // Executa a anyimação da navbar quando o componente é montado
  useGSAP(() => {
    animateNavbar();
  });

  return (
    <nav>
      <div>
        {/* Logo e nome da marca */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvel Pour</p>
        </a>

        {/* Links de navegação */}
        <ul>
          {navLinks.map((Link) => (
            <li key={Link.id}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Exporta o componente navbar como padrão
export default navbar;
