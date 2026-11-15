import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Github, Lightbulb, Layers3, Wrench, Sparkles } from 'lucide-react';
import SmartImage from '@/components/SmartImage';
import { projects } from '@/data/site';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.name, description: project.summary } : { title: 'Project not found' };
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const others = projects.filter((item) => item.slug !== slug);
  return <div className="detail-page shell">
    <Link className="back-link" href="/#projects"><ArrowLeft size={17} /> Back to all projects</Link>
    <header className="detail-hero"><div className="detail-eyebrow"><span>PROJECT / {project.number}</span><span>{project.category}</span><span>{project.year}</span></div><h1>{project.name}<span>.</span></h1><p className="detail-punchline">{project.punchline}</p><p className="detail-summary">{project.description}</p><div className="detail-buttons"><a className="btn btn-primary" href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={17} /> Visit live project</a><a className="btn btn-secondary" href={project.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> Client GitHub repository</a></div></header>
    <div className={`detail-image-wrap accent-${project.accent}`}><SmartImage src={project.image} fallback={project.fallback} alt={`${project.name} project screenshot`} className="detail-image" /></div>
    <div className="detail-content"><div className="detail-left"><section className="detail-block"><div className="detail-heading"><Layers3 size={20} /><h2>Technology stack</h2></div><p>The main technologies and tools used in this project.</p><div className="detail-stack">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></section><section className="detail-block"><div className="detail-heading"><Check size={20} /><h2>Core features</h2></div><ul className="detail-feature-list">{project.features.map((feature) => <li key={feature}><span><Check size={16} /></span>{feature}</li>)}</ul></section></div>
    <div className="detail-right"><section className="detail-block"><div className="detail-heading"><Wrench size={20} /><h2>Challenges & solutions</h2></div><p>The main engineering challenges addressed while building this project.</p><div className="challenge-list">{project.challenges.map((challenge, i) => <div key={challenge.title} className="challenge-item"><span className="challenge-number">0{i + 1}</span><div><h3>{challenge.title}</h3><p>{challenge.detail}</p></div></div>)}</div></section><section className="detail-block"><div className="detail-heading"><Lightbulb size={20} /><h2>Future improvements</h2></div><p>Ideas that could make the project even more useful.</p><ul className="detail-feature-list">{project.improvements.map((item) => <li key={item}><span><Sparkles size={16} /></span>{item}</li>)}</ul></section></div></div>
    <div className="detail-next"><span>KEEP EXPLORING</span><h2>More things I&apos;ve made.</h2><div className="detail-next-list">{others.map((item) => <Link key={item.slug} href={`/projects/${item.slug}`}><span>{item.number} / {item.name}</span><ArrowUpRight size={22} /></Link>)}</div></div>
  </div>;
}
