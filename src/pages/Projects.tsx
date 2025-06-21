import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Eコマースサイト",
      description: "React と Node.js を使用したフルスタックのEコマースアプリケーション",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://via.placeholder.com/300x200",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "タスク管理アプリ",
      description: "TypeScript と Firebase を使用したリアルタイムタスク管理システム",
      technologies: ["TypeScript", "React", "Firebase", "CSS"],
      image: "https://via.placeholder.com/300x200",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "天気予報アプリ",
      description: "外部APIを使用した天気情報表示アプリケーション",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      image: "https://via.placeholder.com/300x200",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "ポートフォリオサイト",
      description: "React を使用したレスポンシブなポートフォリオウェブサイト",
      technologies: ["React", "TypeScript", "CSS", "Vite"],
      image: "https://via.placeholder.com/300x200",
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1>プロジェクト</h1>
          <p>これまでに制作した作品をご紹介します。</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">GitHub</a>
                  <a href={project.demo} className="project-link">デモ</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects