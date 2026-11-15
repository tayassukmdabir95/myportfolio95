'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => { setMounted(true); }, []);
  return <button type="button" className="icon-button theme-button" aria-label="Toggle light and dark theme" title="Toggle theme" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
    {mounted && resolvedTheme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
  </button>;
}
