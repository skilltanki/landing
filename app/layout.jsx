import { Russo_One } from 'next/font/google';
import './globals.css';

const russo = Russo_One({ weight: '400', subsets: ['latin', 'cyrillic'], variable: '--font-russo', display: 'swap' });

export const metadata = {
  title: 'SkillTanki — 2010-era tanks, the way you remember them',
  description: 'A free browser tank arcade in the spirit of the 2010 classic. No registration, no pay-to-win: 7 hulls, 9 turrets, 101 paints, 91 maps.',
  openGraph: { title: 'SkillTanki', description: 'Free browser tank arcade. No sign-up, no pay-to-win.', images: ['assets/art-2.webp'] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={russo.variable}>
      <body>{children}</body>
    </html>
  );
}
