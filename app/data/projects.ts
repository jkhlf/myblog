export interface Project {
  id: string
  slug: string
  title: string
  description: string
  year: number
  image: string
  secondImage?: string
  tags: string[]
  color?: string
  link?: string
  linkText?: string
  duration: string
  contribution: string[]
  overview: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: "002",
    slug: "expense-gov",
    title: "Expense Gov",
    year: 2024,
    description: "A data visualization tool that transforms complex government spending data into accessible insights for citizens.",
    image: "/expenses.png",
    link: "https://expenses-gov.vercel.app/",
    linkText: "Live Demo",
    tags: ["Next.js", "Shadcn", "Data Visualization"],
    duration: "6 weeks",
    contribution: ["Frontend Development", "UI/UX Design", "Data Visualization"],
    overview: "Expense Gov makes government spending data accessible through intuitive visualizations. Built during my web development studies, this project focuses on transforming complex financial data into clear, actionable insights.",
    highlights: [
      "Developed an intuitive interface for exploring government spending data using Next.js and Shadcn",
      "Implemented interactive charts and graphs to visualize expense patterns across different years",
      "Integrated real-time data from the Codante API to ensure accuracy and relevance"
    ]
  },
  {
    id: "001",
    slug: "dolly-rebrand",
    title: "Dolly Rebrand",
    year: 2023,
    description: "A conceptual rebranding project exploring modern design solutions for a classic Brazilian soda brand.",
    image: "/Dolly.png",
    tags: ["Design", "Figma", "Branding"],
    color: "#0a66c2",
    link: "https://www.figma.com/design/mWJEn4i4mN6PzD3CTZ4MIo/Dolly-Rebranding",
    linkText: "View Design",
    duration: "8 weeks",
    contribution: ["Brand Design", "UI Design", "Visual Identity"],
    overview: "As part of my design coursework at Fatec Rubens Lara, I explored the challenge of modernizing a beloved Brazilian brand while preserving its core identity and cultural significance.",
    highlights: [
      "Created a modernized visual identity system that respects the brand's heritage",
      "Designed new packaging concepts focusing on premium aesthetics and shelf appeal",
      "Developed a cohesive digital design system in Figma for consistent brand expression"
    ]
  }
]