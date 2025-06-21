import './Home.css'

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact'

interface HomeProps {
  onNavigate: (page: PageType) => void
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p className="hero-subtitle">私の作品とスキルをご紹介します</p>
          <div className="hero-buttons">
            <button 
              onClick={() => onNavigate('about')} 
              className="btn btn-primary"
            >
              自己紹介を見る
            </button>
            <button 
              onClick={() => onNavigate('projects')} 
              className="btn btn-secondary"
            >
              プロジェクトを見る
            </button>
          </div>
        </div>
      </section>
      
      <section className="home-preview">
        <div className="container">
          <div className="preview-grid">
            <div className="preview-card" onClick={() => onNavigate('about')}>
              <h3>私について</h3>
              <p>経歴やスキル、趣味について詳しく紹介しています。</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('skills')}>
              <h3>スキル</h3>
              <p>プログラミング言語や技術スタックを紹介しています。</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('projects')}>
              <h3>プロジェクト</h3>
              <p>これまでに手がけた作品やプロジェクトを紹介しています。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home