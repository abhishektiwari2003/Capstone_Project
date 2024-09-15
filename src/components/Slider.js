import React, { useEffect } from "react";
import "../components/Slider.css";
import imageSlide from "../data";
import { useState } from "react";

const Home = () => {
  const [currentState, setCurrentState] = useState(0)
  useEffect(()=>{
    const timer = setTimeout(()=>{
        if(currentState===2){
            setCurrentState(0)
        }else{
            setCurrentState(currentState+1)
        }
    },5000)
    return ()=> clearTimeout(timer)
  },[currentState])
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    height: "100%",
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    
    <div className="container-style">
      <div style={bgImageStyle}></div>
      <div className="description">
        
        <div className="box">
          <h1>{imageSlide[currentState].title}</h1>
          <p>{imageSlide[currentState].body}</p>
          </div>
        <div className="body1">
          {imageSlide.map((imageSlide, currentState) => (
            <span key={currentState} onClick={() => goToNext(currentState)}>
              
            </span>
          ))}
        </div>
      </div>
    </div>
    
  );
};
export default Home;
