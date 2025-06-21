import './Header.css'

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact'

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
          className="logo"
        >
          <span>Portfolio</span>
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
                自己紹介
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('skills')}
                className={`nav-link ${currentPage === 'skills' ? 'active' : ''}`}
              >
                スキル
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('projects')}
                className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
              >
                プロジェクト
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              >
                連絡先
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header