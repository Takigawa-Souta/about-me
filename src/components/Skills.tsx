import './Skills.css'

function Skills() {
  return (
    <section className="skills">
      <h2>スキル</h2>
      <div className="skill-list">
        <div className="skill-item">
          <h3>フロントエンド</h3>
          <p>React, Vue.js, TypeScript, JavaScript, HTML, CSS</p>
        </div>
        <div className="skill-item">
          <h3>バックエンド</h3>
          <p>Node.js, Express, Python, Django</p>
        </div>
        <div className="skill-item">
          <h3>その他</h3>
          <p>Git, Docker, AWS, Firebase</p>
        </div>
      </div>
    </section>
  )
}

export default Skills