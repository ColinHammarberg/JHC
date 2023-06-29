import React, { useEffect, useRef } from 'react';
import './styles/TypingEffect.scss';

const TypingEffect = (props) => {
  const textRef = useRef(null);
  const subTextRef = useRef(null);
  const { className } = props;

  useEffect(() => {
    const text = 'Jonas Hammarberg';
    const subText = 'EXECUTIVE BUSINESS COACH';
    let index = 0;

    const typeText = () => {
      if (index < text.length && textRef.current) {
        textRef.current.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeText, 150); // Adjust the typing speed here (in milliseconds)
      } else {
        let subIndex = 0;
        const typeSubText = () => {
          if (subIndex < subText.length && textRef.current) {
            subTextRef.current.textContent = subText.slice(0, subIndex + 1);
            subIndex++;
            setTimeout(typeSubText, 100); // Adjust the typing speed here (in milliseconds)
          }
        };
        typeSubText();
      }
    };

    typeText();
  }, []);

  return (
    <div className={`typing-effect ${className}`}>
        <div>
            <span ref={textRef} className="text"></span>
        </div>
        <div>
            <span ref={subTextRef} className="sub-text"></span>
        </div>
    </div>
  );
};

export default TypingEffect;
