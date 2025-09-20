import { Poppins, Syne } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--poppins',
});

export const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--oswald',
});
