import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import genuverityLogo from 'figma:asset/7a1c97674e5167dc2d9474d7d02423e43c5e10fe.png';

interface NavigationProps {
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonTo?: string;
}

export function Navigation({ showBackButton = false, backButtonText = "Back to Home", backButtonTo = "/" }: NavigationProps) {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBackButton ? (
            <Link to={backButtonTo} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">{backButtonText}</span>
            </Link>
          ) : (
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={genuverityLogo} 
                alt="GenuVerity" 
                className="h-8 w-auto"
              />
            </Link>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-6">
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
            Join Beta Testing
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
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}