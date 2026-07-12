export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  type: string;
  salary: string;
  image: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    category: "Frontend",
    type: "Full Time",
    salary: "$3,500 / month",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    description:
      "Build modern and responsive user interfaces using React and Next.js.",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "New York",
    category: "Backend",
    type: "Full Time",
    salary: "$4,500 / month",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    description:
      "Develop scalable REST APIs with Node.js, Express, and MongoDB.",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Netflix",
    location: "California",
    category: "Full Stack",
    type: "Remote",
    salary: "$5,200 / month",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    description:
      "Work across frontend and backend using the MERN Stack.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Adobe",
    location: "Remote",
    category: "Design",
    type: "Full Time",
    salary: "$3,800 / month",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    description:
      "Design clean, modern, and user-friendly web and mobile interfaces.",
  },
  {
    id: 5,
    title: "React Developer",
    company: "Meta",
    location: "London",
    category: "Frontend",
    type: "Remote",
    salary: "$4,000 / month",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    description:
      "Develop high-performance React applications with reusable components.",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Amazon",
    location: "Seattle",
    category: "DevOps",
    type: "Full Time",
    salary: "$6,000 / month",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800",
    description:
      "Manage CI/CD pipelines, cloud infrastructure, and deployment processes.",
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "Spotify",
    location: "Stockholm",
    category: "Mobile",
    type: "Remote",
    salary: "$4,300 / month",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    description:
      "Build cross-platform mobile applications using React Native.",
  },
  {
    id: 8,
    title: "Data Analyst",
    company: "IBM",
    location: "Toronto",
    category: "Data",
    type: "Hybrid",
    salary: "$4,700 / month",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description:
      "Analyze business data and create insightful dashboards and reports.",
  },

{
  id: 9,
  title: "Cloud Engineer",
  company: "Oracle",
  location: "Texas",
  category: "Cloud",
  type: "Full Time",
  salary: "$5,800 / month",
  image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
  description: "Build and maintain cloud infrastructure using AWS and Azure services.",
},
{
  id: 10,
  title: "QA Engineer",
  company: "Intel",
  location: "California",
  category: "Testing",
  type: "Full Time",
  salary: "$3,900 / month",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  description: "Perform software testing and ensure product quality before deployment.",
},
{
  id: 11,
  title: "Cyber Security Analyst",
  company: "Cisco",
  location: "Remote",
  category: "Security",
  type: "Remote",
  salary: "$5,200 / month",
  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  description: "Protect systems from cyber threats and monitor security incidents.",
},
{
  id: 12,
  title: "Machine Learning Engineer",
  company: "OpenAI",
  location: "San Francisco",
  category: "AI",
  type: "Full Time",
  salary: "$7,000 / month",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
  description: "Develop AI models and machine learning solutions for real-world applications.",
},
{
  id: 13,
  title: "WordPress Developer",
  company: "Envato",
  location: "Australia",
  category: "Frontend",
  type: "Remote",
  salary: "$3,200 / month",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  description: "Build and customize WordPress websites with modern UI and plugins.",
},
{
  id: 14,
  title: "PHP Developer",
  company: "Laravel Ltd.",
  location: "Singapore",
  category: "Backend",
  type: "Full Time",
  salary: "$4,100 / month",
  image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800",
  description: "Develop secure web applications using PHP and Laravel framework.",
},
{
  id: 15,
  title: "Flutter Developer",
  company: "Google",
  location: "Remote",
  category: "Mobile",
  type: "Remote",
  salary: "$4,800 / month",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  description: "Create beautiful cross-platform mobile applications using Flutter.",
},
{
  id: 16,
  title: "Business Analyst",
  company: "Deloitte",
  location: "London",
  category: "Business",
  type: "Hybrid",
  salary: "$4,600 / month",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  description: "Analyze business processes and provide data-driven recommendations.",
},
{
  id: 17,
  title: "Data Scientist",
  company: "Tesla",
  location: "Austin",
  category: "Data",
  type: "Full Time",
  salary: "$6,300 / month",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  description: "Extract valuable insights from data using machine learning and analytics.",
},
{
  id: 18,
  title: "Software Engineer",
  company: "Apple",
  location: "Cupertino",
  category: "Full Stack",
  type: "Full Time",
  salary: "$6,800 / month",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  description: "Develop scalable software solutions and collaborate with cross-functional teams.",
},



];