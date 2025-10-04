import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Calendar, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Navigation } from '../components/Navigation';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-20 pb-16 max-w-2xl text-center">
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="mb-4">Thank You for Your Interest!</h1>
          <p className="text-lg text-muted-foreground">
            Your early access request has been successfully submitted.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8 text-left">
          <h2 className="text-center mb-6">What Happens Next?</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Confirmation Email</h3>
                <p className="text-muted-foreground text-sm">
                  You'll receive a confirmation email within the next few minutes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Review Process</h3>
                <p className="text-muted-foreground text-sm">
                  Our team will review your application and prioritize based on use case and organization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Access Invitation</h3>
                <p className="text-muted-foreground text-sm">
                  Early access invitations will be sent in waves over the coming weeks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h3 className="mb-4">While You Wait</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <span className="text-primary">📖</span>
              <span className="text-muted-foreground">Learn about our principles and IFCN certification commitment</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary">🔬</span>
              <span className="text-muted-foreground">Explore our Constitutional AI methodology</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary">📧</span>
              <span className="text-muted-foreground">Join our beta community for updates and testing coordination</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/principles">
                Read Our Principles
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/how-it-works">
                How It Works
              </Link>
            </Button>
          </div>
          
          <Button asChild className="w-full sm:w-auto">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Questions about your application?{' '}
            <a 
              href="mailto:chris@klopconsulting.com" 
              className="text-primary hover:underline"
            >
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}