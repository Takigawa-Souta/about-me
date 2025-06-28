import './Projects.css'

function Projects() {
  const studyData = {
    title: "勉強したいこと、意気込み",
    subtitle: "今勉強してることやしていきたいことについてのページです",
    currentStudies: [
      {
        id: 1,
        title: "Web開発",
        description: "HTML、CSS、JavaScriptを中心に、現代的なWebアプリケーション開発を学んでいます",
        technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
        status: "学習中",
        progress: 60
      },
      {
        id: 2,
        title: "プログラミング基礎",
        description: "プログラミングの基本概念やアルゴリズムについて深く理解したいです",
        technologies: ["アルゴリズム", "データ構造", "オブジェクト指向"],
        status: "学習中",
        progress: 40
      }
    ],
    futureGoals: [
      {
        id: 3,
        title: "バックエンド開発",
        description: "サーバーサイドの技術を学び、フルスタック開発者になりたいです",
        technologies: ["Node.js", "Python", "データベース", "API設計"],
        status: "予定",
        progress: 0
      },
      {
        id: 4,
        title: "モバイルアプリ開発",
        description: "スマートフォンアプリの開発技術を身につけたいです",
        technologies: ["React Native", "Flutter", "モバイルUI"],
        status: "予定",
        progress: 0
      }
    ]
  }

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="study-header">
          <h1>{studyData.title}</h1>
          <p className="study-subtitle">{studyData.subtitle}</p>
        </div>
        
        <section className="current-studies">
          <h2>現在勉強していること</h2>
          <div className="projects-grid">
            {studyData.currentStudies.map(study => (
              <div key={study.id} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h3>{study.title}</h3>
                    <span className={`status-badge ${study.status === '学習中' ? 'studying' : 'planned'}`}>
                      {study.status}
                    </span>
                  </div>
                  <p>{study.description}</p>
                  <div className="project-technologies">
                    {study.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="progress-section">
                    <div className="progress-label">進捗: {study.progress}%</div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${study.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="future-goals">
          <h2>今後学びたいこと</h2>
          <div className="projects-grid">
            {studyData.futureGoals.map(goal => (
              <div key={goal.id} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h3>{goal.title}</h3>
                    <span className={`status-badge ${goal.status === '学習中' ? 'studying' : 'planned'}`}>
                      {goal.status}
                    </span>
                  </div>
                  <p>{goal.description}</p>
                  <div className="project-technologies">
                    {goal.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects