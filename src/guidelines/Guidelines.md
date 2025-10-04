# GenuVerity Frontend Guidelines

## Architecture Overview

GenuVerity is a Constitutional AI-powered fact-checking platform built with React, TypeScript, and Tailwind CSS. The application uses a modular, component-based architecture designed to scale from simple to comprehensive fact-check results.

## Project Structure

```
/
├── pages/                    # Route pages
│   ├── Home.tsx             # Landing page with search
│   ├── Results.tsx          # Fact-check results page
│   ├── HowItWorks.tsx       # Informational page
│   ├── Mission.tsx          # About/mission page
│   ├── EarlyAccess.tsx      # Signup form
│   └── NotFound.tsx         # 404 page
├── components/
│   ├── layouts/             # Layout components
│   │   └── ResultsLayout.tsx # Results page layout with sidebar
│   ├── results/             # Result section components
│   │   ├── VerdictHeader.tsx
│   │   ├── ExecutiveSummary.tsx
│   │   ├── QualityIndicators.tsx
│   │   ├── SourceBreakdown.tsx
│   │   ├── SourceList.tsx
│   │   ├── AIModelConsensus.tsx
│   │   ├── EvidenceTimeline.tsx
│   │   ├── ConstitutionalAIReport.tsx
│   │   ├── LimitationsSection.tsx
│   │   ├── DetailedAnalysisTabs.tsx
│   │   └── ActionButtons.tsx
│   └── ui/                  # Shadcn UI components
├── types/
│   └── index.ts             # TypeScript interfaces
├── data/
│   └── mockResults.ts       # Mock data for testing
└── styles/
    └── globals.css          # Global styles and tokens

## Routing

- `/` - Landing page with search interface
- `/verify/:id` - Results page for a specific fact-check
- `/how-it-works` - Information about methodology
- `/mission` - Mission statement and values
- `/early-access` - Early access signup form
- `*` - 404 not found page

## Key Principles

### 1. Modularity
Every result section component:
- Returns `null` if data doesn't exist
- Accepts data as props
- Is self-contained and reusable
- Handles its own loading/skeleton states

### 2. Responsive Design
- **Desktop**: 3-column layout (sidebar, content, actions)
- **Tablet**: 2-column layout (content, collapsible sidebar)
- **Mobile**: Single column with drawer navigation

### 3. Progressive Disclosure
- Show essential information first (verdict, summary)
- Use collapsible sections for detailed content
- Implement "show more" patterns for long lists
- Tab-based navigation for deep content

### 4. Type Safety
All data structures are typed in `/types/index.ts`:
- `FactCheckResult` - Main result interface
- `Source` - Individual source data
- `AIModelAnalysis` - AI model verdict
- `QualityMetrics` - Quality indicators
- `TimelineEvent` - Historical events
- And more...

## Component Guidelines

### Result Components
Each component in `/components/results/` should:
1. Import types from `/types`
2. Define a clear props interface
3. Return null if data is missing
4. Use consistent styling with Tailwind
5. Follow accessibility best practices

### Layout Components
- `ResultsLayout` provides the sidebar/drawer structure
- Auto-generates table of contents from available sections
- Handles responsive breakpoints
- Provides sticky navigation

## Data Flow

1. User enters query on Home page
2. Click "Find the Truth" → Navigate to `/verify/:id`
3. Results page fetches data (currently mock)
4. Data populates modular components
5. Only components with available data render

## Styling Conventions

- Use Tailwind utility classes
- Follow the color system in `globals.css`
- Verdict colors:
  - TRUE: Green (`#10b981`)
  - FALSE: Red (`#ef4444`)
  - MIXED: Orange (`#f59e0b`)
  - UNVERIFIABLE: Gray (`#6b7280`)

## Future Enhancements

- [ ] Real API integration
- [ ] User authentication
- [ ] Saved searches/library
- [ ] PDF export
- [ ] Social sharing with metadata
- [ ] Advanced filtering and sorting
- [ ] Community discussion features
- [ ] API access for developers

## Development Notes

- All navigation uses React Router Link components
- Toast notifications via Sonner
- Charts via Recharts
- UI components from Shadcn
- Icons from Lucide React
