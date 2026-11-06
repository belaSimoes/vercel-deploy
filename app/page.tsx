'use client';

import { useEffect, useState } from "react";

const SEMESTER_END = "2026-12-18T23:59:59-04:00"; // Altere para a data/hora oficial do fim do semestre.

type Project = {
  semester: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
};

const projects: Project[] = [
  {
    semester: "1º semestre",
    title: "Projeto de introdução",
    description: "Substitua este texto por uma descrição do trabalho desenvolvido, seus objetivos e resultados.",
    skills: ["Pesquisa", "Planejamento"],
    image: "/images/projeto-1.svg",
  },
  {
    semester: "2º semestre",
    title: "Projeto interdisciplinar",
    description: "Conte aqui o que foi desenvolvido neste semestre e qual foi sua contribuição.",
    skills: ["Trabalho em equipe", "Documentação"],
    image: "/images/projeto-2.svg",
  },
  {
    semester: "3º semestre",
    title: "Projeto prático",
    description: "Adicione uma breve explicação do problema, da solução e das tecnologias utilizadas.",
    skills: ["Desenvolvimento", "Apresentação"],
    image: "/images/projeto-3.svg",
  },
];

function getRemaining() {
  const diff = Math.max(0, new Date(SEMESTER_END).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export default function Home() {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const units = [
    ["Dias", remaining.days],
    ["Horas", remaining.hours],
    ["Minutos", remaining.minutes],
    ["Segundos", remaining.seconds],
  ] as const;

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">MINHA JORNADA ACADÊMICA</span>
          <h1>Cada semestre,<br /><em>uma nova conquista.</em></h1>
          <p>Uma contagem regressiva para o fim do semestre e um registro dos projetos que marcaram minha trajetória.</p>
          <div className="countdown" aria-label="Contagem regressiva para o fim do semestre">
            {units.map(([label, value]) => (
              <div className="time-unit" key={label}>
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <small className="deadline">Contagem até {new Date(SEMESTER_END).toLocaleDateString("pt-BR")}</small>
        </div>
        <div className="hero-decoration" aria-hidden="true"><span>✳</span></div>
      </section>

      <section className="timeline-section">
        <div className="section-heading">
          <span className="eyebrow">REGISTRO DE EXPERIÊNCIAS</span>
          <h2>Minha linha do tempo</h2>
          <p>Projetos, aprendizados e experiências de cada etapa do curso.</p>
        </div>

        <div className="timeline">
          {projects.map((project, index) => (
            <article className={`timeline-item ${index % 2 ? "reverse" : ""}`} key={project.semester}>
              <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
              <div className="project-image">
                {/* Coloque a foto correspondente em public/images e mantenha o nome configurado abaixo. */}
                <img src={project.image} alt={`Foto do projeto ${project.title}`} />
              </div>
              <div className="project-copy">
                <span className="project-semester">{project.semester}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>Construído para registrar minha evolução acadêmica. <span>✳</span></footer>
    </main>
  );
}
