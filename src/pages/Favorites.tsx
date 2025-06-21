import './Favorites.css'

function Favorites() {
  const favoriteItems = [
    {
      name: "コーヒー",
      description: "毎朝のコーヒーが日課です。特にエスプレッソベースのドリンクが好きです",
      category: "飲み物"
    },
    {
      name: "カメラ",
      description: "風景写真を撮るのが趣味です。特に自然の美しい瞬間を捉えることが好きです",
      category: "趣味用品"
    },
    {
      name: "旅行",
      description: "新しい場所を探索するのが好きです。文化や歴史を学ぶのも楽しみの一つです",
      category: "アクティビティ"
    },
    {
      name: "アート",
      description: "美術館巡りやデザイン鑑賞を楽しみます。創造性に触れることで新しいインスピレーションを得ています",
      category: "文化"
    },
    {
      name: "音楽",
      description: "ジャズやクラシック、ポップスまで幅広く聴きます。作業中のBGMとしても欠かせません",
      category: "エンターテイメント"
    },
    {
      name: "本",
      description: "技術書から小説まで様々なジャンルを読みます。知識を深めることと物語に没頭することの両方が好きです",
      category: "学習"
    }
  ]

  const categories = [...new Set(favoriteItems.map(item => item.category))]

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <div className="favorites-header">
          <h1>好きなもの</h1>
          <p>私が日常的に楽しんでいるものや、心から愛用しているアイテムをご紹介します。</p>
        </div>
        
        <div className="favorites-content">
          {categories.map((category, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="favorites-grid">
                {favoriteItems
                  .filter(item => item.category === category)
                  .map((item, itemIndex) => (
                    <div key={itemIndex} className="favorite-card">
                      <div className="favorite-info">
                        <h3 className="favorite-name">{item.name}</h3>
                        <p className="favorite-description">{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favorites
