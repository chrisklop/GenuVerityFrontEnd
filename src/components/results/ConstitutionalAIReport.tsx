import { ConstitutionalAIScore } from '../../types';
import { Shield } from 'lucide-react';

interface ConstitutionalAIReportProps {
  score: ConstitutionalAIScore;
}

const getScoreColor = (score: number): string => {
  if (score >= 80) return 'text-green-500';
  if (score >= 60) return 'text-yellow-500';
  return 'text-red-500';
};

const getBarColor = (score: number): string => {
  if (score >= 80) return 'bg-green-500';
  if (score >= 60) return 'bg-yellow-500';
  return 'bg-red-500';
};

export function ConstitutionalAIReport({ score }: ConstitutionalAIReportProps) {
  const metrics = [
    { label: 'Truthfulness', value: score.truthfulness },
    { label: 'Helpfulness', value: score.helpfulness },
    { label: 'Harmlessness', value: score.harmlessness },
    { label: 'Neutrality', value: score.neutrality },
    { label: 'Verifiability', value: score.verifiability },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5 text-primary" />
        <h3>AI Safety Assessment</h3>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Overall Safety Score</span>
          <span className={`text-xl ${getScoreColor(score.overall)}`}>
            {score.overall}%
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full ${getBarColor(score.overall)} transition-all duration-500`}
            style={{ width: `${score.overall}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm mb-3">Principles Evaluated:</p>
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between mb-1.5 text-sm">
              <span>{metric.label}</span>
              <span className={getScoreColor(metric.value)}>{metric.value}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full ${getBarColor(metric.value)} transition-all duration-500`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <a href="#methodology" className="text-sm text-primary hover:underline">
          View Safety Methodology →
        </a>
      </div>
    </div>
  );
}
