"use client"
import React from "react";
import Hero from "../components/hero";
import About from "../components/About";
import Skills from "../components/Skills";

export default function page(){
  return(
    <>
      <main>
        <Hero/>
        <About/>
        <Skills/>
      </main>
    </>
  )
}