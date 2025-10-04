import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import genuverityLogo from 'figma:asset/7a1c97674e5167dc2d9474d7d02423e43c5e10fe.png';

export function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Left side - back button or empty */}
          <div>
            {!isHomePage && (
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Back to Home</span>
              </Link>
            )}
          </div>

        {/* Navigation links and theme toggle - right side */}
        <div className="flex items-center gap-6">
          <Link 
            to="/how-it-works" 
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            How it Works
          </Link>
          <Link 
            to="/early-access" 
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Beta
          </Link>
          <Link 
            to="/mission" 
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Our Mission
          </Link>
          <Link 
            to="/principles" 
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Our Principles
          </Link>
          <ThemeToggle />
        </div>
        </nav>
      </div>
    </header>
  );
}