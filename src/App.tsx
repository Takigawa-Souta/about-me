import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'favorites'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      default:
        return <Home onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
