import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: "フロントエンド",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Vue.js", level: 70 }
      ]
    },
    {
      title: "バックエンド",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Python", level: 70 },
        { name: "PHP", level: 65 }
      ]
    },
    {
      title: "ツール・その他",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 60 },
        { name: "Figma", level: 75 }
      ]
    }
  ]

  return (
    <div className="skills-page">
      <div className="skills-container">
        <div className="skills-header">
          <h1>スキル</h1>
          <p>これまでに習得した技術スタックと習熟度をご紹介します。</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h2>{category.title}</h2>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills