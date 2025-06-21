import '../pages/About2.css';
import AboutHeader from '../components/AboutHeader';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <AboutHeader />
        
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

            <div className="hobbies-section">
              <div className="hobby-column single-column">
                <h2>趣味</h2>
                <div className="hobby-items">
                  <div className="hobby-item">
                    <h3 className="hobby-name">映画鑑賞</h3>
                    <p className="hobby-description">特にSF・アクション映画が好きです</p>
                  </div>
                  <div className="hobby-item">
                    <h3 className="hobby-name">読書</h3>
                    <p className="hobby-description">技術書からフィクションまで幅広く読みます</p>
                  </div>
                  <div className="hobby-item">
                    <h3 className="hobby-name">音楽鑑賞</h3>
                    <p className="hobby-description">ロック・ポップス・クラシック音楽を聴きます</p>
                  </div>
                  <div className="hobby-item">
                    <h3 className="hobby-name">料理</h3>
                    <p className="hobby-description">新しいレシピに挑戦するのが好きです</p>
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