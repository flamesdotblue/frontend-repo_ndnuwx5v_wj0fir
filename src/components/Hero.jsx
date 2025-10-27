import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fcD-iW8YZHyBp1qq/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-start justify-center gap-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/15">
          <Rocket className="h-3.5 w-3.5 text-cyan-300" />
          <span>AI Gaming & Performance Co-Pilot</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Meet <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">Nexus</span>
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-white/80">
          Your unified hub for game launching, real‑time monitoring, and intelligent optimization. Powered by a proactive AI core that learns your PC, anticipates needs, and elevates every session.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#get" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 font-medium text-black shadow-lg shadow-fuchsia-500/20 hover:opacity-90 transition">
            Get Nexus Free
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium text-white bg-white/10 hover:bg-white/20 transition">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
