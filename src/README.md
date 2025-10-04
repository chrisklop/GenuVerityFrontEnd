# GenuVerity - Constitutional AI Fact-Checking Platform

A modern, AI-powered fact-checking platform that provides transparent, evidence-based analysis of claims using Constitutional AI principles and a sophisticated source precedence system.

## 🌟 Features

### Core Functionality
- **Multi-page Application** with React Router
- **Modular Results Display** - Sections render only when data is available
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Source Tiering System** - Prioritizes evidence from most reliable sources
- **AI Model Consensus** - Multiple AI models analyze claims independently
- **Constitutional AI Safety** - Every analysis evaluated for truthfulness, helpfulness, and harmlessness

### Pages
1. **Home** - Clean search interface with Google-inspired layout
2. **Results** - Comprehensive fact-check results with modular sections
3. **How It Works** - Methodology and process explanation
4. **Our Mission** - Company values and commitments
5. **Early Access** - Sign-up form for beta users

## 🎨 Design System

### Layout
- **Desktop**: 3-column layout (sidebar TOC, main content, quick actions)
- **Mobile**: Single column with drawer navigation
- Clean, minimal aesthetic inspired by Google's search interface

### Verdict Colors
- 🟢 **TRUE**: Green (#10b981)
- 🔴 **FALSE**: Red (#ef4444)
- 🟠 **MIXED**: Orange (#f59e0b)
- ⚪ **UNVERIFIABLE**: Gray (#6b7280)

## 📊 Result Sections (Modular)

The results page displays sections dynamically based on available data:

1. **Verdict Header** - Claim, verdict, confidence score
2. **Executive Summary** - TL;DR and bottom line
3. **Quality Indicators** - Source agreement, evidence quality, coverage, reliability
4. **Source Distribution** - Visual breakdown by tier with pie chart
5. **Sources by Tier** - Expandable lists of sources (auto-expand top 2 tiers)
6. **AI Model Consensus** - Individual model verdicts and reasoning
7. **Evidence Timeline** - Key historical events and studies
8. **Constitutional AI Report** - Safety assessment scores
9. **Detailed Analysis Tabs** - Full analysis, source list, related claims
10. **Limitations** - Transparency about methodology and scope
11. **Action Buttons** - Share, cite, download, save, report, discuss

## 🔧 Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: Sonner

## 📁 Project Structure

```
/
├── App.tsx                  # Main app with routing
├── pages/                   # Page components
│   ├── Home.tsx
│   ├── Results.tsx
│   ├── HowItWorks.tsx
│   ├── Mission.tsx
│   ├── EarlyAccess.tsx
│   └── NotFound.tsx
├── components/
│   ├── layouts/
│   │   └── ResultsLayout.tsx
│   ├── results/            # Modular result sections
│   └── ui/                 # Shadcn components
├── types/
│   └── index.ts           # TypeScript interfaces
├── data/
│   └── mockResults.ts     # Mock data for development
└── styles/
    └── globals.css        # Global styles & tokens
```

## 🚀 Getting Started

### Using the Application

1. **Search for a Claim**
   - Enter any claim on the home page
   - Click "Find the Truth" or press Enter
   - View comprehensive analysis results

2. **Navigate Results**
   - Desktop: Use left sidebar to jump to sections
   - Mobile: Tap hamburger menu for table of contents
   - All sections are collapsible/expandable

3. **Explore Pages**
   - Learn about our methodology in "How It Works"
   - Read our mission and values in "Our Mission"
   - Sign up for early access via the form

### Development

The app currently uses mock data defined in `/data/mockResults.ts`. Two sample results are available:
- `vaccines-autism-2024` - Comprehensive result with all sections
- `coffee-health-2024` - Simpler result with fewer sections

To add real API integration:
1. Update the fetch logic in `/pages/Results.tsx`
2. Replace mock data with API calls
3. Add loading states and error handling

## 🎯 Key Principles

### Modularity
Every component checks if its data exists before rendering. Missing data sections simply don't appear, allowing the system to gracefully handle varying levels of analysis depth.

### Progressive Disclosure
- Essential info (verdict, summary) shown first
- Detailed content in expandable sections
- "Show more" patterns for long lists
- Tabs for deep technical content

### Transparency
- Full source attribution
- Methodology disclosure
- Clear confidence scores
- Limitations acknowledged

## 📱 Responsive Behavior

- **Desktop (lg+)**: Sidebar navigation always visible
- **Tablet (md-lg)**: Collapsible sidebar
- **Mobile (<md)**: Drawer navigation with hamburger menu
- All components stack gracefully on smaller screens

## 🔮 Future Enhancements

- [ ] Real-time API integration
- [ ] User authentication & profiles
- [ ] Saved searches library
- [ ] PDF export functionality
- [ ] Enhanced social sharing with Open Graph
- [ ] Advanced filtering & search
- [ ] Community discussion forums
- [ ] Developer API access
- [ ] Dark mode toggle

## 📄 License

Copyright © 2024 GenuVerity. All rights reserved.

## 🤝 Contributing

Currently in private beta. For access inquiries, use the Early Access form.

---

Built with ❤️ for truth and transparency
