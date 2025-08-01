import React from 'react';

interface BloomingFlowerProps {
  isVisible: boolean;
}

const BloomingFlower: React.FC<BloomingFlowerProps> = ({ isVisible }) => {
  return (
    <div className={`absolute top-8 left-8 text-6xl ${isVisible ? 'bloom-animation' : 'opacity-0'}`}>
      <div className="relative">
        {/* Flower stem */}
        <div className="absolute top-12 left-1/2 w-1 h-20 bg-green-500 transform -translate-x-1/2 rounded-full"></div>
        
        {/* Flower petals */}
        <div className="relative">
          🌺
        </div>
        
        {/* Soft glow effect */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 glow-animation"></div>
      </div>
    </div>
  );
};

export default BloomingFlower;