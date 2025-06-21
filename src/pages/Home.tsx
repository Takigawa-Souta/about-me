import './Home.css'

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'favorites'

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
              <h3>趣味</h3>
              <p>私の趣味や日常の楽しみについて紹介しています。</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('favorites')}>
              <h3>好きなもの</h3>
              <p>私が愛用しているアイテムや好きなことを紹介しています。</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('projects')}>
              <h3>学習目標</h3>
              <p>今後学びたい技術や目標について紹介しています。</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-cta">
            <h2>お気軽にお問い合わせください</h2>
            <p>プロジェクトのご相談やご質問がございましたら、お気軽にご連絡ください。</p>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-contact"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home