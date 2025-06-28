import './Skills.css'

function Skills() {
  const hobbyData = {
    title: "趣味について",
    subtitle: "ゲームと読書のどこが好きか教えるページです",
    categories: [
      {
        title: "ゲーム",
        items: [
          { 
            name: "RPGゲーム", 
            description: "ストーリーやキャラクター成長が楽しめるゲームが大好きです" 
          },
          { 
            name: "アクションゲーム", 
            description: "スリルとテクニックが求められるゲームで遊ぶのが好きです" 
          },
          { 
            name: "パズルゲーム", 
            description: "頭を使って解く問題が面白く、達成感があります" 
          }
        ]
      },
      {
        title: "読書",
        items: [
          { 
            name: "小説", 
            description: "様々なジャンルの物語を読んで想像力を広げています" 
          },
          { 
            name: "技術書", 
            description: "プログラミングやIT関連の知識を深めるために読んでいます" 
          },
          { 
            name: "自己啓発書", 
            description: "成長につながる考え方やスキルを学んでいます" 
          }
        ]
      }
    ]
  }

  return (
    <div className="skills-page">
      <div className="skills-container">
        <div className="hobby-header">
          <h1>{hobbyData.title}</h1>
          <p className="hobby-subtitle">{hobbyData.subtitle}</p>
        </div>
        
        <div className="skills-grid">
          {hobbyData.categories.map((category, index) => (
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