// Storage utility for static in-memory data
// Default static data for the application
const defaultData = {
  profile: {
    name: "Jason Mwamba",
    role: "Full-Stack Developer | Graphic Designer",
    description: "Passionate full-stack developer with expertise in modern web technologies. I create beautiful, functional websites and web applications. Also skilled in graphic design, turning ideas into visually compelling digital experiences.",
    email: "mwambajason2@gmail.com",
    phone: "+260 969 591 009",
    profileImage: "/images/profile.jpg",
    profile_image: "/images/profile.jpg",
    aboutImage: "/images/profile.jpg",
    about_image: "/images/profile.jpg",
  },
  services: [
    {
      id: "1",
      icon: "Code",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies"
    },
    {
      id: "2",
      icon: "Palette",
      title: "Graphic Design",
      description: "Professional graphic design services for branding and marketing"
    },
    {
      id: "3",
      icon: "Palette",
      title: "UI/UX Design",
      description: "Intuitive, user-centred interface design with a focus on clean aesthetics and great user experience"
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Business Analytics Dashboard",
      description: "A high-performance dashboard featuring real-time data visualization, custom reporting, and automated insights for enterprise businesses.",
      image: "/images/portfolio/project_dashboard.png",
      tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
      link: "#"
    },
    {
      id: "proj2",
      title: "Luxury E-commerce Platform",
      description: "A premium shopping experience for high-end products, featuring a custom checkout flow, inventory management, and personalized recommendations.",
      image: "/images/portfolio/project_ecommerce.png",
      tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
      link: "#"
    },
    {
      id: "proj3",
      title: "Creative SaaS Landing Page",
      description: "A modern, conversion-focused landing page with glassmorphism effects, Lottie animations, and a responsive glass-style navigation.",
      image: "/images/laptops/laptop_generic.jfif",
      tags: ["Vite", "Framer Motion", "Three.js"],
      link: "#"
    }
  ],
  graphicDesigns: [
    {
      id: "gd1",
      title: "Summer Music Festival Poster",
      image: "/images/designs/design1.jpg"
    },
    {
      id: "gd2",
      title: "Corporate Branding Identity",
      image: "/images/designs/design2.jpg"
    },
    {
      id: "gd3",
      title: "Modern Event Invitation",
      image: "/images/designs/design3.jpg"
    },
    {
      id: "gd4",
      title: "Social Media Marketing Kit",
      image: "/images/designs/design4.jpg"
    },
    {
      id: "gd5",
      title: "Product Launch Flyer",
      image: "/images/designs/design5.jpg"
    },
    {
      id: "gd6",
      title: "Luxury Watch Branding",
      image: "/images/designs/design6.jpg"
    }
  ]
};

// Initialize current data
let currentData = { ...defaultData } as any;
let adminAuthenticated = false;

export interface Profile {
  id?: string;
  name: string;
  role: string;
  description: string;
  email: string;
  phone: string;
  profileImage?: string; // mapped to profile_image
  profile_image?: string;
  aboutImage?: string;   // mapped to about_image
  about_image?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface GraphicDesign {
  id: string;
  title: string;
  image: string;
}



export const storage = {
  async getProfile(): Promise<Profile | null> {
    return currentData.profile;
  },

  async saveProfile(profile: Profile): Promise<Profile> {
    const mapped = {
      ...profile,
      profile_image: profile.profileImage || profile.profile_image,
      about_image: profile.aboutImage || profile.about_image
    };
    currentData.profile = mapped;
    return mapped as Profile;
  },

  async getServices(): Promise<Service[]> {
    return currentData.services;
  },

  async saveServices(services: Service[]): Promise<void> {
    currentData.services = services;
  },

  async getProjects(): Promise<Project[]> {
    return currentData.projects;
  },

  async saveProjects(projects: Project[]): Promise<void> {
    currentData.projects = projects;
  },

  async getGraphicDesigns(): Promise<GraphicDesign[]> {
    return currentData.graphicDesigns;
  },

  async saveGraphicDesigns(designs: GraphicDesign[]): Promise<void> {
    currentData.graphicDesigns = designs;
  },



  async syncToBackend(): Promise<void> {
    // No-op in static mode
  },

  isAuthenticated(): boolean {
    return adminAuthenticated;
  },

  login(password: string): boolean {
    if (password === 'admin123') {
      adminAuthenticated = true;
      return true;
    }
    return false;
  },

  logout(): void {
    adminAuthenticated = false;
  }
};