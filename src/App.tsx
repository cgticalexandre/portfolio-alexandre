import { useState } from 'react';
import './App.css';

function App() {
  const [contactText, setContactText] = useState("Entrar em Contato");

  const projects = [
    { title: "Projeto Alpha", desc: "Um dashboard feito em React." },
    { title: "E-commerce Beta", desc: "Loja virtual com TypeScript." },
    { title: "App Gamma", desc: "Aplicativo de tarefas." }
  ];

  const handleContact = () => {
    setContactText("Obrigado pelo interesse! 🚀");
    setTimeout(() => setContactText("Entrar em Contato"), 3000);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Alexandre Dev</h1>
        <p>Desenvolvedor Frontend & Criador de Soluções</p>
      </header>

      <main>
        <section className="card">
          <h2>Sobre Mim</h2>
          <p>Olá! Sou o Alexandre. Sou apaixonado por tecnologia, TypeScript e React. 
          Este é meu pequeno site em produção.</p>
        </section>

        <section className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </section>

        <div className="cta-section">
          <button onClick={handleContact} className="primary-button">
            {contactText}
          </button>
        </div>
      </main>

      <footer>
        <p>© 2024 - Feito com React e Vite</p>
      </footer>
    </div>
  );
}

export default App;