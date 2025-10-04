import { useState } from 'react';
import { Source } from '../../types';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Play } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

interface SourceListProps {
  sources: Source[];
  tier: number;
  tierName: string;
  icon: string;
  weightContribution: number;
}

export function SourceList({ sources, tier, tierName, icon, weightContribution }: SourceListProps) {
  const [isOpen, setIsOpen] = useState(tier <= 2); // Auto-expand top 2 tiers
  const tierSources = sources.filter(s => s.tier === tier);
  
  if (tierSources.length === 0) return null;

  const displayLimit = 3;
  const [showAll, setShowAll] = useState(false);
  const displaySources = showAll ? tierSources : tierSources.slice(0, displayLimit);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="bg-card border border-border rounded-lg">
      <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <div className="text-left">
            <h4>{tierName} ({tierSources.length})</h4>
            <p className="text-sm text-muted-foreground">
              Contributing {weightContribution}% to confidence score
            </p>
          </div>
        </div>
        <span className="text-muted-foreground">
          {isOpen ? '−' : '+'}
        </span>
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <div className="p-4 pt-0 space-y-4">
          {displaySources.map((source) => (
            <div key={source.id} className="border border-border rounded-lg p-4 hover:bg-accent/30 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="flex-1">{source.title}</h4>
                <Badge variant="secondary" className="text-xs whitespace-nowrap">
                  {source.credibilityScore}% credible
                </Badge>
              </div>
              
              <div className="text-sm text-muted-foreground mb-2">
                {source.domain} {source.publishDate && `• ${source.publishDate}`}
              </div>
              
              {source.keyFinding && (
                <p className="text-sm mb-3 bg-accent/50 p-3 rounded border-l-2 border-primary">
                  Key Finding: "{source.keyFinding}"
                </p>
              )}
              
              {source.excerpt && !source.keyFinding && (
                <p className="text-sm text-muted-foreground mb-3 italic">
                  {source.excerpt}
                </p>
              )}

              {/* Social media specific */}
              {source.type === 'social' && source.platform && (
                <div className="flex items-center gap-3 mb-3">
                  {source.thumbnail && (
                    <img 
                      src={source.thumbnail} 
                      alt={source.title}
                      className="w-20 h-14 object-cover rounded"
                    />
                  )}
                  <div className="text-xs">
                    <div className="flex items-center gap-1 mb-1">
                      <Play className="h-3 w-3" />
                      <span className="capitalize">{source.platform}</span>
                      {source.isVerified && <span className="text-blue-500">✓</span>}
                    </div>
                    {source.creatorName && (
                      <div className="text-muted-foreground">
                        {source.creatorName}
                      </div>
                    )}
                    {source.viewCount && (
                      <div className="text-muted-foreground">
                        👁️ {source.viewCount.toLocaleString()} views
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Source
                  </a>
                </Button>
                <Button variant="ghost" size="sm">
                  Cite This
                </Button>
              </div>
            </div>
          ))}
          
          {tierSources.length > displayLimit && !showAll && (
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setShowAll(true)}
            >
              + Show {tierSources.length - displayLimit} more {tierName.toLowerCase()} sources
            </Button>
          )}
          
          {showAll && tierSources.length > displayLimit && (
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setShowAll(false)}
            >
              Show less
            </Button>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}