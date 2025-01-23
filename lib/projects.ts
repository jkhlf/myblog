export interface Project {
  id: string
  slug: string
  title: string
  description: string
  year: number
  image: string
  tags: string[]
  color?: string
  link?: string
  linkText?: string
  content?: {
    overview: string
    challenge: string
    solution: string
    impact: string
  }
  context?: {
    title: string
    description: string
  }
}

export const projects: Project[] = [
  {
    id: "002",
    slug: "expense-gov",
    title: "Expense Gov",
    year: 2024,
    description: "A web application that visualizes government spending data to promote transparency and accountability.",
    image: "/expenses.png",
    link: 'https://expenses-gov.vercel.app/',
    linkText: "Live",
    tags: ['Next.js','Shadcn','Data Visualization'],
    content: {
      overview: "Expense Gov is a simple web application designed to provide clear insights into the expenses of government senators. You can easily select a specific year and view their expenditures presented in beautiful, easy-to-understand charts and graphs. This project aims to make government spending data more accessible and engaging for citizens.",
      challenge: "",
      solution: "The application was built using Next.js, a React framework, and Shadcn, a data visualization library. The data is fetched from the Codante API(https://docs.apis.codante.io/gastos-senadores), which provides information on government spending by Years. The user interface was designed to be intuitive and user-friendly, allowing users to explore the data with ease.",
      impact: "Expense Gov empowers citizens to easily explore and understand how their elected officials are spending public funds. By presenting this information visually, it makes complex data more accessible and encourages greater transparency and accountability in government spending. Users can quickly identify spending patterns and gain insights into where taxpayer money is being allocated within a given year."
    },
    context: {
      title: "Visualizing Government Spending: A Data-Driven Transparency Project",
      description: "Expense Gov is a personal project focused on utilizing web development skills to create a tool for civic engagement. By connecting to the Codante API, this project provides a practical way to explore and visualize real government expense data, making it easier for citizens to understand how public funds are being used. It demonstrates the potential of data visualization to promote transparency and inform public discourse."
    }
  },
  {
    id: "001",
    slug: "dolly-rebrand",
    title: "Dolly Rebrand",
    year: 2023,
    description: "A rebranding project for Dolly, a Brazilian soda brand.",
    image: "/Dolly.png",
    tags: ["Design", "Figma", "Branding"],
    color: "#0a66c2",
    link: "https://www.figma.com/design/mWJEn4i4mN6PzD3CTZ4MIo/Dolly-Rebranding?node-id=0-1&t=5gbY7aAw99iUUvwO-1",
    linkText: "Figma",
    content: {
      overview: "",
      challenge: "The main challenge was balancing the need for renewal with Dolly's strong established visual identity. How to modernize the brand to appeal to a young, trend-conscious audience without alienating the loyal customer base that grew up with the brand? How to translate Dolly's fun and irreverent personality into a contemporary visual language?", 
      solution: "The solution involved a complete overhaul of the visual identity, using Figma as the primary tool. New logos were developed, exploring modern typography and a vibrant color palette. Packaging design was rethought to convey a more premium and appealing image. The digital presence was also updated, with a cleaner and more intuitive interface design, aligned with UI/UX best practices.",
      impact: ""
    },
    context: {
      title: "Reimagining a Brazilian Icon: A Case Study in Rebranding",
      description: "Developed as part of a Design class at Fatec Rubens Lara, this project represented a deep dive into the principles of branding and visual identity. Through the analysis of the Dolly brand and the exploration of design trends, the project provided a practical and enriching experience. Although Dolly was not involved in this academic exercise, the project allowed for a deeper understanding of the challenges and opportunities involved in the evolution of an established brand."
    }
  },
]

