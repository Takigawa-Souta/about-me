import './Footer.css'

interface FooterProps {
  isEnglish: boolean
}

function Footer({ isEnglish }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <p>&copy; 2024 {isEnglish ? 'Sota Takigawa' : '瀧川颯太'}. All rights reserved.</p>
            <p>{isEnglish ? 'This site was created for self-introduction.' : 'このサイトは自己紹介のために作成されました。'}</p>
          </div>
          
          <div className="footer-rights">
            <div className="rights-section">
              <h4>{isEnglish ? 'Technologies Used' : '使用技術'}</h4>
              <p>React, TypeScript, Vite, CSS</p>
            </div>
            
            <div className="rights-section">
              <h4>{isEnglish ? 'License' : 'ライセンス'}</h4>
              <p>{isEnglish ? 'This project is licensed under the MIT License' : 'このプロジェクトはMITライセンスの下で公開されています'}</p>
            </div>
            
            <div className="rights-section">
              <h4>{isEnglish ? 'Attributions' : '帰属表示'}</h4>
              <p>&copy; Cygames,inc.</p>
              <p>&copy; Jitsugyo no Nihon Sha, Ltd. All rights reserved.</p>
              <p>知念実希人、いとうのいぢ</p>
              <p>{isEnglish ? 'Icons and images used with permission or under appropriate licenses.Images without credits are personal photos, but the rights to the original products belong to the original owners, so secondary use of images from this site is strictly prohibited. As for books, they are used for introduction purposes only and for no other purpose.' : 'アイコンや画像は許可を得て使用、または適切なライセンスの下で使用されています。クレジット表示のないものに関しては個人で撮影した画像になりますが大元の商品などの権利は大元の方にあるのでこのサイトの画像二次利用などは一切禁止します。本に関しては紹介の目的で使わせていただいておりその他目的はございません。'}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
