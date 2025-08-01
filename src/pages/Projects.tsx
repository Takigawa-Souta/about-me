import './Projects.css'
import { useScrollPosition } from '../hooks/useScrollPosition';

interface ProjectsProps {
  isEnglish: boolean
}

function Projects({ isEnglish }: ProjectsProps) {
  useScrollPosition('projects');
  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="study-header">
          <h1 className="study-title">
            {isEnglish 
              ? "This page introduces what I'm studying, what I want to study, and the qualifications I want to obtain"
              : "このページでは私が勉強していることやしていきたいこと、取りたい資格を紹介します"
            }
          </h1>
        </div>
        
        <section className="current-studies">
          <h2 className="study-subtitle">
            {isEnglish ? 'What I\'m Currently Studying' : '現在勉強してること'}
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-content">
                <p className="study-content">
                  {isEnglish 
                    ? "I'm mainly studying programming with Python and JavaScript. I'm also learning HTML and CSS, and studying the basics of web design."
                    : "私はプログラミングを主にPythonとJavaScriptを学んでいます。またHTML、CSSも学びWEBデザインの基礎も学んでいます"
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="future-goals">
          <h2 className="study-subtitle">
            {isEnglish ? 'What I Want to Learn' : '学んでいきたいことについて'}
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-content">
                <p className="study-content">
                  {isEnglish 
                    ? "I want to use programming as a side job, so I want to learn more and more various languages and be able to use them in practice. I also want to learn psychology, statistics, and leadership to contribute more to the store where I currently work."
                    : "私はプログラミングは副業として使えるようにしたいのでもっともっといろいろな言語を学び実践で使えるように指定です\nまた心理学、統計学、リーダーシップなども学び今働いている店にもっと貢献できるようにしたいです"
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="certifications">
          <h2 className="study-subtitle">
            {isEnglish ? 'Certifications I Want to Obtain' : '取りたい資格について'}
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-content">
                <p className="study-content">
                  {isEnglish 
                    ? "I currently want to obtain the Color Coordination Certification and Tax Accountant qualification. These will be useful for design work, and the Tax Accountant qualification will also be helpful for future tax returns.\nI also want to obtain certifications for Hazardous Materials Handling and English proficiency tests."
                    : "私は現在色彩検定や税理士資格を取りたいと思っています。これらはデザインする上でも役に立ちますし税理士資格は将来確定申告をするのにも役立つからです\nまた危険物取扱や英語検定も取得していきたいなと思っています"
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects