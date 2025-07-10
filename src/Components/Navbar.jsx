import React from "react";
import { navLinks } from "../Constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const navbar = () => {
  useGSAP(() => {
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
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvel Pour</p>
        </a>

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

export default navbar;
