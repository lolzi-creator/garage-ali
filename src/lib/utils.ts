import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

// Format business hours for display
export function formatBusinessHours(hours: { [key: string]: string }): string {
  const entries = Object.entries(hours);
  const groupedHours: { [key: string]: string[] } = {};
  
  // Group days with same hours
  entries.forEach(([day, time]) => {
    if (!groupedHours[time]) {
      groupedHours[time] = [];
    }
    groupedHours[time].push(day);
  });
  
  return Object.entries(groupedHours)
    .map(([time, days]) => {
      if (days.length === 1) {
        return `${days[0]}: ${time}`;
      }
      const firstDay = days[0];
      const lastDay = days[days.length - 1];
      return `${firstDay} - ${lastDay}: ${time}`;
    })
    .join('\n');
}

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Generate star rating display
export function generateStars(rating: number): string {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Scroll to element smoothly
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
} 