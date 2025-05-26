import "./Hero.css";
import animationData from "../assets/lotties/scroll.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

import figma0 from "../assets/iamges/figma1.png";
import figma1 from "../assets/iamges/figma2.png";
import figma2 from "../assets/iamges/figma3.png";
import figma3 from "../assets/iamges/figma4.png";
import figma4 from "../assets/iamges/figma5.png";
import figma5 from "../assets/iamges/figma6.png";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "react-lottie";
gsap.registerPlugin(ScrollTrigger);

const Hero = function () {
  // images of figma changing
  const [imgNum, setImgNum] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgNum((prev) => (prev + 1) % 6);
    }, 1000 + imgNum * 100);

    return () => clearInterval(interval);
  }, []);

  // gsap
  const container = useRef(null);
  const title = useRef(null);
  const figmaScreen = useRef(null);
  const cvButton = useRef(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "center bottom",
            end: "bottom bottom",
            scrub: 0.3,
          },
        })
        .to(title.current, { y: 800 }, 0)
        .to(figmaScreen.current, { y: -400, x: 100 }, 0)
        .to(cvButton.current, { y: -280 }, 0);
      // lettersRef.current.forEach((letter, i) => {
      //   tl.to(
      //     letter,
      //     {
      //       top: Math.floor(Math.random() * -75) - 25,
      //     },
      //     0
      //   );
      // });
      console.log(tl);
    });
    return () => context.revert();
  }, []);

  // page

  return (
    <div ref={container} className="hero1">
      <h1 ref={title} className="KarimTitle">
        I'm Karim Habbal
      </h1>

      <div ref={figmaScreen} className="figmaScreen">
        <img
          src={figma0}
          style={{
            position: "absolute",
            opacity: `${imgNum == 0 ? "1" : "0"}`,
            zIndex: `${imgNum == 0 ? "10" : "0"}`,
          }}
        />
        <img
          src={figma1}
          style={{
            position: "absolute",
            opacity: `${imgNum == 1 ? "1" : "0"}`,
            zIndex: `${imgNum == 1 ? "10" : "0"}`,
          }}
        />
        <img
          src={figma2}
          style={{
            position: "absolute",
            opacity: `${imgNum == 2 ? "1" : "0"}`,
            zIndex: `${imgNum == 2 ? "10" : "0"}`,
          }}
        />
        <img
          src={figma3}
          style={{
            position: "absolute",
            opacity: `${imgNum == 3 ? "1" : "0"}`,
            zIndex: `${imgNum == 3 ? "10" : "0"}`,
          }}
        />
        <img
          src={figma4}
          style={{
            position: "absolute",
            opacity: `${imgNum == 4 ? "1" : "0"}`,
            zIndex: `${imgNum == 4 ? "10" : "0"}`,
          }}
        />
        <img
          src={figma5}
          style={{
            position: "absolute",
            opacity: `${imgNum == 5 ? "1" : "0"}`,
            zIndex: `${imgNum == 5 ? "10" : "0"}`,
          }}
        />
      </div>

      <div
        ref={cvButton}
        style={{ position: "absolute", top: "870px", left: "80px" }}
      >
        <button
          style={{
            backgroundColor: "#9747ff",
            padding: " 12px 32px",
            borderRadius: "8px",
            color: "#111",
            cursor: "pointer",
            fontSize: "24px",
            border: "none",
            boxShadow: "0px 7px 60px rgba(151, 71, 255, 0.3)",
          }}
        >
          <a
            style={{ color: "#111", textDecoration: "none" }}
            target="_blank"
            href="https://docs.google.com/document/d/1mraeNkUv4cYyUQEXFwgJdOFzCQslBXEMlKQwoOgSNE0/edit?usp=sharing"
          >
            Check my CV (Google drive)
          </a>
        </button>
        <span
          style={{
            color: "#A1A1A1",
            display: "block",
            marginTop: "10px",
            marginLeft: "20px",
          }}
        >
          all projects are included
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "200px",
          right: "100px",
          display: "flex",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "16px", color: "white", letterSpacing: "1.5px" }}>
          keep scrolling
        </p>
        <Lottie options={defaultOptions} height={40} width={40} />
      </div>
    </div>
  );
};

export default Hero;
