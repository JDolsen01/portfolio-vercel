export const projectsData = [
  {
    name: "ecommerce-platform",
    title: "E-commerce Platform",
    shortDescription:
      "A full-stack e-commerce solution with payment processing and inventory management.",
    description:
      "A comprehensive e-commerce platform built from the ground up to provide a seamless shopping experience. This solution includes robust payment processing, real-time inventory management, and a user-friendly admin dashboard. The platform is designed to be scalable and can handle high traffic volumes without compromising performance.",
    image: "/ecom.jpg",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/username/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    timeline: "Jan 2022 - Apr 2022",
    role: "Full Stack Developer",
    client: "RetailCorp Inc.",
    features: [
      "User authentication and profile management",
      "Product search with filters and sorting",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
      "Analytics and reporting tools",
    ],
    challenges:
      "One of the main challenges was implementing a real-time inventory system that could handle concurrent transactions without overselling products. I solved this by implementing a reservation system with MongoDB transactions and a queue-based architecture for processing orders.",
  },
  {
    name: "task-management",
    title: "Task Management App",
    shortDescription:
      "A productivity app with drag-and-drop interface and real-time collaboration.",
    description:
      "A feature-rich task management application designed to boost productivity and streamline workflow. The app includes a drag-and-drop interface for easy task organization, real-time collaboration features, and customizable workflows to adapt to different project management methodologies.",
    image: "/tasks.jpg",
    liveUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/username/taskapp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Socket.io",
      "PostgreSQL",
      "TailwindCSS",
    ],
    timeline: "May 2022 - Aug 2022",
    role: "Frontend Lead",
    client: "ProductivityTech",
    features: [
      "Drag-and-drop task organization",
      "Real-time collaboration with multiple users",
      "Customizable boards, lists, and cards",
      "Task assignment and due dates",
      "File attachments and comments",
      "Activity logs and notifications",
      "Integration with calendar apps",
    ],
    challenges:
      "Implementing real-time collaboration was challenging due to the complex state management required. I used Socket.io for real-time updates and implemented a custom state synchronization algorithm to ensure all users see the same data without conflicts.",
  },
  {
    name: "portfolio-website",
    title: "Portfolio Website",
    shortDescription:
      "A responsive portfolio website with dark mode and animations.",
    description:
      "A modern, responsive portfolio website designed to showcase creative work and professional achievements. The site features a clean, minimalist design with smooth animations, dark mode support, and optimized performance. The content management system allows for easy updates without requiring code changes.",
    image: "/portfolio.jpg",
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/username/portfolio",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js",
      "Contentful",
    ],
    timeline: "Sep 2022 - Oct 2022",
    role: "Frontend Developer & Designer",
    features: [
      "Responsive design for all device sizes",
      "Dark mode with system preference detection",
      "Smooth page transitions and animations",
      "Project showcase with filtering options",
      "Contact form with validation",
      "Blog section with CMS integration",
      "SEO optimization",
    ],
    challenges:
      "Creating smooth animations that work well on both desktop and mobile devices was challenging. I used Framer Motion to implement performant animations and carefully optimized them to ensure they enhance rather than detract from the user experience.",
  },
  {
    name: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription:
      "A weather application that provides real-time forecasts and interactive maps.",
    description:
      "A comprehensive weather dashboard that provides real-time forecasts, historical data, and interactive maps. Users can save their favorite locations, receive weather alerts, and view detailed meteorological information presented in an intuitive interface.",
    image: "/weather.jpg",
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/username/weather",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Mapbox", "Vuex"],
    timeline: "Nov 2022 - Dec 2022",
    role: "Frontend Developer",
    features: [
      "Real-time weather data from multiple sources",
      "Interactive maps with weather overlays",
      "7-day forecast with hourly breakdowns",
      "Historical weather data visualization",
      "Location-based weather alerts",
      "Favorite locations with quick access",
      "Responsive design for mobile and desktop",
    ],
    challenges:
      "Integrating data from multiple weather APIs and ensuring consistency was a significant challenge. I implemented a data normalization layer that reconciled differences between APIs and provided a unified interface for the frontend.",
  },
  {
    name: "recipe-finder",
    title: "Recipe Finder",
    shortDescription:
      "A web application that helps users discover recipes based on ingredients they have.",
    description:
      "An innovative recipe discovery platform that helps users find recipes based on ingredients they already have at home. The application includes filtering by dietary restrictions, meal types, and cooking time, making it easy for users to find recipes that match their preferences and constraints.",
    image: "/recipe.jpg",
    liveUrl: "https://example.com/recipes",
    githubUrl: "https://github.com/username/recipes",
    technologies: [
      "React",
      "Firebase",
      "Spoonacular API",
      "Redux",
      "Styled Components",
    ],
    timeline: "Jan 2023 - Mar 2023",
    role: "Full Stack Developer",
    features: [
      "Ingredient-based recipe search",
      "Dietary restriction filters",
      "Meal type and cooking time filters",
      "User accounts with saved recipes",
      "Shopping list generation",
      "Nutritional information display",
      "Recipe rating and reviews",
    ],
    challenges:
      "Creating an efficient search algorithm that could match available ingredients to recipes was complex. I implemented a fuzzy matching system that could handle ingredient substitutions and partial matches to provide the most relevant results.",
  },
  {
    name: "fitness-tracker",
    title: "Fitness Tracker",
    shortDescription:
      "A mobile-first application for tracking workouts, nutrition, and progress.",
    description:
      "A comprehensive fitness tracking application designed with a mobile-first approach. The app allows users to track workouts, nutrition, and progress, set goals, and earn achievements. Custom workout plans and detailed analytics help users stay motivated and make informed decisions about their fitness journey.",
    image: "/fitness.jpg",
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/username/fitness",
    technologies: [
      "React Native",
      "Redux",
      "Express",
      "MongoDB",
      "Chart.js",
      "Firebase",
    ],
    timeline: "Apr 2023 - Jul 2023",
    role: "Mobile Developer",
    features: [
      "Workout tracking with exercise library",
      "Nutrition logging and calorie tracking",
      "Progress photos and measurements",
      "Custom workout plan generation",
      "Achievement badges and challenges",
      "Social sharing and community features",
      "Detailed analytics and progress reports",
    ],
    challenges:
      "Designing an intuitive user interface for logging workouts quickly during exercise sessions was challenging. I conducted extensive user testing and iteratively refined the UI to minimize the number of taps required and make the process as seamless as possible.",
  },
];
