import './SkillsHeader.css'

function SkillsHeader() {
  return (
    <div className="skills-header">
      <div className="skills-header-content">
        <div className="skills-header-icon">
          <div className="skill-icon-container">
            <span className="skill-icon">🎨</span>
          </div>
        </div>
        <div className="skills-header-text">
          <h1>好きなもの・趣味</h1>
          <p>私の興味・関心、趣味、そして今後学びたいことをご紹介します。多様な分野に興味を持っています。</p>
        </div>
        <div className="skills-header-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">趣味・興味</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4+</span>
            <span className="stat-label">学びたい分野</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsHeader
