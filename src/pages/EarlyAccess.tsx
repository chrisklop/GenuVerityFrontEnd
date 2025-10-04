import { useNavigate } from 'react-router-dom';
import { Mail, User, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Navigation } from '../components/Navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    useCase: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mwprbgoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          useCase: formData.useCase,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or contact us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="mb-4">Join the GenuVerity Beta</h1>
          <p className="text-lg text-muted-foreground">
            Help shape the future of AI-powered fact-checking by joining our beta testing program
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h3 className="mb-6">Beta Tester Benefits</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Exclusive access to beta platform features</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Extended free trial with generous query limits</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Direct influence on product development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Beta tester recognition and special pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Early API access for technical feedback</span>
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
              What would you like to help us test? (Optional)
            </Label>
            <Textarea
              id="useCase"
              name="useCase"
              placeholder="e.g., Medical fact-checking accuracy, news verification speed, educational use cases, API integration..."
              rows={4}
              value={formData.useCase}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Join Beta Testing'}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By joining our beta, you agree to provide feedback and receive updates about GenuVerity. 
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
