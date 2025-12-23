import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="layout">
      {/* Barra Lateral Esquerda (Preta) */}
      <aside className="sidebar">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <div className="sidebar-decor">
          <div className="hex-outline"></div>
          <div className="hex-outline"></div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="main-content">
        
        {/* Metade Esquerda: Texto */}
        <section className="text-area">
          <nav className="top-nav">
            <span>ALEXANDRE.DEV</span>
            {/* Menu Móvel (se aberto) */}
            {menuOpen && (
              <div className="mobile-menu">
                <a href="#home">Home</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
              </div>
            )}
          </nav>

          <div className="hero-text">
            <h2>TECNOLOGIA</h2>
            <h1>CRIAR.<br/>AVANÇAR.</h1>
            
            <div className="sub-hero">
              <h3>FUTURO & CÓDIGO</h3>
              <p>
                Desenvolvendo soluções em React e TypeScript com foco em 
                performance e design de alto impacto.
              </p>
            </div>

            <button className="btn-tech">
              VER PROJETOS <span className="arrow">↗</span>
            </button>
          </div>

          {/* Decoração de Fundo (Hexágonos) */}
          <div className="hex-bg-decor"></div>
        </section>

        {/* Metade Direita: Imagem */}
        <section className="image-area">
          <div className="contact-badge">
            CONTACT US
          </div>
          
          <div className="image-container">
            {/* Imagem estilo futurista/P&B */}
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&grayscale" 
              alt="Tech Future" 
              className="hero-image"
            />
            
            {/* Texto circular decorativo */}
            <div className="circle-text">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path id="circle"
                    d="M 50, 50
                       m -37, 0
                       a 37,37 0 1,1 74,0
                       a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="11">
                  <textPath xlinkHref="#circle">
                    REACT • TYPESCRIPT • VITE •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;