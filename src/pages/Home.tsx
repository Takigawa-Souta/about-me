

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'favorites'

interface HomeProps {
  onNavigate: (page: PageType) => void
  isEnglish: boolean
}

function Home({ onNavigate, isEnglish }: HomeProps) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="home-title">
            {isEnglish ? "Sota Takigawa's Portfolio Site" : '瀧川 颯太の紹介サイト'}
          </h1>
          <p className="hero-subtitle">
            {isEnglish 
              ? 'Introducing my background, personality, hobbies, favorite things, and learning goals'
              : '私の生まれや性格、趣味、好きなもの、学習目標について紹介します'
            }
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => onNavigate('about')} 
              className="btn btn-primary"
            >
              {isEnglish ? 'View Profile' : '自己紹介を見る'}
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-secondary"
            >
              {isEnglish ? 'Contact' : 'お問い合わせ'}
            </button>
          </div>
        </div>
      </section>
      
      <section className="home-preview">
        <div className="container">
          <div className="preview-grid">
            <div className="preview-card" onClick={() => onNavigate('about')}>
              <h3>{isEnglish ? 'About' : '概要'}</h3>
              <p>{isEnglish ? 'Page about my background and personality' : '私の生まれや性格などについてのページです'}</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('skills')}>
              <h3>{isEnglish ? 'Hobbies' : '趣味'}</h3>
              <p>{isEnglish ? 'What I like about games and reading' : 'ゲームと読書のどこが好きか教えるページです'}</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('favorites')}>
              <h3>{isEnglish ? 'Favorites' : '好きなもの'}</h3>
              <p>{isEnglish ? 'About my favorite things like Kamen Rider and VTubers' : '好きなものである仮面ライダーとVtuberについて教えるページです'}</p>
            </div>
            <div className="preview-card" onClick={() => onNavigate('projects')}>
              <h3>{isEnglish ? 'Learning Goals' : '勉強したいこと、意気込み'}</h3>
              <p>{isEnglish ? 'About what I\'m studying and want to learn' : '今勉強してることやしていきたいことについてのページです'}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-cta">
            <h2>{isEnglish ? 'Contact' : '問い合わせ'}</h2>
            <p>{isEnglish ? 'Feel free to contact me' : 'お問い合わせはこちらから'}</p>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-contact"
            >
              {isEnglish ? 'Contact Me' : 'お問い合わせ'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home