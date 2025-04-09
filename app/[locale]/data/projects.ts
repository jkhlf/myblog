export interface Project {
  id: string
  slug: string
  title: string
  description: string
  year: number
  role: string
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
    id: "003",
    slug: "anime-tracker",
    title: "Anime Tracker",
    year: 2025,
    role: "Developer",
    description: "A web application that helps users track their favorite anime series and discover new shows.",
    image: "/imgs/tracker.png",
    link: "/",
    linkText: "No Live Demo for now",
    tags: ["React", "TypeScript", "Jikan API"],
    duration: "Still in progress",
    contribution: ["Frontend Development", "UI/UX Design", "API Integration"],
    overview: "Anime Tracker is a personal project that combines my passion for anime with my web development skills. The app allows users to track their favorite series, receive updates on new episodes, and discover new shows based on their preferences.",
    highlights: [
      "Built a responsive web application using React and TypeScript for a seamless user experience",
      "Integrated the Jikan API to fetch anime data and provide real-time updates on new episodes",
      "Designed an intuitive UI with a focus on user-friendly navigation and personalized recommendations"
    ]
  },
  {
    id: "002",
    slug: "expense-gov",
    title: "Expense Gov",
    year: 2024,
    role: "Developer",
    description: "A data visualization tool that transforms complex government spending data into accessible insights for citizens.",
    image: "/imgs/expenses.png",
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
    role: "Ux Designer",
    description: "A conceptual rebranding project exploring modern design solutions for a classic Brazilian soda brand.",
    image: "/imgs/dolly.png",
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