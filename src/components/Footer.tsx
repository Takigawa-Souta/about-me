import './Footer.css'

interface FooterProps {
  isEnglish: boolean
}

function Footer({ isEnglish }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 {isEnglish ? 'Sota Takigawa' : '瀧川颯太'}. All rights reserved.</p>
          <p>{isEnglish ? 'This site was created for self-introduction.' : 'このサイトは自己紹介のために作成されました。'}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
