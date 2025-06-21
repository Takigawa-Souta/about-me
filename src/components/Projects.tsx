import './Projects.css'

function Projects() {
  return (
    <section className="projects">
      <h2>主な経験・プロジェクト</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>ECサイトの開発</h3>
          <p>Reactを使用したレスポンシブなショッピングサイトを開発しました。</p>
        </div>
        <div className="project-item">
          <h3>社内管理システム</h3>
          <p>Vue.jsとTypeScriptで社内の業務効率化アプリを作成しました。</p>
        </div>
      </div>
    </section>
  )
}

export default Projects