

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'favorites'

interface HomeProps {
  onNavigate: (page: PageType) => void
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="home-title">瀧川 颯太の紹介サイト</h1>
          <p className="hero-subtitle">私の生まれや性格、趣味、好きなもの、学習目標について紹介します</p>
          <div className="hero-buttons">
            <button 
              onClick={() => onNavigate('about')} 
              className="btn btn-primary"
            >
              自己紹介を見る
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-secondary"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </section>
      
      <section className="home-preview">
        <div className="container">
          <div className="preview-grid">
            <div className="preview-card" onClick={() => onNavigate('about')}>
              <h3>概要</h3>
              <p>私の生まれや性格などについてのページです</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('skills')}>
              <h3>趣味</h3>
              <p>ゲームと読書のどこが好きか教えるページです</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('favorites')}>
              <h3>好きなもの</h3>
              <p>好きなものである仮面ライダーとVtuberについて教えるページです</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('projects')}>
              <h3>勉強したいこと、意気込み</h3>
              <p>今勉強してることやしていきたいことについてのページです</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-cta">
            <h2>問い合わせ</h2>
            <p>お問い合わせはこちらから</p>
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