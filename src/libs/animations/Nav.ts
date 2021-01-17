import { gsap } from "gsap";

export const animateNavExit = (el: HTMLElement) => {
  const logo = el.querySelector(".logo");
  const menuBar = el.querySelector(".menu i");
  return gsap
    .timeline()
    .to(el, { height: "10vh", backgroundColor: "#ffffff" }, 0)
    .to(menuBar, { rotate: 0 })
    .fromTo(logo, { opacity: 0 }, { opacity: 1 }, 0);
};

export const animateNavEnter = (el: HTMLElement) => {
  const logo = el.querySelector(".logo");
  const items = el.querySelectorAll(".menu_navbar a");
  const menuBar = el.querySelector(".menu i");

  gsap
    .timeline()
    .to(el, { height: "100vh", backgroundColor: "#2b2d42" }, 0)
    .to([logo], { opacity: 0 }, 0)
    .to(menuBar, { rotate: 180 }, 0)
    .fromTo(
      items,
      { x: 150 },
      { stagger: 0.2, ease: "elastic.easeInOut", x: 0, duration: 0.2 },
      0.3
    );
};
