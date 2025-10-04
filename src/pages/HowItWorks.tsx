import { Search, Database, Brain, CheckCircle2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-20 pb-16 max-w-4xl">
        <h1 className="mb-8 text-center">How GenuVerity Works</h1>
        
        <div className="space-y-12">
          <section>
            <p className="text-lg text-center text-muted-foreground mb-12">
              GenuVerity uses Constitutional AI and a sophisticated source precedence system to deliver 
              accurate, transparent, and trustworthy fact-checking results.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3>1. Submit Your Claim</h3>
              </div>
              <p className="text-muted-foreground">
                Enter any claim or statement you want to verify. Our system accepts everything from 
                simple statements to complex claims about health, politics, science, and more.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3>2. Source Discovery</h3>
              </div>
              <p className="text-muted-foreground">
                We search across 250M+ sources including academic papers, fact-checking organizations, 
                government databases, and verified social media content.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3>3. Multi-Model Analysis</h3>
              </div>
              <p className="text-muted-foreground">
                Multiple AI models analyze the evidence independently using Constitutional AI principles 
                to ensure truthfulness, helpfulness, and harmlessness.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3>4. Transparent Results</h3>
              </div>
              <p className="text-muted-foreground">
                Get a clear verdict with confidence scores, source breakdowns, and full transparency 
                into how we reached our conclusion.
              </p>
            </div>
          </div>

          <section className="bg-accent/50 rounded-lg p-8">
            <h2 className="mb-4">Source Precedence System</h2>
            <p className="text-muted-foreground mb-6">
              Not all sources are created equal. Our tiered system prioritizes the most reliable evidence:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔬</span>
                <div>
                  <h4>Tier 1: GenuVerified Primary Sources</h4>
                  <p className="text-sm text-muted-foreground">
                    Peer-reviewed research, primary data, and original studies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4>Tier 2: Fact-Check Organizations</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional fact-checkers like Snopes, FactCheck.org, PolitiFact
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4>Tier 3: Academic & Scholarly</h4>
                  <p className="text-sm text-muted-foreground">
                    Published papers, meta-analyses, and academic journals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h4>Tier 4: Government Sources</h4>
                  <p className="text-sm text-muted-foreground">
                    Official statements, policy documents, health departments
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="mb-4">Constitutional AI Principles</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every analysis is evaluated against our Constitutional AI framework to ensure 
              it meets the highest standards of accuracy, helpfulness, and ethical responsibility.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
