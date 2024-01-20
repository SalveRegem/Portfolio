import React, { useEffect } from 'react';

const TextReveal = ({ text }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-text-reveal');
    elements.forEach(element => {
      element.classList.add('opacity-0');  // Appliquez la classe pour masquer le texte au début
      element.classList.add('start-animation');
    });
  }, []);

  return (
    <div className="flex justify-center overflow-hidden text-2xl font-bold bg-inherit text-slate-200 px-6 color">
      <p className="animate-text-reveal inline-block opacity-0">
        {text}
      </p>
    </div>
  );
};

export default TextReveal;