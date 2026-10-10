import React from 'react';
// Adjust the import path according to your project structure.
import HoverRevealCards, { CardItem } from '@/components/ui/cards';

// Sample data for the demo with reliable Unsplash flower & sacred nature stock images
export const demoItems: CardItem[] = [
  {
    id: 1,
    title: 'Sacred Marigold',
    subtitle: 'Daily Genda Puja',
    imageUrl:
      'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Fragrant Jasmine',
    subtitle: 'Madurai Mogra',
    imageUrl:
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Kamal Lotus',
    subtitle: 'Divine Offering',
    imageUrl:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Red Hibiscus',
    subtitle: 'Ganesh & Devi Puja',
    imageUrl:
      'https://images.unsplash.com/photo-1550953153-9d0403cd2ab6?auto=format&fit=crop&w=800&q=80',
  },
];

/**
 * A demo page to showcase the HoverRevealCards component.
 */
export const HoverRevealCardsDemo: React.FC = () => {
  return (
    // Centering the component for a clean preview.
    // `bg-background` ensures it adapts to the current theme (light/dark).
    <div className="flex min-h-[500px] w-full items-center justify-center p-4">
      <HoverRevealCards items={demoItems} />
    </div>
  );
};

export default HoverRevealCardsDemo;
