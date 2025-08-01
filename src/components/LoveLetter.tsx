import React from 'react';

interface LoveLetterProps {
  isVisible: boolean;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ isVisible }) => {
  const message = `My Love,

Today, the world celebrates Girlfriends Day, but I celebrate *you* every single day.

Like a flower blooming with the morning sun, you've opened up a part of me I never knew existed. You've shown me warmth in moments of cold, laughter in silence, and love in its purest, most beautiful form.

Being yours is a gift I'll never take for granted. You are not just my girlfriend—you are my muse, my home, my forever.

I love you deeply, wildly, truly.

Happy Girlfriend's Day, my beautiful blossom. 💖

Yours, always,
Tony`;

  return (
    <div className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className={`relative ${isVisible ? 'letter-slide-animation' : ''}`}>
        {/* Letter paper */}
        <div className={`w-full max-w-2xl bg-cream border-2 border-rose-gold rounded-lg shadow-2xl p-8 transform origin-top ${
          isVisible ? 'unfold-animation' : ''
        }`}>
          {/* Decorative header */}
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">💝</div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-rose-gold mx-auto rounded"></div>
          </div>
          
          {/* Letter content */}
          <div className="space-y-4">
            {message.split('\n\n').map((paragraph, index) => (
              <p 
                key={index}
                className={`text-foreground leading-relaxed ${
                  index === 0 ? 'font-romantic text-xl' : 
                  index === message.split('\n\n').length - 1 ? 'font-romantic text-lg text-right' :
                  'font-elegant text-base'
                } ${isVisible ? 'animate-fade-in' : ''}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Decorative footer */}
          <div className="text-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-rose-gold to-primary mx-auto rounded mb-2"></div>
            <div className="text-2xl">💕</div>
          </div>
          
          {/* Paper texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg pointer-events-none"></div>
          
          {/* Romantic border decorations */}
          <div className="absolute top-2 left-2 text-rose-gold text-xs">🌹</div>
          <div className="absolute top-2 right-2 text-primary text-xs">🌹</div>
          <div className="absolute bottom-2 left-2 text-lavender text-xs">🌹</div>
          <div className="absolute bottom-2 right-2 text-rose-gold text-xs">🌹</div>
        </div>
        
        {/* Soft glow around letter */}
        <div className="absolute inset-0 bg-primary/10 rounded-lg blur-xl scale-110 -z-10 glow-animation"></div>
      </div>
    </div>
  );
};

export default LoveLetter;