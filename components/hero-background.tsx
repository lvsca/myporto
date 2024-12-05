'use client'

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(17, 17, 17) 100%)`
        }}
      />
      <div 
        className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"
        style={{
          maskImage: `linear-gradient(to bottom, transparent, 20%, white, 80%, transparent)`,
          WebkitMaskImage: `linear-gradient(to bottom, transparent, 20%, white, 80%, transparent)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent blur-3xl">
        <div className="absolute inset-0 animate-pulse-slow [--tw-gradient-from:theme(colors.white/0.2)]" />
      </div>
    </div>
  )
}

