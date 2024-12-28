"use client"
import React from "react";
import Hero from "../components/hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Project from "../components/Project";

export default function page(){
  return(
    <>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Work />
        <Project />
      </main>
    </>
  )
}