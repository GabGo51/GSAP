import React from "react";
import { useLayoutEffect, useRef } from "react";
import "../App.css";
import { word } from "./data";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const About = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.from('#words', {
        yPercent:'-80',
        duration:5, 
        ease:'expo.inOut'
        
      })
    }, comp);
    return () => ctx.revert();
  }, []);

  const navigate = useNavigate()
  const handeleNav = ((page)=>{
    navigate(page)
  }) 

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
      <button onClick={()=>{handeleNav('/')}}> back</button>
    </div>
  );
};

export default About;
