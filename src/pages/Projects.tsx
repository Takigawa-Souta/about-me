import './Projects.css'
import ProjectsHeader from '../components/ProjectsHeader'

function Projects() {
  const learningGoals = [
    {
      id: 1,
      title: "機械学習・AI開発",
      description: "データサイエンスとAI技術を学び、実用的なアプリケーションを開発したいです",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      image: "https://via.placeholder.com/300x200",
      resources: "#",
      roadmap: "#"
    },
    {
      id: 2,
      title: "UI/UXデザイン",
      description: "ユーザー中心設計の原則を学び、より良いユーザー体験を提供したいです",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      image: "https://via.placeholder.com/300x200",
      resources: "#",
      roadmap: "#"
    },
    {
      id: 3,
      title: "モバイルアプリ開発",
      description: "クロスプラットフォーム開発でモバイルアプリを作成したいです",
      technologies: ["React Native", "Flutter", "Dart", "Mobile UI"],
      image: "https://via.placeholder.com/300x200",
      resources: "#",
      roadmap: "#"
    },
    {
      id: 4,
      title: "クラウド・インフラ技術",
      description: "スケーラブルなクラウドアーキテクチャの構築を学びたいです",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      image: "https://via.placeholder.com/300x200",
      resources: "#",
      roadmap: "#"
    }
  ]

  return (
    <div className="projects-page">
      <div className="projects-container">
        <ProjectsHeader />
        
        <div className="projects-grid">
          {learningGoals.map(goal => (
            <div key={goal.id} className="project-card">
              <img src={goal.image} alt={goal.title} className="project-image" />
              <div className="project-content">
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
                <div className="project-technologies">
                  {goal.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={goal.resources} className="project-link">学習リソース</a>
                  <a href={goal.roadmap} className="project-link">ロードマップ</a>
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