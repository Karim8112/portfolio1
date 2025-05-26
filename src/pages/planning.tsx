import Lottie from "react-lottie";
import animationData from "../assets/lotties/scroll.json";
import gsap from "gsap";

import "./planning.css";
import PlanningSlider from "../components/planningSlider";
import { useLayoutEffect, useRef, useState } from "react";
import Text from "../components/SlidingText";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

// the text itseleft

const Planning = function () {
  const slider = useRef(null);
  const container = useRef(null);
  const text = useRef(null);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const TextArray = [
    "writing the MVP and discuss it with managers ...",
    "making diagrams, use case, user research & user flow ...",
    "managing the team, assigning tasks with Jira depending on what was made so far.",
  ];

  const titlesArray = ["1)", "2)", "3)"];
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        })

        .to(text.current, { y: -70, x: -50 }, 0)
        .to(slider.current, { y: -30, x: 30 }, 0);

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

  return (
    <div
      ref={container}
      className="planning"
      style={{
        height: "100vh",
        position: "relative",
        // backgroundColor: "aqua",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        padding: "32px 64px",
      }}
    >
      {/* ===========start the flex content */}

      <PlanningSlider
        image={imageIndex}
        setImage={setImageIndex}
        ref={slider}
      ></PlanningSlider>

      {/* =========text========== */}
      <Text
        titlesArray={titlesArray}
        ref={text}
        state={imageIndex}
        height="70px"
        textArray={TextArray}
        title1="Planning the product"
        title2="managing the team."
      />
      {/* =================scrolling arrow=============================== */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
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

export default Planning;
