import './AboutHeader.css'

function AboutHeader() {
  return (
    <div className="about-header">
      <div className="about-header-content">
        <div className="about-header-text">
          <h1>自己紹介</h1>
          <p>私の経歴、スキル、そして人柄について詳しくご紹介します。</p>
        </div>
        <div className="about-header-image">
          <div className="profile-circle">
            <img 
              src="https://via.placeholder.com/150x150" 
              alt="プロフィール画像" 
              className="header-profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHeader
