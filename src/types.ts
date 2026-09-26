export interface Doctor {
  id: string;
  name: string;
  role: string;
  credentials: string;
  rating: number;
  reviewsCount: number;
  avatar: string;
  specialty: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  duration: string;
  painRating: string;
  description: string;
  technology: string;
  benefits: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}
