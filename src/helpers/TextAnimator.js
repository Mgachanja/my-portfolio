 import { useState,useEffect } from "react";
 import '../styles/home.css'
 export const TypingText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const fullText = text;
  
    useEffect(() => {
      let currentIndex = 0;
  
      const intervalId = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);
  
      return () => {
        clearInterval(intervalId); 
      };
    }, [fullText]);
  
    return <p className='description'>{displayText}</p>;
  };