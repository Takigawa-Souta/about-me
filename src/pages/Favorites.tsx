import './Favorites.css'
import { skrdriver, gnssdriver } from "../assets/images";
import { useScrollPosition } from '../hooks/useScrollPosition';
import type { BasePageProps } from '../types';

function Favorites({ isEnglish }: BasePageProps) {
  useScrollPosition('favorites');
  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <div className="favorites-header">
          <h1 className="likes-title">
            {isEnglish 
              ? "This page introduces two of my favorite things!"
              : "このページでは私の好きなものについて二つ紹介します！"
            }
          </h1>
        </div>
        
        <div className="favorites-content">
          <section className="favorites-section">
            <h2 className="likes-subtitle">
              {isEnglish ? 'About Kamen Rider' : '仮面ライダーについて'}
            </h2>
            <p className="likes-contact">
              {isEnglish 
                ? 'Let me introduce two of my favorite Kamen Riders. The first is Kamen Rider Zangetsu. Kamen Rider Zangetsu is the fourth Rider in the Kamen Rider Gaim series, themed around the Sengoku period and fruit. Even when opposing the protagonist, he\'s incredibly strong and rarely loses unless caught off guard. The Genesis Driver he uses has less motor noise than the DX version and more LEDs, making it highly faithful to the show. Plus, there are so many items available, offering tons of ways to play! The second is Kamen Rider Skull, one of the Riders appearing in Kamen Rider Double. Kamen Rider Skull embodies the very essence of a hard-boiled man, partly thanks to the excellent physique of his actor, Koji Yoshikawa. Skull also has an adult-sized belt available. Its black finish is matte, and the in-show BGM is faithfully reproduced. Personally, it\'s one of my absolute favorite belts, easily ranking among my top two.'
                : '私の好きな仮面ライダーを二人紹介します。一人目は仮面ライダー斬月です。\n仮面ライダー斬月は戦国とフルーツをモチーフにした仮面ライダー鎧武のシリーズの四号ライダーで主人公と敵対する時でもかなり強く不意打ち以外ではほぼ負けていない人です。彼が使うゲネシスドライバーはDX版の頃よりもモーター音が減っていてLEDが増えてかなり劇中再現性があります。またアイテムも多く出ていて遊び方がとてもあるなと思っています！\n二人目は仮面ライダーダブルに出てくるライダーの一人である仮面ライダースカルです\n仮面ライダースカルは演者さんである吉川晃司さんのスタイルの良さもありハードボイルドな男そのものになっています。スカルも大人用のベルトが出ており黒色の表現もマットなものになっていたり劇中BGMもしっかり再現されていたりしているので個人的には1、2を争うくらい好きなベルトです'
              }
            </p>
            <div className="favorites-items">
              <div className="favorite-item">
                <h3 className="likes-berts">
                  <a href="https://p-bandai.jp/item/item-1000199328/" target="_blank" rel="noopener noreferrer">
                  <img src={gnssdriver} />
                  </a>
                  {isEnglish ? "Genesis Driver" : "ゲネシスドライバー"}
                </h3>
              </div>
              <div className="favorite-item">
                <h3 className="likes-berts">
                  <a href="https://p-bandai.jp/item/item-1000231202/?srsltid=AfmBOorFPE73GobquUl21AkVysmxNjxwyzUiLp4HFIgfPT_2-2ktatjw" target="_blank" rel="noopener noreferrer">
                    <img src={skrdriver} />
                  </a>
                  {isEnglish ? "Skull's Belt" : "スカルのベルト"}
                </h3>
              </div>
            </div>
          </section>

          <section className="favorites-section">
            <h2 className="likes-subtitle">
              {isEnglish ? 'About VTubers - Mainly divided into corporate and independent' : 'Vtuberについて主に企業と個人勢に分けて紹介します'}
            </h2>
            <p className="likes-contact">
              {isEnglish 
                ? 'Among corporate VTubers, I like Aogiri High School and the 7th Dimension Student Council from Nijisanji. What I like about them is that Aogiri High School breaks the concept of VTubers and creates very interesting and unique streams while showing their own colors. Veterans like Moemi-san are also releasing their second vocal cords, so I think they will continue to grow. The 7th Dimension Student Council from Nijisanji has interesting various projects including seniors and juniors, and watching them makes me feel like I\'m back in high school and experiencing youth again. Each person\'s talk is very interesting and enjoyable to watch. Among independent VTubers, I recommend Nekomugi Tororo-san because I think her voice is incredibly cute. The occasional lady-like conversations are very interesting, and her interactions with Tonakaito (Hendy)-san and Radder-san, including her overly pure aspects, are funny, so I often watch collaboration streams. She mainly streams on Twitch, so I can\'t watch in real-time very often, but I frequently watch the clips and shorts she uploads to YouTube.'
                : '企業勢ではあおぎり高校とにじさんじの中の7次元生徒会の方々が好きです。\nどういう所が好きかというとあおぎり高校はVtuberという概念を壊して自分たちの色を出しながら個性豊かな配信をしているのでみていてとても面白いし大ベテランの萌実さんなども第二声帯の解放などもしており今後成長していきそうだなと思っています。\nにじさんじの7次元生徒会は先輩や後輩も含めた様々な企画が面白く自分も見ているだけで高校時代に戻り青春しているような感覚になりますしそれぞれの方のトークがとても面白くみていて楽しいです。\n個人勢では猫麦とろろさんがおすすめで彼女は声が何よりも可愛いと思っています。また時々出るお嬢様のような話がとても面白いのもあり純粋すぎる面も含めてトナカイト（ヘンディー）さんやらっだぁさんとの絡みが面白くコラボ配信はよくみています。彼女は基本Twitchで配信しているので私自身リアタイすることはあまりできないですが本人がYoutubeに挙げている切り抜きやショートはよくみています'
              }
            </p>
            <div className="favorites-items">
              <div className="favorite-item">
                <h3 className="likes-movies">
                  <div className="media-wrapper">
                    <iframe src="https://www.youtube.com/embed/UL0qzYDkmQo?si=RfSf8cS19xLZZ5dx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                  {isEnglish ? 'Aogiri High School Recommended Videos' : 'あおぎり高校のおすすめ動画'}
                </h3>
              </div>
              <div className="favorite-item">
                <h3 className="likes-movies">
                  <div className="media-wrapper">
                    <iframe src="https://www.youtube.com/embed/b6yFs5mteBY?si=062XLATcuAOQ2jz5" title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                  {isEnglish ? '7th Dimension Student Council Recommended Videos' : '7次元生徒会のおすすめ動画'}
                </h3>
              </div>
              <div className="favorite-item">
                <h3 className="likes-movies">
                  <div className="media-wrapper">
                    <iframe src="https://www.youtube.com/embed/WgUjsSg3pL0?si=WoCuKZLI7LsCrgv-" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                  {isEnglish ? 'Nekomugi Tororo Recommended Videos' : '猫麦とろろのおすすめ動画'}
                </h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Favorites
