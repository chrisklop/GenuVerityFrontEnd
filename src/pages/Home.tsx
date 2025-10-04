import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, Paperclip } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import genuverityLogo from 'figma:asset/7a1c97674e5167dc2d9474d7d02423e43c5e10fe.png';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to results page with the query
    // For now, we'll use a mock ID based on the query. In production, this would trigger an API call
    // and navigate with the actual result ID
    const query = searchQuery.trim().toLowerCase();
    let mockId = 'vaccines-autism-2024'; // Default
    
    // Simple routing based on query content
    if (query.includes('great wall') || query.includes('china') && query.includes('space')) {
      mockId = 'great-wall-space-2024';
    } else if (query.includes('coffee')) {
      mockId = 'coffee-health-2024';
    }
    
    navigate(`/verify/${mockId}`, { state: { query: searchQuery || 'Vaccines cause autism' } });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      {/* Header Navigation */}
      <header className="absolute top-0 right-0 p-6">
        <nav className="flex items-center gap-6">
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
            Sign up for early access
          </Link>
          <Link 
            to="/mission" 
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Our Mission
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <div className="w-full max-w-2xl mx-auto text-center -mt-[200px]">
        {/* Logo Section */}
        <div className="mb-6">
          <img 
            src={genuverityLogo} 
            alt="GenuVerity - Constitutional AI Fact Checking" 
            className="mx-auto max-w-md w-full h-auto"
          />
        </div>

        {/* Search Section */}
        <div className="space-y-6 -mt-[180px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Paperclip className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder="Enter a claim or statement to verify..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-12 pr-12 py-4 text-lg border-2 border-border hover:border-ring focus:border-ring rounded-full shadow-sm bg-input-background"
            />
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={handleSearch}
              size="lg"
              className="px-8 py-3 rounded-full hover:shadow-md transition-shadow text-[#64B8F7]"
            >
              Find the Truth
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 text-sm text-muted-foreground">
          <p>Trusted sources • Verified claims • Deeper insights</p>
        </div>
      </div>
    </div>
  );
}
