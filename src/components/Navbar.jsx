import { Rocket, Settings, Gamepad, Cpu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 p-[1px]">
            <div className="h-full w-full rounded-[7px] bg-black flex items-center justify-center">
              <Rocket className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <span className="text-white text-lg font-semibold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">Nexus</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors flex items-center gap-2">
            <Settings className="h-4 w-4" /> Features
          </a>
          <a href="#widgets" className="hover:text-white transition-colors flex items-center gap-2">
            <Cpu className="h-4 w-4" /> Performance
          </a>
          <a href="#library" className="hover:text-white transition-colors flex items-center gap-2">
            <Gamepad className="h-4 w-4" /> Gaming Hub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#download" className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-colors">
            Preview
          </a>
          <a href="#get" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black hover:opacity-90 transition-opacity">
            Get Nexus
          </a>
        </div>
      </div>
    </header>
  );
}
