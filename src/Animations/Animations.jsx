// src/animations/heroAnimations.js
import gsap from "gsap";
import { SplitText } from "gsap/all";

// Registra o plugin SplitText no GSAP
gsap.registerPlugin(SplitText);

// Função para animar a seção Hero
export function animateHeroSection() {
  document.fonts.ready.then(() => {
    // animações com SplitText aqui
  });

  // Divide o título em caracteres e palavras para animação
  const heroSplit = new SplitText(".title", { type: "chars, words" });
  // Divide o subtítulo em linhas para animação
  const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

  // Adiciona a classe de gradiente em cada caractere do título
  heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

  // Animação dos caracteres do título
  gsap.from(heroSplit.chars, {
    duration: 1.8,
    yPercent: 100,
    stagger: 0.06,
    ease: "expo.out",
  });

  // Animação das linhas do subtítulo
  gsap.from(paragraphSplit.lines, {
    duration: 1.8,
    yPercent: 100,
    stagger: 0.06,
    ease: "expo.out",
    delay: 1,
    opacity: 0,
  });

  // Animação das folhas ao rolar a página
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    })
    .to(".right-leaf", { y: 200 }, 0) // Move a folha direita para baixo
    .to(".left-leaf", { y: -200 }, 0); // Move a folha esquerda para cima
}

export function animateNavbar() {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "bottom top",
    },
  });

  navTween.fromTo(
    "nav", //Onde sera aplicado a animação
    { backgroundColor: "transparent" }, //Como sera o elemento antes da animação
    {
      backgroundColor: "#00000050",
      backgrounFilter: "blur(10px)",
      duration: 1,
      ease: "power1.inOut", //Como sera depois da  animação
    }
  );
}
