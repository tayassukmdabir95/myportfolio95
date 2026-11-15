import './globals.css';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: { default: 'Tayassuk Md Abir | Full-Stack Developer & AI/ML Explorer', template: '%s | Tayassuk Md Abir' },
  description: 'The portfolio of Tayassuk Md Abir, a BRAC University Computer Science student building full-stack web experiences and exploring machine learning, deep learning, NLP and computer vision.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning><body><Providers><div id="top" /><Navbar /><main>{children}</main><Footer /></Providers></body></html>;
}
