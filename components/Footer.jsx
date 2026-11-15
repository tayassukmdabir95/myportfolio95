import Link from 'next/link';
import { ArrowUpRight, Heart } from 'lucide-react';
import { person } from '@/data/site';

export default function Footer() {
  return <footer className="footer">
    <div className="shell footer-inner">
      <div><Link href="/" className="footer-brand">Tayassuk<span>.</span></Link><p>Code with purpose. Create with curiosity.</p></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {person.name}. All rights reserved.</span><span>Built with Next.js </span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div>
    </div>
  </footer>;
}
