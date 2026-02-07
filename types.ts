import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon?: LucideIcon;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}
