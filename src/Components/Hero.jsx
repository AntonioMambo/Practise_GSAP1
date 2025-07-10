import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  // Hook para animações GSAP ao montar o componente
  useGSAP(() => {
    gsap.registerPlugin(SplitText);

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

    // Animação da folha direita ao rolar a página
    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    }).to(".right-leaf", { y: 200 }, 0)
    .to(".left-leaf", { y: -200}, 0);
  }); // Correção: fechamento correto do hook useGSAP

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Experience the refreshing taste of our signature Mojito, crafted
                with fresh mint, zesty lime, and premium rum. Perfectly balanced
                and served ice-cold, it’s the ultimate summer cocktail.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;