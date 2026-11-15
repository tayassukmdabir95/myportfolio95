import Link from 'next/link';
import {
  ArrowUpRight, ArrowDownRight, Download, Github, Linkedin, Facebook, Mail,
  Phone, MessageCircle, MapPin, GraduationCap, Code2, BrainCircuit,
  Braces, Server, Sparkles, CheckCircle2, ArrowRight, ExternalLink,
  Gamepad2, Film, Terminal, CalendarDays,
} from 'lucide-react';
import { person, projects, skillGroups } from '@/data/site';
import ProjectCard from '@/components/ProjectCard';
import SmartImage from '@/components/SmartImage';

const socialLinks = [
  { name: 'GitHub', url: person.github, icon: Github },
  { name: 'LinkedIn', url: person.linkedin, icon: Linkedin },
  { name: 'Facebook', url: person.facebook, icon: Facebook },
];
const groupIcons = [Braces, Server, BrainCircuit, Terminal];

export default function Home() {
  return <>
    <section className="hero shell" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot" /> Open to learning, collaborating & building</div>
        <div className="hero-overline">HELLO WORLD, I&apos;M</div>
        <h1 id="hero-heading">Tayassuk<br /><span>Md Abir<span className="headline-dot">.</span></span></h1>
        <div className="hero-role">Full-Stack Developer <span>×</span> AI / ML Explorer</div>
        <p className="hero-description">I&apos;m a Computer Science student at BRAC University who loves building purposeful web experiences and exploring the intelligence behind modern technology — from machine learning and NLP to computer vision.</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="/resume.pdf" download="Tayassuk_Md_Abir_Resume.pdf"><Download size={17} /> Download resume</a>
          <a className="btn btn-secondary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
        </div>
        <div className="hero-socials"><span>FIND ME ON</span><div>{socialLinks.map(({ name, url, icon: Icon }) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><Icon size={18} /></a>)}</div></div>
      </div>
      <div className="hero-art">
        <div className="hero-ambient ambient-one" /><div className="hero-ambient ambient-two" />
        <div className="profile-frame">
          <div className="photo-grid" />
          <SmartImage src="/me.jpeg" fallback="/photo-placeholder.svg" alt="Portrait of Tayassuk Md Abir" className="profile-photo" />
          <div className="photo-corner top-left" /><div className="photo-corner bottom-right" />
        </div>
        <div className="floating-card card-code"><span className="floating-icon"><Code2 size={19} /></span><div><strong>Build things.</strong><small>Code • Create • Iterate</small></div></div>
        <div className="floating-card card-brain"><span className="floating-icon"><BrainCircuit size={19} /></span><div><strong>Think deeper.</strong><small>AI • ML • NLP</small></div></div>
        <div className="vertical-caption">A curious mind, always in progress ↗</div>
      </div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <ArrowDownRight size={16} /></a>
    </section>

    <div className="ticker-outer"><div className="shell ticker-inner"><span>DEVELOPING IDEAS INTO REALITY</span><span className="ticker-star">✳</span><span>FULL-STACK WEB</span><span className="ticker-star">✳</span><span>ARTIFICIAL INTELLIGENCE</span><span className="ticker-star">✳</span><span>CONTINUOUS LEARNING</span></div></div>

    <section id="about" className="section shell about-section">
      <div className="section-heading"><div><div className="section-kicker"><span>01 / THE PERSON BEHIND THE CODE</span></div><h2>A little more <em>about me.</em></h2></div><p>A mix of creativity, analytical thinking, and a genuine passion for understanding how things work.</p></div>
      <div className="about-grid">
        <article className="about-feature glass-panel"><div className="about-feature-icon"><Sparkles size={22} /></div><h3>Curious by nature.<br /><span>Builder by choice.</span></h3><p>My programming journey grew from solving coding problems and experimenting with ideas into building complete applications. As a Computer Science undergraduate at BRAC University, I enjoy the entire problem-solving process — understanding a challenge, exploring approaches, and turning a solution into something people can use.</p><p>On the development side, I work across modern frontend interfaces, backend APIs and databases. I&apos;m equally interested in machine learning, deep learning, natural language processing and image processing, especially where intelligent models can solve practical problems.</p><p>I learn quickly, love tackling challenging code, and believe the best projects combine clean engineering with a great user experience.</p></article>
        <div className="about-side">
          <div className="about-mini glass-panel"><div className="about-mini-top"><BrainCircuit size={24} /><span>01 / WHAT DRIVES ME</span></div><h3>Intelligence + intuition</h3><p>I love combining data-driven thinking with clean product design to build solutions that feel both useful and human.</p></div>
          <div className="about-mini glass-panel"><div className="about-mini-top"><Gamepad2 size={24} /><span>02 / OUTSIDE THE EDITOR</span></div><h3>More than just code</h3><p>When I&apos;m not developing, I&apos;m usually gaming, watching films (especially great storytelling), or solving a tricky problem just for fun.</p><div className="interest-tags"><span><Gamepad2 size={14} /> Gaming</span><span><Film size={14} /> Cinema</span><span><Code2 size={14} /> Problem-solving</span></div></div>
        </div>
      </div>
      <div className="highlights-row"><div><strong>03<span>+</span></strong><span>Featured builds</span></div><div><strong>2023<span>—</span>27</strong><span>CS academic journey</span></div><div><strong>Web <span>+</span> AI</strong><span>Two worlds I enjoy</span></div></div>
    </section>

    <section id="skills" className="section skills-band"><div className="shell">
      <div className="section-heading"><div><div className="section-kicker"><span>02 / THE TOOLKIT</span></div><h2>Skills & <em>technologies.</em></h2></div><p>Technologies I use in projects and areas I&apos;m actively studying, practicing and exploring.</p></div>
      <div className="skills-grid">{skillGroups.map((group, i) => { const Icon = groupIcons[i]; return <article key={group.title} className={`skill-card accent-${group.accent}`}><div className="skill-card-top"><span className="skill-icon"><Icon size={23} /></span><span className="skill-number">{group.number} / 04</span></div><h3>{group.title}</h3><p>{group.description}</p><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="skill-decoration"><span /><span /><span /><span /><span /><span /><span /><span /></div></article>; })}</div>
      <div className="skills-footnote"><CheckCircle2 size={16} /> A hands-on toolkit, always growing. The labels above represent experience and active areas of learning, not proficiency rankings.</div>
    </div></section>

    <section id="education" className="section shell education-section"><div className="section-heading"><div><div className="section-kicker"><span>03 / MY FOUNDATION</span></div><h2>Education & <em>learning.</em></h2></div><p>Formal study and independent experimentation both shape the way I work.</p></div>
      <div className="education-card glass-panel"><div className="education-icon"><GraduationCap size={28} /></div><div className="education-main"><div className="edu-topline"><span>UNDERGRADUATE DEGREE</span><span><CalendarDays size={14} /> 2023 — 2027 (Expected)</span></div><h3>Bachelor of Science in Computer Science</h3><p className="edu-university">BRAC University <span>•</span> Dhaka, Bangladesh</p><p>Studying core computer science concepts while pursuing practical work in software engineering, web application development, machine learning, natural language processing and related research-oriented topics.</p><div className="edu-subjects"><span>Algorithms & problem-solving</span><span>Software engineering</span><span>AI & machine learning</span><span>Database systems</span></div></div><span className="edu-watermark">BRACU</span></div>
    </section>

    <section id="projects" className="section projects-section"><div className="shell"><div className="section-heading"><div><div className="section-kicker"><span>04 / SELECTED WORK</span></div><h2>Projects I&apos;ve <em>built.</em></h2></div><p>Three real applications exploring creative commerce, everyday information and personal productivity.</p></div>
      <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      <div className="projects-after">More experiments and code live on <a href={person.github} target="_blank" rel="noopener noreferrer">my GitHub <ExternalLink size={14} /></a></div>
    </div></section>

    <section id="contact" className="section shell contact-section"><div className="contact-panel"><div className="contact-top"><div className="section-kicker"><span>05 / GET IN TOUCH</span></div><span className="contact-availability"><span className="live-dot" /> Let's connect</span></div><h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2><p>Whether it&apos;s a project, an interesting problem, or just a conversation about tech — my inbox is open.</p><a className="contact-main-link" href={`mailto:${person.email}`}>Say hello <ArrowUpRight size={30} /></a>
      <div className="contact-methods"><a href={`mailto:${person.email}`}><Mail size={19} /><span><small>EMAIL</small><strong>{person.email}</strong></span><ArrowUpRight size={16} /></a><a href={`tel:${person.phone}`}><Phone size={19} /><span><small>PHONE</small><strong>{person.phoneDisplay}</strong></span><ArrowUpRight size={16} /></a><a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${person.whatsapp}`}><MessageCircle size={19} /><span><small>WHATSAPP</small><strong>Start a conversation</strong></span><ArrowUpRight size={16} /></a></div>
      <div className="contact-social-links">{socialLinks.map(({ name, url, icon: Icon }) => <a key={name} href={url} target="_blank" rel="noopener noreferrer"><Icon size={16} /> {name} <ArrowUpRight size={14} /></a>)}</div></div></section>
  </>;
}
