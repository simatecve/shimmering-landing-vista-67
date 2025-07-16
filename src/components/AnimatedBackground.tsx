const AnimatedBackground = () => {
  return (
    <div className="relative overflow-hidden py-20 bg-gradient-to-br from-ema-blue-900 via-ema-blue-800 to-ema-blue-700">
      {/* Animated floating shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-ema-blue-300/20 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-float blur-md" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-ema-blue-400/15 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
        
        {/* Small floating dots */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-ema-blue-200/40 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-white/20 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
        
        {/* Moving gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-[slide-right_8s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ema-blue-300/10 to-transparent translate-x-[100%] animate-[slide-left_12s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            Tu Salud es Nuestra Prioridad
          </h3>
          <p className="text-ema-blue-100 text-lg leading-relaxed animate-fade-in" style={{animationDelay: '0.5s'}}>
            Comprometidos con brindarte la mejor atención médica y el cuidado que tú y tu familia merecen.
          </p>
        </div>
      </div>
      
      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20">
          <path 
            fill="white" 
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            className="animate-[wave_6s_ease-in-out_infinite]"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;