import { CheckCircle, Target, Shield, Eye, Users, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '../components/Navigation';

export default function Principles() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation showBackButton={true} />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="mb-4">
            GenuVerity Principles & Standards
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Our commitment to excellence in fact-checking and information verification
          </p>
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
            Pursuing IFCN Certification Excellence
          </Badge>
        </div>

        <div className="space-y-12">
          <section className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2>Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              GenuVerity is committed to becoming a premier fact-checking platform that meets and exceeds 
              the rigorous standards set by the International Fact-Checking Network (IFCN). We understand 
              that trust is the cornerstone of effective fact-checking—a fact-checker must be correct every 
              time to maintain credibility and serve the public interest. Our goal is to achieve IFCN 
              verified signatory status at launch, demonstrating our unwavering commitment to accuracy, 
              transparency, and non-partisan excellence.
            </p>
          </section>

          <section className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2>Why IFCN Certification Matters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2">Trust & Credibility</h4>
                <p className="text-muted-foreground text-sm">
                  IFCN verification is recognized globally as the gold standard for fact-checking organizations, 
                  providing users with confidence in our methodology and findings.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2">Platform Integration</h4>
                <p className="text-muted-foreground text-sm">
                  Major platforms like Facebook require IFCN verification for their third-party fact-checking 
                  programs, expanding our reach and impact.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2">Accountability</h4>
                <p className="text-muted-foreground text-sm">
                  The rigorous assessment process ensures we maintain the highest standards and can be 
                  held accountable by users and peers.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-2">Global Network</h4>
                <p className="text-muted-foreground text-sm">
                  Joining a network of 170+ verified organizations worldwide, sharing best practices 
                  and maintaining consistent quality standards.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Our Five Core Principles
            </h2>
            <div className="grid gap-6">
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3>1. Non-partisanship and Fairness</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We apply the same rigorous standards of evidence to all claims, regardless of their source. 
                  Our fact-checking process is guided solely by evidence, not political affiliation or bias.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Our Commitments:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Equal treatment of equivalent claims from all sources</li>
                    <li>• Transparent claim selection based on reach and importance</li>
                    <li>• No advocacy for policy positions (except accuracy and transparency)</li>
                    <li>• Clear disclosure of any potential conflicts of interest</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Eye className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3>2. Standards and Transparency of Sources</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We provide comprehensive source documentation to enable users to verify our work independently. 
                  Our commitment to transparency builds trust through verifiability.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Our Standards:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Primary sources used wherever possible</li>
                    <li>• Multiple source verification for key claims</li>
                    <li>• Complete source attribution with accessible links</li>
                    <li>• Clear identification of source interests and potential biases</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Users className="h-5 w-5 text-purple-500" />
                  </div>
                  <h3>3. Transparency of Funding & Organization</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We maintain complete transparency about our organizational structure, funding sources, 
                  and editorial processes to ensure accountability and trust.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Our Transparency:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Public disclosure of all major funding sources</li>
                    <li>• Clear organizational structure and editorial control</li>
                    <li>• Professional backgrounds of key editorial staff</li>
                    <li>• Accessible communication channels for users</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Target className="h-5 w-5 text-green-500" />
                  </div>
                  <h3>4. Standards and Transparency of Methodology</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We maintain the highest professional standards and provide clear explanations of our 
                  fact-checking methodology, from claim selection to final verdict.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Our Methodology:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Detailed methodology documentation</li>
                    <li>• Evidence-based claim selection process</li>
                    <li>• Systematic evidence evaluation</li>
                    <li>• Contact with claim makers when possible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <RefreshCw className="h-5 w-5 text-red-500" />
                  </div>
                  <h3>5. Open & Honest Corrections Policy</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  We are committed to accuracy above all else and maintain a transparent corrections 
                  policy to address any errors promptly and openly.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Our Corrections Process:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Clear, accessible corrections policy</li>
                    <li>• Prompt response to credible correction requests</li>
                    <li>• Transparent correction implementation</li>
                    <li>• User notification systems for corrections</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-center mb-4">Our Commitment to Excellence</h2>
            <p className="text-muted-foreground mb-4 text-center">
              GenuVerity is built from the ground up to meet IFCN standards. Every feature, process, 
              and policy is designed with these principles at its core. We believe that in an era of 
              information abundance, the public deserves fact-checking that is not just accurate, 
              but verifiably trustworthy.
            </p>
            <p className="text-sm text-muted-foreground text-center">
              <strong>Because trust, once lost, is nearly impossible to regain.</strong>
            </p>
          </section>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>
            Learn more about the IFCN Code of Principles at{' '}
            <a 
              href="https://ifcncodeofprinciples.poynter.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ifcncodeofprinciples.poynter.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}