import React, { useState } from 'react';

interface RomanticEnvelopeProps {
  isVisible: boolean;
  onOpen: () => void;
}

const RomanticEnvelope: React.FC<RomanticEnvelopeProps> = ({ isVisible, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        onOpen();
      }, 1000);
    }
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center cursor-pointer transition-all duration-1000 ${
        isVisible ? 'opacity-100 float-in-animation' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      <div className="relative">
        {/* Envelope body */}
        <div className={`w-80 h-56 gradient-envelope border-2 border-rose-gold rounded-lg shadow-2xl transition-all duration-1000 ${
          isOpening ? 'envelope-open-animation' : ''
        }`}>
          {/* Envelope flap */}
          <div className={`absolute -top-1 left-0 w-full h-28 gradient-envelope border-2 border-rose-gold transform origin-bottom transition-all duration-1000 ${
            isOpening ? 'rotate-180' : ''
          }`} 
          style={{
            clipPath: 'polygon(0 100%, 50% 0, 100% 100%)'
          }}>
          </div>
          
          {/* Wax seal */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full border-4 border-rose-gold flex items-center justify-center text-cream font-romantic text-lg shadow-lg">
            💕
          </div>
          
          {/* Envelope shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg pointer-events-none"></div>
        </div>
        
        {/* Magical sparkles */}
        <div className="absolute -inset-4">
          <div className="absolute top-0 left-0 text-rose-gold animate-pulse">✨</div>
          <div className="absolute top-0 right-0 text-primary animate-pulse delay-300">✨</div>
          <div className="absolute bottom-0 left-0 text-lavender animate-pulse delay-700">✨</div>
          <div className="absolute bottom-0 right-0 text-rose-gold animate-pulse delay-1000">✨</div>
        </div>
        
        {/* Click instruction */}
        {!isOpening && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-primary font-elegant text-lg animate-pulse">
              Click here for a surprise💌
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RomanticEnvelope;