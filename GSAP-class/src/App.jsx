import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./App.css";

function App() {
  const comp = useRef(null);

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
      </div>
    </div>
  );
}

export default App;
