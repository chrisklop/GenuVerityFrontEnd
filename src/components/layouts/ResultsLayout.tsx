import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { ScrollArea } from '../ui/scroll-area';
import { ThemeToggle } from '../ThemeToggle';

interface ResultsLayoutProps {
  children: ReactNode;
  sections: { id: string; label: string; available: boolean }[];
}

export function ResultsLayout({ children, sections }: ResultsLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const TableOfContents = () => (
    <nav className="space-y-1">
      <h3 className="mb-4 px-3 text-muted-foreground">Contents</h3>
      {sections
        .filter(section => section.available)
        .map(section => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
          >
            {section.label}
          </button>
        ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetContent side="left" className="w-64">
                  <div className="mt-6">
                    <TableOfContents />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <ScrollArea className="h-[calc(100vh-8rem)]">
                <TableOfContents />
              </ScrollArea>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {children}
          </main>

          {/* Right Sidebar (for future use - quick actions, related claims) */}
          <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="text-sm text-muted-foreground">
                {/* Placeholder for future features */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
