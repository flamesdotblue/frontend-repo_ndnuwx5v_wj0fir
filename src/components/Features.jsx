import { Brain, Gauge, Gamepad, Bot } from 'lucide-react';

export default function Features() {
  const items = [
    {
      title: 'Nexus AI Core',
      desc: 'Learns your hardware and habits to create proactive, personalized optimizations.',
      icon: Brain,
    },
    {
      title: 'Performance Workshop',
      desc: 'Real-time monitoring with intelligent tuning for clocks, thermals, and fan curves.',
      icon: Gauge,
    },
    {
      title: 'Gaming Hub',
      desc: 'A unified library across stores with smart overlay and session-aware tools.',
      icon: Gamepad,
    },
    {
      title: 'Command Center',
      desc: 'Ask in natural language. “Optimize for Cyberpunk” or “Show GPU temps.”',
      icon: Bot,
    },
  ];

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for Gamers. Powered by AI.</h2>
        <p className="mt-2 text-white/70 max-w-2xl mx-auto">One place for launching, tuning, monitoring, and maintaining your PC — with an assistant that thinks ahead.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
            <div className="mb-4 h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center">
              <it.icon className="h-5 w-5 text-fuchsia-300" />
            </div>
            <h3 className="text-white font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-white/70">{it.desc}</p>
          </div>
        ))}
      </div>

      <div id="library" className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 p-6 border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold">Unified Game Library</h3>
            <p className="text-white/70 text-sm">Bring Steam, Epic, GOG, Battle.net, and more into a single beautiful view.</p>
          </div>
          <a href="#get" className="inline-flex rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm">Import Games</a>
        </div>
      </div>
    </section>
  );
}
