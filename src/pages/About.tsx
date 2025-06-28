import '../pages/About2.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="overview-title-section">
          <h1 className="overview-title">このページは私、瀧川颯太のことを紹介するページです</h1>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://via.placeholder.com/250x250" 
              alt="瀧川颯太のプロフィール画像" 
              className="profile-image"
            />
          </div>
          
          <div className="about-details">
            <h2>自己紹介</h2>
            <p>
              はじめまして！私は瀧川颯太です。
              このサイトでは私の生まれや性格、趣味などについて紹介しています。
            </p>
            <p>
              普段はゲームと読書を楽しんでおり、特に仮面ライダーやVtuberが大好きです。
              また、新しい技術や知識を学ぶことに興味があり、
              日々成長していきたいと思っています。
            </p>

            <div className="hobbies-section">
              <div className="hobby-column single-column">
                <h2>趣味</h2>
                <div className="hobby-items">
                  <div className="hobby-item">
                    <h3 className="hobby-name">ゲーム</h3>
                    <p className="hobby-description">様々なジャンルのゲームを楽しんでいます</p>
                  </div>
                  <div className="hobby-item">
                    <h3 className="hobby-name">読書</h3>
                    <p className="hobby-description">小説からビジネス書まで幅広く読みます</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>学びたいこと</h2>
            <div className="learning-items">
              <div className="learning-item">
                <h3 className="learning-name">機械学習・AI</h3>
                <p className="learning-description">データサイエンスに興味があります</p>
              </div>
              <div className="learning-item">
                <h3 className="learning-name">UI/UXデザイン</h3>
                <p className="learning-description">より良いユーザー体験を提供したいです</p>
              </div>
              <div className="learning-item">
                <h3 className="learning-name">モバイル開発</h3>
                <p className="learning-description">React NativeやFlutterを学びたいです</p>
              </div>
              <div className="learning-item">
                <h3 className="learning-name">クラウド技術</h3>
                <p className="learning-description">AWSやGCPの知識を深めたいです</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About