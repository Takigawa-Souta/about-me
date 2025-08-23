import { useState } from 'react'
import './Hobby.css'
import { useScrollPosition } from '../hooks/useScrollPosition';
import tama from "../images/uma1.png";
import speed from "../images/uma2.png";
import fuji from "../images/uma3.png";
import stay from "../images/uma4.png";
import orufe from "../images/uma5.png";
import dream from "../images/uma6.png";
import gold from "../images/uma7.png";
import meno from "../images/uma8.png";
import nakayama from "../images/uma9.png";
import tachyon from "../images/uma10.png";
import ameku_book_good from "../images/book2.png";
import ameku_book from "../images/book1.png";

interface HobbyProps {
  isEnglish: boolean
}

function Hobby({ isEnglish }: HobbyProps) {
  useScrollPosition('hobby');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // ウマ娘の画像データ
  const umamusumeImages = [
    { src: tama, alt: isEnglish ? "Tamamo Cross" : "タマモクロス" },
    { src: speed, alt: isEnglish ? "Speed Symbol" : "スピードシンボル" },
    { src: fuji, alt: isEnglish ? "Fuji Kiseki" : "フジキセキ" },
    { src: stay, alt: isEnglish ? "Stay Gold" : "ステイゴールド" },
    { src: orufe, alt: isEnglish ? "Orfevre" : "オルフェーヴル" },
    { src: dream, alt: isEnglish ? "Dream Journey" : "ドリームジャーニー" },
    { src: gold, alt: isEnglish ? "Gold Ship" : "ゴールドシップ" },
    { src: meno, alt: isEnglish ? "Phenomenon" : "フェノーメノ" },
    { src: nakayama, alt: isEnglish ? "Nakayama Festa" : "ナカヤマフェスタ" },
    { src: tachyon, alt: isEnglish ? "Agnes Tachyon" : "アグネスタキオン" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % umamusumeImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + umamusumeImages.length) % umamusumeImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
                      src={tama} 
                      alt={isEnglish ? "Tamamo Cross" : "タマモクロス"}
                    />
                  </div>
                  <div className="hobby-card-content">
                    <h3 className="hobby-card-title">
                      {isEnglish ? "Tamamo Cross" : "タマモクロス"}
                    </h3>
                    <p className="hobby-card-description">
                      {isEnglish 
                        ? "She is a poor girl who speaks Kansai dialect and has many interactions with Oguri Cap, making her a distinctive character. Her nickname is 『 White Lightning 』."
                        : "関西弁の貧乏気質な女の子でオグリキャップとの絡みも多く特徴的なキャラクターです。二つ名は『白い稲妻』です。"
                      }
                    </p>
                  </div>
                </div>

                <div className="hobby-card">
                  <div className="hobby-card-image">
                    <img 
                      src={speed}
                      alt={isEnglish ? "Speed Symbol Character" : "スピードシンボルキャラクター"}
                    />
                  </div>
                  <div className="hobby-card-content">
                    <h3 className="hobby-card-title">
                      {isEnglish ? "Speed Symbol (Suu-san)" : "スピードシンボル（スーさん）"}
                    </h3>
                    <p className="hobby-card-description">
                      {isEnglish 
                        ? "He's a person who only shows his weak side and acts selfishly towards close friends. He's a small eater and a light drinker, but he has a very strong core inside, making him a very charming character."
                        : "仲の良い人にだけ俺っ子になったり弱いところを見せる人。少食で酒弱だけど心の中にある芯はとっても強くて、とても魅力的なキャラクターです。"
                      }
                    </p>
                  </div>
                </div>

                <div className="hobby-card">
                  <div className="hobby-card-image">
                    <img 
                      src={fuji}
                      alt={isEnglish ? "Fuji Kiseki Character" : "フジキセキキャラクター"}
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
            
            {/* ウマ娘画像スライダー */}
            <div className="umamusume-slider">
              <h3 className="slider-title">
                {isEnglish ? "Uma Musume Gallery" : "ウマ娘ギャラリー"}
              </h3>
              
              <div className="slider-container">
                <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous image">
                  &#8249;
                </button>
                
                <div className="slider-wrapper">
                  <div 
                    className="slider-track" 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {umamusumeImages.map((image, index) => (
                      <div key={index} className="slide">
                        <img src={image.src} alt={image.alt} />
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="slider-btn next" onClick={nextSlide} aria-label="Next image">
                  &#8250;
                </button>
              </div>
              
              {/* スライダーインジケーター */}
              <div className="slider-indicators">
                {umamusumeImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
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
                      src={ameku_book_good} 
                      alt={isEnglish ? "Recommended books from Takao Amakura's Mystery Chart series" : "天久鷹央の推理カルテシリーズのおすすめ本"}
                    />
                  </div>
                  <div className="hobby-card-content">
                    <h3 className="hobby-card-title">
                      {isEnglish ? "Recommended books from Takao Amakura's Mystery Chart series" : "天久鷹央の推理カルテシリーズのおすすめ本"}
                    </h3>
                    <p className="hobby-card-description">
                      {isEnglish 
                        ? "This work depicts the meeting between Amakura Takao and Takanashi Yu, and shows how Takao gradually opens up his heart from when he was still reluctant to do so."
                        : "天久鷹央と小鳥遊優の二人の出会いが描かれておりまだ鷹央が心を開いていないところから開いていく様子などが描かれている作品です。"
                      }
                    </p>
                  </div>
                </div>

                <div className="hobby-card">
                  <div className="hobby-card-image">
                    <img 
                      src={ameku_book} 
                      alt={isEnglish ? "Tenkyu Takao Medical Mystery" : "天久鷹央医療ミステリー"}
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
