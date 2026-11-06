
'use client';

import { useEffect, useState } from 'react';

const SEMESTER_END = '2026-12-18T23:59:59-04:00';

type Project = {
  semester: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
  link: string;
  linkLabel: string;
};

const projects: Project[] = [
  {
    semester: '2º semestre',
    title: 'Impacto Calórico de Comidas em Geral',
    description:
      'Aplicação web interativa para calcular necessidades calóricas diárias e acompanhar a ingestão de alimentos. Integra a API USDA FoodData Central, registra refeições, apresenta nutrientes e gera gráficos para acompanhar o consumo.',
    skills: [
      'Python',
      'Streamlit',
      'USDA API',
      'Pandas',
      'Matplotlib',
      'Requests',
    ],
    image: '/images/calorias.svg',
    link: 'https://github.com/belaSimoes/matematica-aplicada-projeto',
    linkLabel: 'Ver projeto no GitHub',
  },
  {
    semester: '3º semestre',
    title: 'SPED Validator',
    description:
      'Ferramenta de validação de arquivos SPED, desenvolvida individualmente por Isabela Simões.',
    skills: [
      'Validação de arquivos',
      'Desenvolvimento de software',
    ],
    image: '/images/sped.svg',
    link: 'https://github.com/belaSimoes/sped-validator',
    linkLabel: 'Ver projeto no GitHub',
  },
  {
    semester: '3º semestre',
    title: 'Orbe — espaço para o que importa',
    description:
      'Startup fictícia de organização de tarefas para autônomos, freelancers e pequenos negócios. O projeto inclui site responsivo e quadro Kanban para cadastrar tarefas, alterar status, acompanhar conclusões e armazenar dados localmente no navegador.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Kanban',
      'Acessibilidade',
    ],
    image: '/images/orbe.svg',
    link: 'https://github.com/belaSimoes/startup',
    linkLabel: 'Ver projeto no GitHub',
  },
];

function getRemaining() {
  const diff = Math.max(
    0,
    new Date(SEMESTER_END).getTime() - Date.now()
  );

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Home() {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const units = [
    ['Dias', remaining.days],
    ['Horas', remaining.hours],
    ['Minutos', remaining.minutes],
    ['Segundos', remaining.seconds],
  ] as const;

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            MINHA JORNADA ACADÊMICA
          </span>

          <h1>
            Cada semestre,
            <br />
            <em>uma nova conquista.</em>
          </h1>

          <p>
            Uma contagem regressiva para o fim do semestre
            e um registro dos projetos que marcaram minha
            trajetória em Análise e Desenvolvimento de Sistemas.
          </p>

          <div
            className="countdown"
            aria-label="Contagem regressiva para o fim do semestre"
          >
            {units.map(([label, value]) => (
              <div className="time-unit" key={label}>
                <strong>
                  {String(value).padStart(2, '0')}
                </strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <small className="deadline">
            Contagem até{' '}
            {new Date(SEMESTER_END).toLocaleDateString('pt-BR')}
          </small>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <span>✳</span>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <span className="eyebrow">
            REGISTRO DE EXPERIÊNCIAS
          </span>

          <h2>Minha linha do tempo</h2>

          <p>
            Projetos, aprendizados e experiências
            desenvolvidos durante o curso de TADS.
          </p>
        </div>

        <div className="timeline">
          {projects.map((project, index) => (
            <article
              className={`timeline-item ${
                index % 2 ? 'reverse' : ''
              }`}
              key={project.title}
            >
              <div className="timeline-marker">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={`Imagem ilustrativa de ${project.title}`}
                />
              </div>

              <div className="project-copy">
                <span className="project-semester">
                  {project.semester}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        Construído para registrar minha evolução acadêmica.
        <span> ✳</span>
      </footer>
    </main>
  );
}
