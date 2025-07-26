import './Hobby.css'
import { useScrollPosition } from '../hooks/useScrollPosition';
// 画像が利用可能になったらインポートを追加
// import umamusumeImage from "../images/umamusume.jpg";
// import speedSymbolImage from "../images/speed-symbol.jpg";
// import fujiKisekiImage from "../images/fuji-kiseki.jpg";
// import saoImage from "../images/sao.jpg";
// import tenkuuImage from "../images/tenkuu.jpg";

interface HobbyProps {
  isEnglish: boolean
}

function Hobby({ isEnglish }: HobbyProps) {
  useScrollPosition('hobby');
  return (
    <div className="hobby-page">
      <div className="hobby-container">
        <div className="hobby-header">
          <p className="hobby-title">
            {isEnglish 
              ? "This page introduces my hobbies: games and reading"
              : "このページでは私の趣味であるゲームと読書について紹介します"
            }
          </p>
        </div>
        
        <div className="hobby-grid">
          <div className="hobby-category">
            <h2 className="hobby-subtitle">{isEnglish ? 'Games' : 'ゲーム'}</h2>
            <div className="hobby-list">
              <div className="hobby-item">
                <div className="hobby-info">
                  <p className="hobby-content">
                    {isEnglish 
                      ? "I'll tell you about games, one of my hobbies - what I play, what I like about them, and which characters I like! First, the game I often play is Uma Musume. Personally, I wasn't interested in horse racing itself, but when they're anthropomorphized, there's less resistance and each character's personality is well depicted. Through the anime, I became interested in real horses. Among the various characters with unique personalities, I mainly like three characters. The first is Speed Symbol (Suu-san). Suu-san uses masculine speech only with close friends, eats little, and acts tough - she's one of the characters with tsundere attributes. Although you can't train her, she's one of my favorite characters. The second is Fuji Kiseki, who is cool, good at magic tricks, and an entertainer with well-depicted relationships with various characters. The third is Tamamo Cross, who looks cool in the anime, speaks Kansai dialect which makes her very approachable, and her relationship and comedy with Oguri Cap is very entertaining!"
                      : "私の趣味のひとつであるゲームについて何をしていてどこが好きでどのキャラが好きかお伝えします！\nまず私がよくするゲームはウマ娘です。個人的には競馬自体に興味はなかったのですが擬人化されていると親近感や抵抗感も少なくそれぞれの個性がよく描かれており私自身はアニメも通して実馬に興味を持ちました。いろいろ個性のあるキャラが描かれている中で私が好きなキャラは主に三人いて一人目がスピードシンボリ（以下スーさん）です。スーさんは仲のいい人にだけは俺っ子で少食で強がりなど他アクさんの属性を持つキャラの一人です。育成自体はできないけどとても大好きなキャラの一人です。二人目がフジキセキでかっこよくて手品もうまいエンターテイナーでいろいろなキャラとの関係性がよく描かれていて好きです。三人目はタマモクロスでアニメでの描かれ方もかっこいいし関西弁でとても親しみやすくオグリキャップとの関係性や漫才がとても面白いです！"
                    }
                  </p>
                </div>
              </div>
              
              {/* ゲームカード */}
              <div className="hobby-cards-grid">
                <div className="hobby-card">
                  <div className="hobby-card-image">
                    <img 
                      src="https://via.placeholder.com/300x200?text=Uma+Musume" 
                      alt={isEnglish ? "Uma Musume Game" : "ウマ娘ゲーム"}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#f0f0f0';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.alt = isEnglish ? "Uma Musume (Image not available)" : "ウマ娘（画像なし）";
                      }}
                    />
                  </div>
                  <div className="hobby-card-content">
                    <h3 className="hobby-card-title">
                      {isEnglish ? "Uma Musume Pretty Derby" : "ウマ娘プリティーダービー"}
                    </h3>
                    <p className="hobby-card-description">
                      {isEnglish 
                        ? "A mobile game where you train horse girls to compete in races. Each character has unique personalities and storylines."
                        : "ウマ娘を育成してレースで勝利を目指すモバイルゲーム。キャラクターそれぞれに個性豊かな性格とストーリーがあります。"
                      }
                    </p>
                  </div>
                </div>

                <div className="hobby-card">
                  <div className="hobby-card-image">
                    <img 
                      src="https://via.placeholder.com/300x200?text=Speed+Symbol" 
                      alt={isEnglish ? "Speed Symbol Character" : "スピードシンボルキャラクター"}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#f0f0f0';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.alt = isEnglish ? "Speed Symbol (Image not available)" : "スピードシンボル（画像なし）";
                      }}
                    />
                  </div>
                  <div className="hobby-card-content">
                    <h3 className="hobby-card-title">
                      {isEnglish ? "Speed Symbol (Suu-san)" : "スピードシンボル（スーさん）"}
                    </h3>
                    <p className="hobby-card-description">
                      {isEnglish 
                        ? "A tsundere character who speaks like a boy only with close friends. Despite being small in appetite, she acts tough and strong."
                        : "仲の良い人にだけ俺っ子になるツンデレキャラ。少食だけど強がりで、とても魅力的なキャラクターです。"
                      }
                    </p>
                  </div>
                </div>

                <div className="hobby-card">
                  <div className="hobby-card-image">
                    <img 
                      src="https://via.placeholder.com/300x200?text=Fuji+Kiseki" 
                      alt={isEnglish ? "Fuji Kiseki Character" : "フジキセキキャラクター"}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#f0f0f0';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.alt = isEnglish ? "Fuji Kiseki (Image not available)" : "フジキセキ（画像なし）";
                      }}
                    />
                  </div>
                  <div className="hobby-card-content">
                    <h3 className="hobby-card-title">
                      {isEnglish ? "Fuji Kiseki" : "フジキセキ"}
                    </h3>
                    <p className="hobby-card-description">
                      {isEnglish 
                        ? "A cool entertainer who excels at magic tricks. Known for well-depicted relationships with various characters."
                        : "手品が得意なクールなエンターテイナー。様々なキャラクターとの関係性がよく描かれているキャラクターです。"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hobby-category">
            <h2 className="hobby-subtitle">{isEnglish ? 'Reading' : '読書'}</h2>
            <div className="hobby-list">
              <div className="hobby-item">
                <div className="hobby-info">
                  <p className="hobby-content">
                    {isEnglish 
                      ? "I have various favorite books, but I'll introduce two today. The first is the Sword Art Online light novel series by Reki Kawahara (SAO). This work is science fiction, and it's interesting how a fun game suddenly becomes grim, showing people's true nature and the psychological warfare with murder guilds. The second is the Tenkyu Takao no Suiri Carte series by Mikito Chinen, which is a medical mystery. Since Chinen-san is also a doctor, the hospital details are written meticulously, and he's very good at writing people's mental states. The protagonists who grow with each work are very well written."
                      : "私が好きな本はいろいろありますが今回は2つ紹介します。一つ目は川原礫さん作のライトノベル原作シリーズのソードアートオンラインです。（以下SAO）この作品はSFでもあり楽しいゲームが一気に殺伐としたものになって人の本性が出たり殺人ギルドとの駆け引きも面白い作品です。二つ目は知念実希人さん作の天久鷹央の推理カルテシリーズでこれは医療系ミステリーで知念さん自身もお医者さんということもあり病院内のことが細かく書かれていたり人の精神状態を書くのがとても上手く作品ごとに成長していく主人公達がとってもよく書かれています"
                    }
                  </p>
                </div>
              </div>
              
              {/* 本のカード */}
              <div className="hobby-cards-grid">
                <div className="hobby-card">
                  <div className="hobby-card-image">
                    <img 
                      src="https://via.placeholder.com/300x200?text=Sword+Art+Online" 
                      alt={isEnglish ? "Sword Art Online Light Novel" : "ソードアートオンライン小説"}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#f0f0f0';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.alt = isEnglish ? "SAO (Image not available)" : "SAO（画像なし）";
                      }}
                    />
                  </div>
                  <div className="hobby-card-content">
                    <h3 className="hobby-card-title">
                      {isEnglish ? "Sword Art Online (SAO)" : "ソードアートオンライン（SAO）"}
                    </h3>
                    <p className="hobby-card-description">
                      {isEnglish 
                        ? "A science fiction light novel series where a fun game suddenly becomes deadly serious, revealing people's true nature and featuring psychological warfare with murder guilds."
                        : "楽しいゲームが一気に殺伐としたものになり、人の本性が出たり殺人ギルドとの駆け引きが面白いSF小説シリーズです。"
                      }
                    </p>
                  </div>
                </div>

                <div className="hobby-card">
                  <div className="hobby-card-image">
                    <img 
                      src="https://via.placeholder.com/300x200?text=Tenkuu+Takao" 
                      alt={isEnglish ? "Tenkyu Takao Medical Mystery" : "天久鷹央医療ミステリー"}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = '#f0f0f0';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                        target.alt = isEnglish ? "Tenkyu Takao (Image not available)" : "天久鷹央（画像なし）";
                      }}
                    />
                  </div>
                  <div className="hobby-card-content">
                    <h3 className="hobby-card-title">
                      {isEnglish ? "Tenkyu Takao Medical Mystery Series" : "天久鷹央の推理カルテシリーズ"}
                    </h3>
                    <p className="hobby-card-description">
                      {isEnglish 
                        ? "A medical mystery series written by Dr. Mikito Chinen. Features detailed hospital settings and excellent portrayal of characters' psychological states."
                        : "医師である知念実希人さんが書く医療ミステリー。病院内の詳細な描写と人の精神状態の巧妙な描写が特徴です。"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobby
