import './Skills.css'
import SkillsHeader from '../components/SkillsHeader'

function Skills() {
  const hobbyCategories = [
    {
      title: "趣味・娯楽",
      items: [
        { name: "映画鑑賞", description: "特にSF・アクション映画が好きです" },
        { name: "読書", description: "技術書からフィクションまで幅広く読みます" },
        { name: "音楽鑑賞", description: "ロック・ポップス・クラシック音楽を聴きます" },
        { name: "ゲーム", description: "RPG・ストラテジーゲームを楽しんでいます" },
        { name: "料理", description: "新しいレシピに挑戦するのが好きです" }
      ]
    },
    {
      title: "好きなもの",
      items: [
        { name: "コーヒー", description: "毎朝のコーヒーが日課です" },
        { name: "カメラ", description: "風景写真を撮るのが趣味です" },
        { name: "旅行", description: "新しい場所を探索するのが好きです" },
        { name: "アート", description: "美術館巡りやデザイン鑑賞を楽しみます" }
      ]
    },
    {
      title: "学びたいこと",
      items: [
        { name: "機械学習・AI", description: "データサイエンスに興味があります" },
        { name: "UI/UXデザイン", description: "より良いユーザー体験を提供したいです" },
        { name: "モバイル開発", description: "React NativeやFlutterを学びたいです" },
        { name: "クラウド技術", description: "AWSやGCPの知識を深めたいです" }
      ]
    }
  ]

  return (
    <div className="skills-page">
      <div className="skills-container">
        <SkillsHeader />
        
        <div className="skills-grid">
          {hobbyCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h2>{category.title}</h2>
              <div className="skills-list">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="hobby-item">
                    <div className="hobby-info">
                      <h3 className="hobby-name">{item.name}</h3>
                      <p className="hobby-description">{item.description}</p>
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

export default Skills