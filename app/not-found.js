import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() { return <div className="not-found shell"><span>404 / NOT FOUND</span><h1>This page wandered off.</h1><p>That link might be outdated. Your next stop is the homepage.</p><Link className="btn btn-primary" href="/"><ArrowLeft size={18} /> Return home</Link></div>; }
