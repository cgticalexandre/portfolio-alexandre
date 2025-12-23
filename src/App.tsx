import { useState } from 'react';
import './App.css';

function App() {
  const [contactText, setContactText] = useState("Entrar em Contato");

  const projects = [
    { title: "Projeto Alpha", desc: "Um dashboard interativo.", link: "#" },
    { title: "E-commerce Beta", desc: "Loja completa com carrinho.", link: "#" },
    { title: "App Gamma", desc: "Gestão de tarefas automatizada.", link: "#" }
  ];

  const skills = ["React", "TypeScript", "Vite", "Git", "CSS Moderno"];

  const handleContact = () => {
    setContactText("Obrigado! 🚀");
    setTimeout(() => setContactText("Entrar em Contato"), 3000);
  };

  return (
    <div className="container">
      <header className="header">
        {/* Título com efeito gradiente */}
        <h1 className="gradient-text">Alexandre Dev</h1>
        <p>Transformando ideias em código com React & TypeScript</p>
      </header>

      <main>
        <section className="card">
          <h2>Sobre Mim</h2>
          <p>Desenvolvedor focado em performance e experiência do usuário.
          Sempre aprendendo novas tecnologias para criar soluções melhores.</p>
        </section>

        {/* Nova Seção de Skills */}
        <section className="skills-section">
          <h2>Tecnologias</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section className="projects-section">
          <h2>Meus Projetos</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a key={index} href={project.link} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <span className="link-text">Ver projeto →</span>
              </a>
            ))}
          </div>
        </section>

        <div className="cta-section">
          <button onClick={handleContact} className="primary-button">
            {contactText}
          </button>
        </div>
      </main>

      <footer>
        <p>© 2025 - Alexandre Dev • Atualizado via CI/CD</p>
      </footer>
    </div>
  );
}

export default App;