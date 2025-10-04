import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Users, Shield, Lightbulb } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Mission() {
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

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            To combat misinformation by providing everyone with access to AI-powered, 
            transparent, and evidence-based fact-checking.
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-primary" />
              <h2>Why We Exist</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              In an age of information overload, distinguishing fact from fiction has never been more 
              critical. GenuVerity was created to democratize access to high-quality fact-checking, 
              making it as easy to verify a claim as it is to search for information online.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h3>Evidence-First</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We prioritize primary sources and peer-reviewed research, ensuring our verdicts 
                are grounded in the strongest available evidence.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h3>Transparent</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Every verdict comes with full source attribution and methodology disclosure. 
                You can see exactly how we reached our conclusions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h3>Accessible</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Complex fact-checking should be simple to use. We present technical analysis 
                in clear, understandable language for everyone.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h3>Ethical AI</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Built on Constitutional AI principles, our models are designed to be truthful, 
                helpful, and harmless in every analysis.
              </p>
            </div>
          </div>

          <section className="bg-accent/50 rounded-lg p-8">
            <h2 className="mb-4">Our Commitment</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">No Hidden Agendas:</strong> We are committed to 
                political neutrality and evidence-based analysis regardless of who the truth may favor.
              </p>
              <p>
                <strong className="text-foreground">Continuous Improvement:</strong> Science evolves, 
                and so do we. Our models and methodologies are constantly refined based on the latest 
                research and user feedback.
              </p>
              <p>
                <strong className="text-foreground">Privacy Respected:</strong> We do not track, 
                sell, or share your search data. Fact-checking should be private and accessible to all.
              </p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="mb-4">Join Us</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Help us build a more informed world. Sign up for early access and be part of the 
              solution to misinformation.
            </p>
            <Link 
              to="/early-access"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Sign Up for Early Access
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
