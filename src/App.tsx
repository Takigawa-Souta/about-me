import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Hobby from './pages/Hobby'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'

type PageType = 'home' | 'about' | 'hobby' | 'projects' | 'contact' | 'favorites'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // ローカルストレージからダークモードの設定を読み込み
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })
  const [isEnglish, setIsEnglish] = useState<boolean>(() => {
    // ローカルストレージから言語設定を読み込み
    const saved = localStorage.getItem('language')
    return saved === 'en'
  })

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  // ダークモードの設定をローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    // body要素にダークモードのクラスを追加/削除
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  // 言語設定をローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('language', isEnglish ? 'en' : 'ja')
  }, [isEnglish])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} isEnglish={isEnglish} />
      case 'about':
        return <About isEnglish={isEnglish} />
      case 'hobby':
        return <Hobby isEnglish={isEnglish} />
      case 'projects':
        return <Projects isEnglish={isEnglish} />
      case 'contact':
        return <Contact isEnglish={isEnglish} />
      case 'favorites':
        return <Favorites isEnglish={isEnglish} />
      default:
        return <Home onNavigate={handleNavigate} isEnglish={isEnglish} />
    }
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        isEnglish={isEnglish}
        onToggleLanguage={toggleLanguage}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer isEnglish={isEnglish} />
    </div>
  )
}

export default App
