export type Category = 'Traditional' | 'Western' | 'Bridal' | 'Casual' | 'Sarees' | 'Kurtis' | 'Gowns' | 'Party Wear' | 'Ethnic' | 'Party' | 'Fusion' | 'Wedding';

export interface Dress {
  id: string;
  name: string;
  category: Category;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
