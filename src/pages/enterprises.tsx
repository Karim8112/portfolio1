import { useLayoutEffect, useRef, useState } from "react";
import Text from "../components/SlidingText";
import "./enterprise.css";
import Melo from "../assets/iamges/melo.png";
import Invia from "../assets/iamges/invia.png";
import meloVid from "../assets/videos/melo.mp4";
import inviaVid from "../assets/videos/invia.mp4";
import inviaVidM from "../assets/videos/inviaM.mp4";
import Computer from "../components/Computer";
import ComputerMobile from "../components/computerMobile";
import gsap from "gsap";

const Images = function ({
  imagesArray,
  state,
  setState,
}: {
  imagesArray: string[];
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}) {
  const pr = 13.5 + state * 192;
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "200px",
        width: `${imagesArray.length * 200}px`,
        position: "relative",
      }}
    >
      <div
        // the border
        style={{
          position: "absolute",
          top: "50%",
          translate: "0 -50%",
          width: "180px",
          height: "175px",
          left: pr,
          borderRadius: "10px",
          borderColor: "#9747FF",
          borderStyle: "solid",
          borderWidth: "2.5px",
          transition: "all",
          transitionDuration: "0.2s",
          transitionTimingFunction: "ease-in",
          zIndex: "5",
          // display: "none",
        }}
      ></div>
      {/* here are the images */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          translate: "-50% -50%",
          left: "50%",
          display: "flex",
          gap: "32px",
          zIndex: "10",
        }}
      >
        {imagesArray.map((img, index) => {
          return (
            <img
              style={{ zIndex: 15 }}
              className={` ${
                index == state ? "selectedImgEnt" : ""
              }  sliderM  `}
              width={160}
              src={img}
              key={index}
              onClick={() => setState(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

const Slider = function ({
  ref,
  state,
  setState,
  textArray,
  imagesArray,
  titlesArray,
}: {
  ref: any;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  textArray: string[];
  imagesArray: string[];
  titlesArray: string[];
}) {
  return (
    <div
      style={{
        // backgroundColor: "red",
        height: "400px",
        width: "52%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
      }}
    >
      <Text
        classname="enterpriseText"
        height="150px"
        ref={ref}
        state={state}
        title1="Design for enterprises."
        textArray={textArray}
        titlesArray={titlesArray}
      />
      <Images imagesArray={imagesArray} state={state} setState={setState} />
    </div>
  );
};

const Enterprises = function () {
  const textArray = [
    "an accounting system for managing branches, warehouses, products, sales, receipts, customers and vendors. (currently under design) ",
    "A full hotel management system. The hotel is for child guests and is full of features, including assigning tasks and shifts to guards, receptionists, and workers in the hotel, report incidents, adding notes, and a chat feature. ",
  ];
  const titlesArray = ["Melo Accounting System,", "Invia Hotel System,"];
  const imagesArray = [Melo, Invia];
  const container = useRef(null);
  const sliderRef = useRef(null);
  const screenSlider = useRef(null);
  const [state, setState] = useState<number>(0);

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

        .to(screenSlider.current, { x: 50 }, 0);
      console.log(tl);
      // lettersRef.current.forEach((letter, i) => {
      //   tl.to(
      //     letter,
      //     {
      //       top: Math.floor(Math.random() * -75) - 25,
      //     },
      //     0
      //   );
      // });
    });
    return () => context.revert();
  }, []);

  return (
    <div
      ref={container}
      className="enterprise"
      style={{
        height: "100vh",
        // paddingTop: "64px",
        position: "relative",
        // backgroundColor: "aqua",
        display: "flex",
        gap: "62px",
        alignItems: "start",
        justifyContent: "space-between",
        padding: "64px",
      }}
    >
      <Slider
        ref={sliderRef}
        state={state}
        textArray={textArray}
        titlesArray={titlesArray}
        setState={setState}
        imagesArray={imagesArray}
      />

      {/* ======================================here starts the screen slider ====================== */}

      <div
        className="screenSlider"
        ref={screenSlider}
        style={{
          overflow: "hidden",
          position: "relative",
          height: "400px",
          width: "600px",
          // backgroundColor: "red",
        }}
      >
        {/* Melo */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: `${state == 0 ? "100px" : "1000px"}`,
            transition: "all",
            transitionDuration: "0.9s",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <Computer
            index={0}
            state={state}
            video={meloVid}
            style={{
              paddingRight: "30px",
            }}
          />
        </div>

        {/* invia */}

        <div
          style={{
            position: "absolute",
            top: "0",
            left: `${state == 1 ? "20px" : "1000px"}`,
            transition: "all",
            transitionDuration: "0.8s",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          <ComputerMobile
            state={state}
            index={1}
            mobileVideo={inviaVidM}
            computerVideo={inviaVid}
            style={{
              translation: "all",
              translationDuration: "0.5s",
              translationTimingFunction: "ease-in",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Enterprises;
