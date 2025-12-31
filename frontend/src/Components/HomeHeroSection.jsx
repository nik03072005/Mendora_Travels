import React from 'react';

const HomeHeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background Layer */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onLoadedData={() => {
            console.log('✅ Video loaded and ready');
          }}
          onError={(e) => console.error('❌ Video error:', e)}
        >
          <source 
            src="https://pub-0b67f355528a459b82e08d0ec786c68a.r2.dev/45569-443244046_small.mp4" 
            // src="https://pub-0b67f355528a459b82e08d0ec786c68a.r2.dev/main.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>

      {/* Hero Content - Centered */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Global Community of
            <br />
            Travelers
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 tracking-wide">
            Connect | Explore | Travel
          </p>
        </div>
      </div>

      {/* Bottom: Review Stats */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center gap-3 sm:gap-4 px-4 z-40">
        {/* Google Reviews */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg hover:bg-white/20 transition-all">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <div>
            <div className="font-bold text-white text-sm sm:text-base">4.9</div>
            <div className="text-[10px] sm:text-xs text-white/80">(14k reviews)</div>
          </div>
        </div>

        {/* TripAdvisor Reviews */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg hover:bg-white/20 transition-all">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
            <circle fill="#00AF87" cx="12" cy="12" r="11"/>
            <path fill="#FFFFFF" d="M8.5 13.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S7 11.17 7 12s.67 1.5 1.5 1.5zm7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
          </svg>
          <div>
            <div className="font-bold text-white text-sm sm:text-base">5.0</div>
            <div className="text-[10px] sm:text-xs text-white/80">(3.8k reviews)</div>
          </div>
        </div>

        {/* Facebook Reviews */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg hover:bg-white/20 transition-all">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
            <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <div>
            <div className="font-bold text-white text-sm sm:text-base">4.9</div>
            <div className="text-[10px] sm:text-xs text-white/80">(1k reviews)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
