import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, Shield, Eye, Users, RefreshCw } from 'lucide-react';

export default function Principles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GenuVerity Principles & Standards
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Our commitment to excellence in fact-checking and information verification
            </p>
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              Pursuing IFCN Certification Excellence
            </Badge>
          </div>

          {/* Mission Statement */}
          <Card className="mb-8 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-500" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                GenuVerity is committed to becoming a premier fact-checking platform that meets and exceeds 
                the rigorous standards set by the International Fact-Checking Network (IFCN). We understand 
                that trust is the cornerstone of effective fact-checking—a fact-checker must be correct every 
                time to maintain credibility and serve the public interest. Our goal is to achieve IFCN 
                verified signatory status at launch, demonstrating our unwavering commitment to accuracy, 
                transparency, and non-partisan excellence.
              </p>
            </CardContent>
          </Card>

          {/* Why IFCN Certification Matters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-500" />
                Why IFCN Certification Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Trust & Credibility</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    IFCN verification is recognized globally as the gold standard for fact-checking organizations, 
                    providing users with confidence in our methodology and findings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Platform Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Major platforms like Facebook require IFCN verification for their third-party fact-checking 
                    programs, expanding our reach and impact.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Accountability</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The rigorous assessment process ensures we maintain the highest standards and can be 
                    held accountable by users and peers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Global Network</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Joining a network of 170+ verified organizations worldwide, sharing best practices 
                    and maintaining consistent quality standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Five Core Principles */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Five Core Principles
            </h2>
            <div className="grid gap-6">
              
              {/* Principle 1 */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    1. Non-partisanship and Fairness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We apply the same rigorous standards of evidence to all claims, regardless of their source. 
                    Our fact-checking process is guided solely by evidence, not political affiliation or bias.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Our Commitments:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Equal treatment of equivalent claims from all sources</li>
                      <li>• Transparent claim selection based on reach and importance</li>
                      <li>• No advocacy for policy positions (except accuracy and transparency)</li>
                      <li>• Clear disclosure of any potential conflicts of interest</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Principle 2 */}
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-500" />
                    2. Standards and Transparency of Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We provide comprehensive source documentation to enable users to verify our work independently. 
                    Our commitment to transparency builds trust through verifiability.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Our Standards:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Primary sources used wherever possible</li>
                      <li>• Multiple source verification for key claims</li>
                      <li>• Complete source attribution with accessible links</li>
                      <li>• Clear identification of source interests and potential biases</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Principle 3 */}
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    3. Transparency of Funding & Organization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We maintain complete transparency about our organizational structure, funding sources, 
                    and editorial processes to ensure accountability and trust.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Our Transparency:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Public disclosure of all major funding sources</li>
                      <li>• Clear organizational structure and editorial control</li>
                      <li>• Professional backgrounds of key editorial staff</li>
                      <li>• Accessible communication channels for users</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Principle 4 */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    4. Standards and Transparency of Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We maintain the highest professional standards and provide clear explanations of our 
                    fact-checking methodology, from claim selection to final verdict.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Our Methodology:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Detailed methodology documentation</li>
                      <li>• Evidence-based claim selection process</li>
                      <li>• Systematic evidence evaluation</li>
                      <li>• Contact with claim makers when possible</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Principle 5 */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-red-500" />
                    5. Open & Honest Corrections Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We are committed to accuracy above all else and maintain a transparent corrections 
                    policy to address any errors promptly and openly.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Our Corrections Process:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Clear, accessible corrections policy</li>
                      <li>• Prompt response to credible correction requests</li>
                      <li>• Transparent correction implementation</li>
                      <li>• User notification systems for corrections</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Commitment */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-center text-blue-900 dark:text-blue-100">
                Our Commitment to Excellence
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                GenuVerity is built from the ground up to meet IFCN standards. Every feature, process, 
                and policy is designed with these principles at its core. We believe that in an era of 
                information abundance, the public deserves fact-checking that is not just accurate, 
                but verifiably trustworthy.
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Because trust, once lost, is nearly impossible to regain.</strong>
              </p>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Learn more about the IFCN Code of Principles at{' '}
              <a 
                href="https://ifcncodeofprinciples.poynter.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                ifcncodeofprinciples.poynter.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}