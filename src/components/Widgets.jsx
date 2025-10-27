import { Activity, Gauge, Shield, Download } from 'lucide-react';

function Card({ title, icon: Icon, children }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition-colors">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <div className="relative mt-4 text-white">{children}</div>
    </div>
  );
}

function Sparkline({ values = [3, 6, 4, 8, 5, 9, 7, 11, 6, 10] }) {
  const max = Math.max(...values);
  const points = values
    .map((v, i) => `${(i / (values.length - 1)) * 100},${100 - (v / max) * 100}`)
    .join(' ');
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-full">
      <polyline fill="none" stroke="url(#grad)" strokeWidth="3" points={points} />
      <defs>
        <linearGradient id="grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#f0abfc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Widgets() {
  return (
    <section id="widgets" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Nexus Dashboard Preview</h2>
          <p className="text-white/70">Customizable widgets you can mix and match for your perfect setup.</p>
        </div>
        <a href="#get" className="hidden sm:inline-flex rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm">Customize</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card title="AI Health Score" icon={Shield}>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">92</span>
            <span className="text-white/70">of 100</span>
          </div>
          <p className="mt-2 text-sm text-emerald-300">All systems optimal</p>
        </Card>

        <Card title="Real-time Performance" icon={Gauge}>
          <Sparkline />
          <div className="mt-2 grid grid-cols-3 text-xs text-white/70">
            <div>
              <p>CPU</p>
              <p className="text-white">34%</p>
            </div>
            <div>
              <p>GPU</p>
              <p className="text-white">57%</p>
            </div>
            <div>
              <p>RAM</p>
              <p className="text-white">12.3 GB</p>
            </div>
          </div>
        </Card>

        <Card title="Recent Games" icon={Activity}>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between"><span className="text-white/80">Cyberpunk 2077</span><span className="text-emerald-300">Optimized</span></li>
            <li className="flex items-center justify-between"><span className="text-white/80">Valorant</span><span className="text-cyan-300">Prepped</span></li>
            <li className="flex items-center justify-between"><span className="text-white/80">Apex Legends</span><span className="text-yellow-300">Analyzing</span></li>
          </ul>
        </Card>

        <Card title="Updates" icon={Download}>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between"><span className="text-white/80">NVIDIA Driver</span><span className="text-white/90">Ready</span></li>
            <li className="flex items-center justify-between"><span className="text-white/80">Chipset Package</span><span className="text-white/90">Latest</span></li>
            <li className="flex items-center justify-between"><span className="text-white/80">Epic Games</span><span className="text-white/90">Update</span></li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
