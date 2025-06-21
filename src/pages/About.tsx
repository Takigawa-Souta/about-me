import '../pages/About2.css';
function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>自己紹介</h1>
          <p>私の経歴、スキル、そして人柄について詳しくご紹介します。</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://via.placeholder.com/250x250" 
              alt="プロフィール画像" 
              className="profile-image"
            />
          </div>
          
          <div className="about-details">
            <h2>私について</h2>
            <p>
              はじめまして！わたしは瀧川颯太です！
              創造的な問題解決とユーザー体験の向上に情熱を注いでいます。
            </p>
            <p>
              大学でコンピュータサイエンスを学び、卒業後はフロントエンド開発を中心に
              様々なプロジェクトに携わってきました。最新の技術トレンドを常に学び、
              効率的で美しいウェブアプリケーションの開発を目指しています。
            </p>

            <h2>主なスキル</h2>
            <div className="skills-list">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About