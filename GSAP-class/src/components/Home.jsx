import React, { useEffect } from 'react'
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";
import "../App.css";

const Home = () => {
  const comp = useRef(null);

  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(page);
  };
  

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.5,
        delay: 0.3,
      })
        .from(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.3,
        })
        .to(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "+=30",
          delay: 0.3,
          stagger: 0.3,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.5,
        }).from('#welcome', {
          opacity:0,
          y:'+=30'

        });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div className="overlay" ref={comp}>
      <div id="intro-slider" className="h2-box">
        <h2 id="title1">agro</h2>
        <h2 id="title2">fenz</h2>
        <h2 id="title3">tycoon</h2>
      </div>
      <div id="welcome" className="h1-box">
        <h1 >Yo</h1>
        <button onClick={()=>{handleNavigate('/about')}}>
          word slider
        </button>
        <button onClick={()=>{handleNavigate('/cube')}}>
          cube
        </button>
        <button>
          test3
        </button>
      </div>
    </div>
  );
}

export default Home