import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';

type Page = 'home' | 'about' | 'services' | 'contact' | 'testimonials';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      case 'testimonials':
        return <Testimonials />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}