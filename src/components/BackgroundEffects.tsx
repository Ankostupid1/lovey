import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-background"></div>
      
      {/* Soft light flares */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl glow-animation"></div>
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-lavender/30 rounded-full blur-3xl glow-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-rose-gold/25 rounded-full blur-2xl glow-animation" style={{ animationDelay: '2s' }}></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 text-primary/20 text-6xl animate-pulse">💫</div>
      <div className="absolute bottom-20 left-20 text-rose-gold/30 text-4xl animate-pulse" style={{ animationDelay: '1.5s' }}>✨</div>
      <div className="absolute top-1/3 right-1/3 text-lavender/40 text-3xl animate-pulse" style={{ animationDelay: '2.5s' }}>💖</div>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
    </div>
  );
};

export default BackgroundEffects;