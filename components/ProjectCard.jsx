import Link from 'next/link';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import SmartImage from './SmartImage';

export default function ProjectCard({ project }) {
  return <article className={`project-card accent-${project.accent}`}>
    <Link className="project-visual" href={`/projects/${project.slug}`} aria-label={`View ${project.name} project details`}>
      <SmartImage src={project.image} fallback={project.fallback} alt={`${project.name} project preview`} className="project-screenshot" />
      <span className="visual-arrow"><MoveUpRight size={20} /></span>
    </Link>
    <div className="project-card-body">
      <div className="project-card-top"><span>{project.category}</span><span>{project.year}</span></div>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <div className="project-tags">{project.stack.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
      <Link className="project-details-link" href={`/projects/${project.slug}`}>View project details <ArrowUpRight size={17} /></Link>
    </div>
  </article>;
}
