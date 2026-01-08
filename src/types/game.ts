export interface Game {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  provider: string;
  thumbnail: string;
  banner: string;
  rtp?: number; 
  volatility?: 'low' | 'medium' | 'high';
  playersOnline?: number;
  isPopular?: boolean;
  isNew?: boolean;
}
