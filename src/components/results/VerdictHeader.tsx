import { VerdictType } from '../../types';
import { Badge } from '../ui/badge';
import { Share2 } from 'lucide-react';
import { Button } from '../ui/button';

interface VerdictHeaderProps {
  claim: string;
  verdict: VerdictType;
  confidence: number;
  analysisTime: string;
  sourceCount: number;
}

const verdictConfig = {
  TRUE: { color: 'bg-green-500', label: 'TRUE', textColor: 'text-green-500' },
  FALSE: { color: 'bg-red-500', label: 'FALSE', textColor: 'text-red-500' },
  MIXED: { color: 'bg-orange-500', label: 'MIXED', textColor: 'text-orange-500' },
  UNVERIFIABLE: { color: 'bg-gray-500', label: 'UNVERIFIABLE', textColor: 'text-gray-500' },
};

export function VerdictHeader({ claim, verdict, confidence, analysisTime, sourceCount }: VerdictHeaderProps) {
  const config = verdictConfig[verdict];

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
      <h1 className="mb-6">{claim}</h1>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <Badge className={`${config.color} text-white px-4 py-2`}>
            {config.label}
          </Badge>
          <div>
            <div className="text-sm text-muted-foreground">Confidence</div>
            <div className={`${config.textColor}`}>{confidence}%</div>
          </div>
        </div>
        
        <Button variant="outline" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>

      <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
        <div 
          className={`h-full ${config.color}`}
          style={{ width: `${confidence}%` }}
        />
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span>Analyzed in {analysisTime}</span>
        <span>•</span>
        <span>{sourceCount} sources</span>
      </div>
    </div>
  );
}