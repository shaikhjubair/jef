export interface NewsArticle {
  id: string
  title: string
  date: string
  dateLabel: string
  content: string
  coverImage?: string
  published: boolean
}

export const news: NewsArticle[] = [
  {
    id: 'econthon-2026-phase1-results',
    title: 'Econthon 2026: Phase 1 Registration Results & Selected Teams',
    date: '2026-08-05T12:00:00Z',
    dateLabel: 'August 5, 2026',
    content: `We are thrilled to announce that the initial screening for Econthon 2026 is officially complete! 

We received an overwhelming number of applications from brilliant minds across various universities. After careful review of all submissions, our panel has selected the top teams to proceed to the 24-hour hackathon. 

A special congratulations to some of our top registering teams, including:
- **Team Alpha**
- **The Keynesians**

Please note that a few applications were unfortunately rejected during this phase due to incomplete payment verification or missing documentation. If your team was selected, please check your emails for the next steps regarding venue details and preparation materials.

We look forward to an incredible competition full of innovative policy solutions and data-driven insights!`,
    coverImage: '/images/event-summit.png',
    published: true,
  }
]
