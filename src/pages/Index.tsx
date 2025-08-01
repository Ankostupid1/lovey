import React, { useState, useEffect } from 'react';
import BackgroundEffects from '@/components/BackgroundEffects';
import FloatingPetals from '@/components/FloatingPetals';
import BloomingFlower from '@/components/BloomingFlower';
import RomanticEnvelope from '@/components/RomanticEnvelope';
import LoveLetter from '@/components/LoveLetter';

const Index = () => {
  const [showFlower, setShowFlower] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    // Sequence of animations
    const timer1 = setTimeout(() => setShowFlower(true), 500);
    const timer2 = setTimeout(() => setShowEnvelope(true), 3500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleEnvelopeOpen = () => {
    setShowLetter(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />
      
      {/* Floating petals */}
      <FloatingPetals />
      
      {/* Blooming flower */}
      <BloomingFlower isVisible={showFlower} />
      
      {/* Envelope */}
      {showEnvelope && !showLetter && (
        <RomanticEnvelope 
          isVisible={showEnvelope} 
          onOpen={handleEnvelopeOpen}
        />
      )}
      
      {/* Love letter */}
      <LoveLetter isVisible={showLetter} />
      
      {/* Welcome message (before letter opens) */}
      {!showLetter && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-3xl font-romantic text-primary mb-2 animate-pulse">
            A Special Message Awaits...
          </h1>
          <p className="text-lg font-elegant text-muted-foreground">
            {showFlower && !showEnvelope && "Watch the magic unfold..."}
            {showEnvelope && "Your love letter has arrived 💌"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Index;
