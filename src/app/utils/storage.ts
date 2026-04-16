// Storage utility for static in-memory data
// Default static data for the application
const defaultData = {
  profile: {
    name: "Jason Mwamba",
    role: "Full-Stack Developer | Graphic Designer | Phone Seller",
    description: "Passionate full-stack developer with expertise in modern web technologies. I create beautiful, functional websites and applications. Also skilled in graphic design and phone sales.",
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
      icon: "Smartphone",
      title: "Phone Sales",
      description: "Quality phones and accessories at competitive prices"
    }
  ],
  projects: [],
  graphicDesigns: [],
  phones: [
    {
      id: "p1",
      name: "iPhone 17 Pro",
      brand: "Apple",
      category: "iPhone",
      price: "K15,500",
      image: "/images/phones/iphone17pro.jfif",
      specs: ["6.3\" Super Retina XDR ProMotion", "48MP Main + 48MP Ultra-Wide + 12MP 5x Telephoto", "A19 Pro Chip", "256GB Storage", "Titanium Frame", "USB-C with USB 3"]
    },
    {
      id: "p2",
      name: "iPhone 16 Plus",
      brand: "Apple",
      category: "iPhone",
      price: "K11,200",
      image: "/images/phones/iphone16plus.jfif",
      specs: ["6.7\" Super Retina XDR", "48MP Fusion + 12MP Ultra-Wide Camera", "A18 Chip", "128GB Storage", "Camera Control Button", "USB-C Connector"]
    },
    {
      id: "p3",
      name: "iPhone 16",
      brand: "Apple",
      category: "iPhone",
      price: "K9,500",
      image: "/images/phones/iphone16.jfif",
      specs: ["6.1\" Super Retina XDR", "48MP Fusion + 12MP Ultra-Wide Camera", "A18 Chip", "128GB Storage", "Camera Control Button", "Action Button"]
    },
    {
      id: "p4",
      name: "iPhone 15",
      brand: "Apple",
      category: "iPhone",
      price: "K8,000",
      image: "/images/phones/iphone15.jfif",
      specs: ["6.1\" Super Retina XDR", "48MP Main + 12MP Ultra-Wide Camera", "A16 Bionic Chip", "128GB Storage", "Dynamic Island", "USB-C Connector"]
    },
    {
      id: "p5",
      name: "iPhone 14",
      brand: "Apple",
      category: "iPhone",
      price: "K6,800",
      image: "/images/phones/iphone14.jfif",
      specs: ["6.1\" Super Retina XDR", "12MP Dual Camera System", "A15 Bionic Chip", "128GB Storage", "Crash Detection", "Emergency SOS via Satellite"]
    },
    {
      id: "p6",
      name: "iPhone 13",
      brand: "Apple",
      category: "iPhone",
      price: "K5,500",
      image: "/images/phones/iphone13.jfif",
      specs: ["6.1\" Super Retina XDR", "12MP Dual Camera System", "A15 Bionic Chip", "128GB Storage", "5G Capable", "Ceramic Shield Front"]
    },
    {
      id: "p7",
      name: "iPhone XR",
      brand: "Apple",
      category: "iPhone",
      price: "K3,200",
      image: "/images/phones/iphoneXR.jfif",
      specs: ["6.1\" Liquid Retina HD", "12MP Single Camera", "A12 Bionic Chip", "64GB Storage", "Face ID", "IP67 Water Resistant"]
    },
    {
      id: "p8",
      name: "Samsung Galaxy S25 Ultra",
      brand: "Samsung",
      category: "Android",
      price: "K19,500",
      image: "/images/phones/s25ultra.jfif",
      specs: ["6.9\" QHD+ Dynamic AMOLED 2X", "200MP Main + 50MP + 10MP + 10MP Cameras", "Snapdragon 8 Elite", "256GB Storage", "Built-in S Pen", "5000mAh Battery"]
    },
    {
      id: "p9",
      name: "Samsung Galaxy S25",
      brand: "Samsung",
      category: "Android",
      price: "K12,000",
      image: "/images/phones/s25.jfif",
      specs: ["6.2\" FHD+ Dynamic AMOLED 2X", "50MP Main + 12MP + 10MP Camera", "Snapdragon 8 Elite", "128GB Storage", "Galaxy AI Features", "4000mAh Battery"]
    },
    {
      id: "p10",
      name: "Samsung Galaxy S24+ Plus",
      brand: "Samsung",
      category: "Android",
      price: "K14,500",
      image: "/images/phones/s24plus.jfif",
      specs: ["6.7\" QHD+ Dynamic AMOLED 2X", "50MP Main + 12MP + 10MP Camera", "Snapdragon 8 Gen 3", "256GB Storage", "Galaxy AI Features", "4900mAh Battery"]
    },
    {
      id: "p11",
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      category: "Android",
      price: "K17,500",
      image: "/images/phones/s24ultra.jfif",
      specs: ["6.8\" QHD+ Dynamic AMOLED 2X", "200MP Main + 50MP + 12MP + 10MP Cameras", "Snapdragon 8 Gen 3", "256GB Storage", "Built-in S Pen", "5000mAh Battery"]
    },
    {
      id: "p12",
      name: "Samsung Galaxy S23 Ultra",
      brand: "Samsung",
      category: "Android",
      price: "K13,000",
      image: "/images/phones/s23ultra.jfif",
      specs: ["6.8\" QHD+ Dynamic AMOLED 2X", "200MP Main + 12MP + 10MP + 10MP Cameras", "Snapdragon 8 Gen 2", "256GB Storage", "Built-in S Pen", "5000mAh Battery"]
    },
    {
      id: "p13",
      name: "Samsung Galaxy S23",
      brand: "Samsung",
      category: "Android",
      price: "K9,800",
      image: "/images/phones/s23.jfif",
      specs: ["6.1\" FHD+ Dynamic AMOLED 2X", "50MP Main + 12MP + 10MP Camera", "Snapdragon 8 Gen 2", "128GB Storage", "Compact Flagship", "3900mAh Battery"]
    },
    {
      id: "p14",
      name: "Samsung Galaxy S22 Ultra",
      brand: "Samsung",
      category: "Android",
      price: "K10,500",
      image: "/images/phones/s22ultra.jfif",
      specs: ["6.8\" QHD+ Dynamic AMOLED 2X", "108MP Main + 12MP + 10MP + 10MP Cameras", "Snapdragon 8 Gen 1", "128GB Storage", "Built-in S Pen", "5000mAh Battery"]
    },
    {
      id: "p15",
      name: "Samsung Galaxy S22",
      brand: "Samsung",
      category: "Android",
      price: "K8,500",
      image: "/images/phones/s22.jfif",
      specs: ["6.1\" FHD+ Dynamic AMOLED 2X", "50MP Main + 12MP + 10MP Camera", "Snapdragon 8 Gen 1", "128GB Storage", "Compact Design", "3700mAh Battery"]
    },
    {
      id: "p16",
      name: "Samsung Galaxy S21 Ultra",
      brand: "Samsung",
      category: "Android",
      price: "K9,000",
      image: "/images/phones/s21ultra.jfif",
      specs: ["6.8\" QHD+ Dynamic AMOLED 2X", "108MP Main + 12MP + 10MP + 10MP Cameras", "Exynos 2100", "128GB Storage", "S Pen Support", "5000mAh Battery"]
    },
    {
      id: "p17",
      name: "Samsung Galaxy S21+",
      brand: "Samsung",
      category: "Android",
      price: "K7,500",
      image: "/images/phones/s21plus.jfif",
      specs: ["6.7\" FHD+ Dynamic AMOLED 2X", "64MP Main + 12MP + 64MP Camera", "Exynos 2100", "128GB Storage", "800mAh Battery", "IP68 Water Resistant"]
    },
    {
      id: "p18",
      name: "Samsung Galaxy S20 Ultra",
      brand: "Samsung",
      category: "Android",
      price: "K7,000",
      image: "/images/phones/s20ultra.jfif",
      specs: ["6.9\" QHD+ Dynamic AMOLED", "108MP Main + 48MP + 12MP Camera", "Snapdragon 865", "128GB Storage", "100x Space Zoom", "5000mAh Battery"]
    },
    {
      id: "p19",
      name: "Samsung Galaxy S20",
      brand: "Samsung",
      category: "Android",
      price: "K5,500",
      image: "/images/phones/s20.jfif",
      specs: ["6.2\" FHD+ Dynamic AMOLED", "64MP Triple Camera", "Snapdragon 865", "128GB Storage", "5G Ready", "4000mAh Battery"]
    },
    {
      id: "p20",
      name: "Samsung Galaxy S26",
      brand: "Samsung",
      category: "Android",
      price: "K22,000",
      image: "/images/phones/s26.jfif",
      specs: ["6.2\" FHD+ Dynamic AMOLED 2X", "50MP Main + 12MP + 10MP Camera", "Snapdragon 8 Elite Gen 2", "128GB Storage", "Galaxy AI Next-Gen", "4000mAh Battery"]
    },
    {
      id: "p21",
      name: "Samsung Galaxy S10",
      brand: "Samsung",
      category: "Android",
      price: "K3,800",
      image: "/images/phones/s10.jfif",
      specs: ["6.1\" QHD+ Dynamic AMOLED", "12MP Triple Camera", "Snapdragon 855", "128GB Storage", "In-display Fingerprint", "3400mAh Battery"]
    },
    {
      id: "p22",
      name: "iPhone 12",
      brand: "Apple",
      category: "iPhone",
      price: "K4,500",
      image: "/images/phones/iphone12.jfif",
      specs: ["6.1\" Super Retina XDR", "12MP Dual Camera System", "A14 Bionic Chip", "64GB Storage", "5G Capable", "MagSafe Support"]
    },
    {
      id: "p23",
      name: "iPhone X",
      brand: "Apple",
      category: "iPhone",
      price: "K2,500",
      image: "/images/phones/iphoneX.jfif",
      specs: ["5.8\" Super Retina OLED", "12MP Dual Camera System", "A11 Bionic Chip", "64GB Storage", "Face ID", "Wireless Charging"]
    },
    {
      id: "p24",
      name: "Huawei P30 Pro",
      brand: "Huawei",
      category: "Huawei",
      price: "K5,800",
      image: "/images/phones/huawei_p30pro.jfif",
      specs: ["6.47\" OLED Display", "40MP Quad Leica Camera", "Kirin 980", "256GB Storage", "50x Digital Zoom", "IP68 Resistant"]
    },
    {
      id: "p25",
      name: "Huawei Mate 20 Pro",
      brand: "Huawei",
      category: "Huawei",
      price: "K4,200",
      image: "/images/phones/huawei_mate20pro.jfif",
      specs: ["6.39\" OLED Display", "40MP Triple Leica Camera", "Kirin 980", "128GB Storage", "In-screen Fingerprint", "40W SuperCharge"]
    },
    {
      id: "p26",
      name: "Huawei Y9s",
      brand: "Huawei",
      category: "Huawei",
      price: "K3,500",
      image: "/images/phones/huawei_y9s.jfif",
      specs: ["6.59\" Ultra FullView Display", "48MP Triple AI Camera", "Kirin 710F", "128GB Storage", "Pop-up Selfie Camera", "Side Fingerprint"]
    },
    {
      id: "p27",
      name: "Huawei P30 Lite",
      brand: "Huawei",
      category: "Huawei",
      price: "K2,800",
      image: "/images/phones/huawei_p30lite.jfif",
      specs: ["6.15\" FHD Display", "24MP Triple AI Camera", "Kirin 710", "128GB Storage", "3340mAh Battery", "Fast charging"]
    }
  ],
  laptops: [
    {
      id: "l1",
      name: "HP EliteBook 840",
      brand: "HP",
      price: "K8,500",
      image: "/images/laptops/hp_elitebook.jfif",
      specs: ["Intel Core i5-13th Gen", "16GB RAM", "256GB SSD", "14\" FHD Display", "Windows 11 Pro", "Premium Business Design"]
    },
    {
      id: "l2",
      name: "Dell Latitude 3420",
      brand: "Dell",
      price: "K7,800",
      image: "/images/laptops/dell_latitude.jfif",
      specs: ["Intel Core i5-11th Gen", "16GB RAM", "512GB SSD", "14\" Display", "Windows 11 Home", "Durable Business Build"]
    },
    {
      id: "l3",
      name: "Lenovo ThinkPad E15",
      brand: "Lenovo",
      price: "K9,500",
      image: "/images/laptops/lenovo_thinkpad.jfif",
      specs: ["Intel Core i7-11th Gen", "16GB RAM", "512GB SSD", "15.6\" FHD Display", "TrackPoint", "Military-grade Durability"]
    },
    {
      id: "l4",
      name: "MacBook Pro 13\"",
      brand: "Apple",
      price: "K19,500",
      image: "/images/laptops/macbook_pro.jfif",
      specs: ["Apple M2 Chip", "8GB Unified Memory", "256GB SSD", "13.3\" Retina Display", "macOS Sonoma", "20hr Battery Life"]
    },
    {
      id: "l5",
      name: "Asus VivoBook 15",
      brand: "Asus",
      price: "K5,900",
      image: "/images/laptops/laptop_generic.jfif",
      specs: ["Intel Core i3-12th Gen", "8GB RAM", "256GB SSD", "15.6\" FHD Display", "Windows 11 Home", "Fingerprint Sensor"]
    },
    {
      id: "l6",
      name: "Acer Aspire 5",
      brand: "Acer",
      price: "K6,200",
      image: "/images/laptops/laptop_generic.jfif",
      specs: ["AMD Ryzen 5 7520U", "8GB RAM", "512GB SSD", "15.6\" FHD IPS", "Windows 11 Home", "Wi-Fi 6 Ready"]
    }
  ],
  accessories: [
    {
      id: "a1",
      name: "iPhone Fast Charger 20W",
      category: "Phone Accessory",
      price: "K450",
      image: "/images/accessories/iphone_charger.jfif",
      description: "Fast charging power adapter for iPhone and Android devices."
    },
    {
      id: "a2",
      name: "USB-C Power Kepala",
      category: "Phone Accessory",
      price: "K350",
      image: "/images/accessories/usb_c_charger.jfif",
      description: "Original equipment manufacturer USB-C power adapter."
    },
    {
      id: "a3",
      name: "Apple AirPods Pro 2",
      category: "Phone Accessory",
      price: "K2,850",
      image: "/images/accessories/airpods_pro.jfif",
      description: "Ultimate hearing and audio experience with noise cancellation."
    },
    {
      id: "a4",
      name: "Azure Blue Phone Case",
      category: "Phone Accessory",
      price: "K200",
      image: "/images/accessories/blue_case.jfif",
      description: "Minimal block color design for iPhone and Samsung."
    },
    {
      id: "a5",
      name: "Samsung Silicone Case",
      category: "Phone Accessory",
      price: "K250",
      image: "/images/accessories/samsung_case.jfif",
      description: "Premium silicone case for Galaxy devices, light blue."
    },
    {
      id: "a6",
      name: "Premium Laptop Bag",
      category: "Laptop Accessory",
      price: "K550",
      image: "/images/laptops/laptop_generic.jfif",
      description: "Protective carrying bag for laptops up to 16 inches."
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

export interface Phone {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  image: string;
  specs: string[];
}

export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  specs: string[];
}

export interface Accessory {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
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

  async getPhones(): Promise<Phone[]> {
    return currentData.phones;
  },

  async savePhones(phones: Phone[]): Promise<void> {
    currentData.phones = phones;
  },

  async getLaptops(): Promise<Laptop[]> {
    return currentData.laptops;
  },

  async saveLaptops(laptops: Laptop[]): Promise<void> {
    currentData.laptops = laptops;
  },

  async getAccessories(): Promise<Accessory[]> {
    return currentData.accessories;
  },

  async saveAccessories(accessories: Accessory[]): Promise<void> {
    currentData.accessories = accessories;
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