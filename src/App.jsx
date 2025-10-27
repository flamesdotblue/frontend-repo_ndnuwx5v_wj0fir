import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Widgets from './components/Widgets';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Widgets />
        <Features />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Nexus. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#widgets" className="hover:text-white">Dashboard</a>
            <a href="#get" className="hover:text-white">Get Nexus</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
