import React from "react";
import gsap from "gsap";
import "./cubes.css";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Cubes = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.from("#purple", {
        scrollTrigger:{
          trigger:'#container',
          start:'top',
          end:'bottom',
          markers:true, 
          scrub:true
        },
        x: 300,
        rotation:360, 
        duration:1
      });
      timeline.to("#orange", {
        scrollTrigger:{
          trigger:'#container',
          start:'top',
          end:'bottom',
          markers:true, 
          scrub:true
        },
        y: 400,
        rotation:1000, 
        duration:0.2
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div id="container" ref={comp}>
      <div id="purple" className="cube purple"></div>
      <div id="orange" className="cube orange"></div>
      <div id="red" className=" cube red"></div>
      <div id="red" className=" cube red"></div>
      <div id="red" className=" cube red"></div>
      <div id="red" className=" cube red"></div>
      <div id="red" className=" cube red"></div>
    </div>
  );
};

export default Cubes;
