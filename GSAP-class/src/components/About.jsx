import React from "react";
import { useLayoutEffect, useRef } from "react";
import "../App.css";
import { word } from "./data";
import gsap from "gsap";

const About = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.from('#words', {
        yPercent:'-80',
        duration:5, 
        
      })
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about">
      <div ref={comp} className="slider-container">
        <div className="overlay"></div>
        <div id="words" className="words">
          {word.map((word, index) => {
          return <span key={index}>{word}</span>;
        })}
        </div>
        
      </div>
    </div>
  );
};

export default About;
