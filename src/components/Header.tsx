import './Header.css'

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'favorites'

interface HeaderProps {
  currentPage: PageType
  onNavigate: (page: PageType) => void
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  const handleNavClick = (page: PageType) => {
    onNavigate(page)
  }

  return (
    <header className="header">
      <div className="header-container">
        <button 
          onClick={() => handleNavClick('home')} 
          className="logo header-title"
        >
          <span>自己紹介サイト</span>
        </button>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              >
                ホーム
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              >
                概要
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('skills')}
                className={`nav-link ${currentPage === 'skills' ? 'active' : ''}`}
              >
                趣味
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('favorites')}
                className={`nav-link ${currentPage === 'favorites' ? 'active' : ''}`}
              >
                好きなもの
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('projects')}
                className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
              >
                勉強したいこと・意気込み
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              >
                お問い合わせ
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header