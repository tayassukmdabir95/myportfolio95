'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeButton from './ThemeButton';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Education', href: '/#education' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="shell nav-shell">
      <Link href="/" aria-label="Tayassuk Md Abir — home" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">T<span>.</span></span>
        <span className="brand-name">tayassuk<span className="brand-suffix"> / portfolio</span></span>
      </Link>
      <nav className={`nav-links ${open ? 'mobile-open' : ''}`} aria-label="Main navigation">
        {links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} className={pathname === '/' ? '' : 'subpage-nav-link'} href={link.href}>{link.label}</Link>)}
        <a className="mobile-contact" href="mailto:tayassukmuhammad@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>
      <div className="nav-actions">
        <ThemeButton />
        <a className="nav-contact" href="mailto:tayassukmuhammad@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button type="button" className="icon-button menu-button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
    </div>
  </header>;
}
