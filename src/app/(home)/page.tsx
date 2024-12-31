"use client"

// Scroll
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register gsap plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

import React from "react";
import Hero from "../components/hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Page(){
  
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: '-200 bottom',
            end: 'bottom 80%',
            scrub: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        });
      }
    });
  }, []);

  return(
    <ReactLenis root>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Work />
        <Project />
        <Contact />
      </main>
    </ReactLenis>
  )
}