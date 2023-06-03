import React, { useEffect, useRef } from 'react';
import './styles/TypingEffect.scss';

const TypingEffect = () => {
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const text = 'Jonas Hammarberg';
    const subText = 'EXECUTIVE BUSINESS COACH';
    let index = 0;

    const typeText = () => {
      if (index < text.length) {
        textRef.current.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeText, 200); // Adjust the typing speed here (in milliseconds)
      } else {
        let subIndex = 0;
        const typeSubText = () => {
          if (subIndex < subText.length) {
            subTextRef.current.textContent = subText.slice(0, subIndex + 1);
            subIndex++;
            setTimeout(typeSubText, 200); // Adjust the typing speed here (in milliseconds)
          }
        };
        typeSubText();
      }
    };

    typeText();
  }, []);

  return (
    <div className="typing-effect">
        <div>
            <span ref={textRef}></span>
        </div>
        <div>
            <span ref={subTextRef} className="sub-text"></span>
        </div>
    </div>
  );
};

export default TypingEffect;
