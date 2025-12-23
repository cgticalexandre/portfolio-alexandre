import React, { useState, useEffect } from 'react';
import './index.css';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Terminal,
  Cpu,
  ExternalLink,
  PenTool
} from 'lucide-react';

// --- Types & Interfaces ---

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
}

// --- Data ---

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Architecture",
    category: "Full Stack",
    description: "Plataforma de vendas escalável com CodeIgniter 4 e integração de pagamentos. Foco em performance de banco de dados e segurança.",
    tags: ["PHP", "MySQL", "Redis", "Stripe API"]
  },
  {
    id: 2,
    title: "FinTech Dashboard",
    category: "Frontend",
    description: "Interface administrativa reativa para visualização de dados financeiros em tempo real, utilizando TypeScript e Recharts.",
    tags: ["React", "TypeScript", "Tailwind", "D3.js"]
  },
  {
    id: 3,
    title: "Advocacia Corp",
    category: "Web Design",
    description: "Redesign completo de identidade digital e portal corporativo para escritório de advocacia de grande porte.",
    tags: ["Figma", "UI/UX", "WordPress Headless", "Next.js"]
  },
  {
    id: 4,
    title: "SaaS API Starter",
    category: "Backend",
    description: "Boilerplate para SaaS multi-tenant com autenticação JWT e arquitetura modular.",
    tags: ["Node.js", "Docker", "PostgreSQL", "CI/CD"]
  }
];

const skills: Skill[] = [
  {
    name: "Backend Engineering",
    icon: Server,
    description: "Arquitetura sólida com PHP moderno e Node.js. Otimização de queries MySQL e construção de APIs RESTful seguras."
  },
  {
    name: "Frontend Development",
    icon: Layout,
    description: "Experiências ricas com React, TypeScript e Next.js. Foco em componentização, acessibilidade e performance."
  },
  {
    name: "UI/UX Design",
    icon: PenTool,
    description: "Abordagem minimalista e funcional. Prototipagem em Figma traduzida fielmente para código limpo e semântico."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Trabalhos', href: '#work' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-neutral-900 z-50">
          dev<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-neutral-900 text-white px-6 py-2.5 text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors">
            Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-neutral-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-bold tracking-tight text-neutral-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="text-3xl font-bold tracking-tight text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 max-w-7xl mx-auto">
      <div className="space-y-8 max-w-4xl">
        <div className="inline-flex items-center space-x-2 bg-neutral-100 px-3 py-1 rounded-full w-fit">
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wide">Disponível para projetos</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-neutral-900 leading-[0.9]">
          Desenvolvedor <br /> 
          <span className="text-neutral-400">Full Stack</span> & <br />
          Designer.
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed font-light">
          Especialista em construir soluções digitais completas. Da arquitetura de dados em 
          <span className="text-neutral-900 font-medium"> PHP/MySQL</span> à interatividade fluida do 
          <span className="text-neutral-900 font-medium"> React</span>. 
          Design minimalista, código limpo.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          <a href="#work" className="group flex items-center space-x-2 text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
            <span>Ver Projetos Selecionados</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex space-x-6 text-neutral-400">
            <a href="#" className="hover:text-neutral-900 transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-neutral-900 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-neutral-900 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Minha Abordagem</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Expertise Técnica</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="w-12 h-12 bg-white border border-neutral-200 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-600 group-hover:shadow-lg transition-all duration-300">
                <skill.icon size={24} className="text-neutral-900 group-hover:text-blue-600 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-4">{skill.name}</h4>
              <p className="text-neutral-500 leading-relaxed text-sm md:text-base">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-neutral-200">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8">Tech Stack</p>
          <div className="flex flex-wrap gap-x-12 gap-y-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {/* Tech "Logos" using text for simplicity/minimalism */}
             <span className="text-xl font-bold text-neutral-800 flex items-center gap-2"><Terminal size={20}/> PHP</span>
             <span className="text-xl font-bold text-neutral-800 flex items-center gap-2"><Code2 size={20}/> React</span>
             <span className="text-xl font-bold text-neutral-800 flex items-center gap-2"><Database size={20}/> MySQL</span>
             <span className="text-xl font-bold text-neutral-800 flex items-center gap-2"><Cpu size={20}/> TypeScript</span>
             <span className="text-xl font-bold text-neutral-800 flex items-center gap-2"><Layout size={20}/> Tailwind</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Portfólio</h2>
             <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Trabalhos Recentes</h3>
          </div>
          <a href="#" className="hidden md:flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors mt-4 md:mt-0">
            Ver arquivo completo <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="bg-neutral-100 aspect-[4/3] mb-6 overflow-hidden rounded-lg relative">
                {/* Abstract visualization of project */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-300 font-bold text-9xl select-none group-hover:scale-105 transition-transform duration-700">
                    {project.id}
                </div>
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <ExternalLink size={20} className="text-neutral-900"/>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h4 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4 max-w-sm">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                        {tag}
                    </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="#" className="inline-flex items-center text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-1">
                Ver arquivo completo <ArrowRight size={16} className="ml-2" />
             </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Vamos construir algo juntos?</h2>
        <p className="text-neutral-400 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
          Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.
        </p>
        
        <a 
          href="mailto:hello@dev.com" 
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          <Mail className="mr-3" size={20} />
          Enviar Email
        </a>

        <div className="mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Dev Portfolio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="bg-white min-h-screen antialiased text-neutral-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
            <Hero />
            <Expertise />
            <Work />
            <Contact />
        </main>
    </div>
  );
}