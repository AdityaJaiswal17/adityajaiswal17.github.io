import { useEffect, useState } from 'react'

export default function Loader() {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>('in')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 80)
    const t2 = setTimeout(() => setPhase('out'), 3800)
    const t3 = setTimeout(() => setPhase('done'), 4400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
      style={{
        transition: 'opacity 0.6s ease',
        opacity: phase === 'in' ? 0 : phase === 'out' ? 0 : 1,
      }}
    >
      {/* Vortex GIF — bright fill */}
      <div className="absolute inset-0">
        <img
          src="/images/loader.gif"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.95 }}
        />
        {/* Subtle vignette only at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Name overlay — centered */}
      <div className="relative z-10 flex flex-col items-center gap-3 select-none">
        <span className="font-sans font-bold text-white text-2xl sm:text-3xl tracking-[0.25em] uppercase drop-shadow-lg">
          Aditya Jaiswal
        </span>
        {/* Thin animated progress line */}
        <div className="w-40 h-px bg-white/25 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-white"
            style={{ animation: 'loaderLine 3.8s ease-in-out forwards' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loaderLine {
          0%   { width: 0%; }
          70%  { width: 85%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
