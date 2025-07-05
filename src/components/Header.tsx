import { useState } from 'react'
import './Header.css'

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'favorites'

interface HeaderProps {
  currentPage: PageType
  onNavigate: (page: PageType) => void
  isDarkMode: boolean
  onToggleDarkMode: () => void
  isEnglish: boolean
  onToggleLanguage: () => void
}

function Header({ currentPage, onNavigate, isDarkMode, onToggleDarkMode, isEnglish, onToggleLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (page: PageType) => {
    onNavigate(page)
    setIsMenuOpen(false) // ナビゲーション後はメニューを閉じる
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <button 
          onClick={() => handleNavClick('home')} 
          className="logo header-title"
        >
          <span>{isEnglish ? 'Portfolio Site' : '自己紹介サイト'}</span>
        </button>
        
        {/* ハンバーガーメニューボタン */}
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              >
                {isEnglish ? 'Home' : 'ホーム'}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              >
                {isEnglish ? 'About' : '概要'}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('skills')}
                className={`nav-link ${currentPage === 'skills' ? 'active' : ''}`}
              >
                {isEnglish ? 'Hobbies' : '趣味'}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('favorites')}
                className={`nav-link ${currentPage === 'favorites' ? 'active' : ''}`}
              >
                {isEnglish ? 'Favorites' : '好きなもの'}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('projects')}
                className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
              >
                {isEnglish ? 'Learning Goals' : '勉強したいこと・意気込み'}
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              >
                {isEnglish ? 'Contact' : 'お問い合わせ'}
              </button>
            </li>
          </ul>
          
          {/* ダークモード切り替えボタン */}
          <div className="header-controls">
            <button 
              onClick={onToggleDarkMode}
              className="dark-mode-toggle"
              aria-label={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
            >
              <span className="toggle-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
              <span className="toggle-text">
                {isDarkMode ? (isEnglish ? 'Light' : 'ライト') : (isEnglish ? 'Dark' : 'ダーク')}
              </span>
            </button>
            
            {/* 言語切り替えボタン */}
            <button 
              onClick={onToggleLanguage}
              className="language-toggle"
              aria-label={isEnglish ? 'Switch to Japanese' : '英語に切り替え'}
            >
              <span className="toggle-icon">
                {isEnglish ? '🇯🇵' : '🇺🇸'}
              </span>
              <span className="toggle-text">
                {isEnglish ? 'JP' : 'EN'}
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header