import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App(){

  const [step,setStep] = useState(0);
  const [retry,setRetry] = useState(false);

  const pages = [

    {title:"I'm Sorry Panda 🥺",message:"I know I didn’t wish you for the last few days… but I made something special just for you ❤️."},

    {title:"Day 1 🌸",message:"I hope today brings you soft happiness."},
    {title:"Day 2 🌼",message:"Your smile makes everything brighter."},
    {title:"Day 3 💕",message:"Even simple moments feel magical."},
    {title:"Day 4 🌷",message:"You deserve endless love."},
    {title:"Day 5 🧸",message:"Being with you feels like home."},
    {title:"Day 6 🌹",message:"You make my world peaceful."},
    {title:"Day 7 ✨",message:"Today I celebrate YOU."}
  ];

  const isFinal = step >= pages.length;

  if(isFinal){
    return <GalaxyLoveUniverse />;
  }

  if(retry){
    return(
      <Background>
        <div className="card">
          <h1>🥺 Please Panda...</h1>
          <p>Please give this surprise one chance ❤️</p>
          <button className="btn" onClick={()=>{setRetry(false);setStep(0)}}>Try Again ❤️</button>
        </div>
      </Background>
    );
  }

  return(
    <Background>

      <motion.div
        key={step}
        initial={{opacity:0,scale:0.8}}
        animate={{opacity:1,scale:1}}
        className="card"
      >

        <h1>{pages[step].title}</h1>
        <p>{pages[step].message}</p>

        {step===0 ? (
          <>
            <p>I made a surprise… will you see it? 🥺</p>

            <button className="btn" onClick={()=>setStep(1)}>Yes ❤️</button>
            <button className="btn" onClick={()=>setRetry(true)}>No 😢</button>
          </>
        ) : (
          <button className="btn" onClick={()=>setStep(step+1)}>Next ❤️</button>
        )}

      </motion.div>

    </Background>
  );
}

/* NORMAL BACKGROUND */

function Background({children}){
  return(
    <div className="background">
      {children}
    </div>
  );
}

/* 🌌 GALAXY FINAL PAGE */

function GalaxyLoveUniverse(){

  const audioRef = useRef(null);
  const [showLetter,setShowLetter] = useState(false);

  useEffect(()=>{

    // unlock sound after first click (GitHub autoplay fix)
    const enableSound = () => {

      if(audioRef.current){
        audioRef.current.muted = false;
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(()=>{});
      }

    };

    window.addEventListener("click", enableSound, { once:true });

    setTimeout(()=>{
      setShowLetter(true);
    },3000);

  },[]);

  const stars = new Array(50).fill("✨");

  return(

    <div className="galaxyBackground">

      <audio
        ref={audioRef}
        src="/music/love.mp3"
        loop
        autoPlay
        muted
      />

      {stars.map((_,i)=>(
        <span
          key={i}
          className="star"
          style={{
            left:Math.random()*100+"%",
            animationDuration:(8+Math.random()*10)+"s"
          }}
        >
          ✨
        </span>
      ))}

      <PartyPoppers/>

      <div className="orbitContainer">

        <span className="orbitHeart">💖</span>

        <motion.div
          className="finalGalaxyCard"
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{duration:1}}
        >
          <h1>LOVE YOU SOO MUCH PANDAA ❤️</h1>
          <p>You are my comfort, my happiness, my everything ❤️</p>

          <div className="loveExplosion">💖💖💖💖💖</div>
        </motion.div>

      </div>

      {showLetter && <SecretLetter/>}

    </div>
  );
}

/* PARTY POPPERS */

function PartyPoppers(){

  return(
    <>
      <div className="popper topLeft">🎉</div>
      <div className="popper topRight">🎉</div>
      <div className="popper bottomLeft">🎉</div>
      <div className="popper bottomRight">🎉</div>
    </>
  );
}

/* SECRET LETTER */

function SecretLetter(){

  return(
    <motion.div
      className="secretLetter"
      initial={{opacity:0,scale:0.5}}
      animate={{opacity:1,scale:1}}
    >
      <h2>💌 A Secret For You...</h2>
      <p>
        Maybe I don’t always say things perfectly…
        but you mean everything to me.
        ❤️ Always yours ❤️
      </p>
    </motion.div>
  );
}
