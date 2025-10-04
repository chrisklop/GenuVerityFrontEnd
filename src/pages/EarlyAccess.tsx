import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, User, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { ThemeToggle } from '../components/ThemeToggle';
import { useState } from 'react';
import { toast } from 'sonner';

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    useCase: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    toast.success('Thanks for your interest! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', organization: '', useCase: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="mb-4">Sign Up for Early Access</h1>
          <p className="text-lg text-muted-foreground">
            Be among the first to experience AI-powered fact-checking with GenuVerity
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h3 className="mb-6">What You'll Get</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Priority access to GenuVerity platform</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Extended free trial with unlimited queries</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Direct input on feature development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Special early adopter pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>API access for developers</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Organization (Optional)
            </Label>
            <Input
              id="organization"
              name="organization"
              type="text"
              placeholder="Your company or institution"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="useCase">
              How do you plan to use GenuVerity? (Optional)
            </Label>
            <Textarea
              id="useCase"
              name="useCase"
              placeholder="e.g., Researching medical claims, verifying news articles, educational purposes..."
              rows={4}
              value={formData.useCase}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Request Early Access
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By signing up, you agree to receive occasional updates about GenuVerity. 
            We respect your privacy and will never share your information.
          </p>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Have questions? <a href="mailto:support@genuverity.com" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
