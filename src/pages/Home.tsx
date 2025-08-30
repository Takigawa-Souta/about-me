
import { useState } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition';
import './Home.css';
import dzia from "../images/dzia.jpg";
import rizb from "../images/rizb.jpg";
import rizb2 from "../images/rizb2.jpg";
import zron from "../images/zron.jpg";
import gzron from "../images/gzron.jpg";
import zku from "../images/zku.jpg";
import oum from "../images/oum.jpg";
import sun from "../images/sun.jpg";
import moon from "../images/moon.jpg";
import sngk from "../images/sngk.jpg";
import gnssdriver from "../images/gnss.jpg";
import oz from "../images/oz.jpg";
import kbt_bath from "../images/kbt&bath.jpg";
import dbr from "../images/dbr.jpg";
import x_f from "../images/x&f.jpg";
import skr from "../images/skr.jpg";
import ac from "../images/ac.jpg";
import denoue from "../images/denoue.jpg";
import zrns from "../images/zrns.jpg";
import mpd from "../images/mpd.jpg";
import diend from "../images/diend.jpg";
import breid from "../images/breid.jpg";
import garren from "../images/garren.jpg";
import krs from "../images/krs.jpg";
import krsar from "../images/krsar.jpg";
import faizedge from "../images/faizedge.jpg";

type PageType = 'home' | 'about' | 'hobby' | 'projects' | 'contact' | 'favorites'

interface HomeProps {
  onNavigate: (page: PageType) => void
  isEnglish: boolean
}

function Home({ onNavigate, isEnglish }: HomeProps) {
  useScrollPosition('home');
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // ホームページ用の画像データ
  const homeImages = [
    { 
      src: dzia, 
      alt: isEnglish ? "DESIRE DRIVER" : "デザイアドライバー",
      title: isEnglish ? "DESIRE DRIVER" : "デザイアドライバー",
      description: isEnglish ? "The driver featured in Kamen Rider Geats. The DX version of SuperBest comes with the belt replaced with the high-spec version." : "仮面ライダーギーツに登場するドライバー。SuperBestのDX版で帯はハイスペックに差し替え済み。"
    },
    { 
      src: rizb, 
      alt: isEnglish ? "Raisebuckle and Ridewatch" : "レイズバックルとライドウォッチ",
      title: isEnglish ? "Raisebuckle and Ridewatch" : "レイズバックルとライドウォッチ",
      description: isEnglish ? "The buckles shown here, starting from the Raise Buckle, are the Fever Slot Buckle, Command Twin Buckle, Zombie Buckle, Boost Mark II Buckle, Boost Mark IX Buckle, and Jamato Buckle. The Ride Watches are the Zi-O Ride Watch, Zi-O Trinity Ride Watch, and Gates Revive Ride Watch." : "ここに写ってるのはレイズバックルから言うとフィーバースロットバックル、コマンドツインバックル、ゾンビバックル、ブーストマークIIバックル、ブーストマークIXバックル、ジャマトバックルでライドウォッチはジオウライドウォッチ、ジオウトリニティライドウォッチ、ゲイツリバイブライドウォッチです。"
    },
    { 
      src: rizb2, 
      alt: isEnglish ? "Raisebuckle and RideWatch 2" : "レイズバックルとライドウォッチ２",
      title: isEnglish ? "Raisebuckle and RideWatch 2" : "レイズバックルとライドウォッチ２",
      description: isEnglish ? "From the Raise Buckle, we have the Buzin Sword Buckle, the Ride Watches are the Zi-O Ride Watch II and the Gates Ride Watch. Other items include the Geets weapon Raging Sword and the Den-O weapon Dengashar. All are DX versions." : "レイズバックルから言うとブジンソードバックル、ライドウォッチはジオウライドウォッチII、ゲイツライドウォッチ。その他でギーツの武器のレイジングソード、電王の武器のデンガッシャーです。全部DX版です。"
    },
    { 
      src: zron, 
      alt: isEnglish ? "Vision Driver" : "ヴィジョンドライバー",
      title: isEnglish ? "Vision Driver" : "ヴィジョンドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider Geats." : "仮面ライダーギーツに登場するベルト。"
    },
    { 
      src: gzron, 
      alt: isEnglish ? "Gillion Driver" : "ジリオンドライバー",
      title: isEnglish ? "Gillion Driver" : "ジリオンドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider Geats." : "仮面ライダーギーツに登場するベルト。"
    },
    { 
      src: zku, 
      alt: isEnglish ? "Ziku Driver" : "ジクウドライバー",
      title: isEnglish ? "Ziku Driver" : "ジクウドライバー",
      description: isEnglish ? "The belt that appears in Kamen Rider Zi-O." : "仮面ライダージオウに登場するベルト。"
    },
    { 
      src: oum, 
      alt: isEnglish ? "Ohma Zi-O Driver" : "オウマジオウドライバー",
      title: isEnglish ? "Ohma Zi-O Driver" : "オウマジオウドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider Zi-O." : "仮面ライダージオウに登場するベルト。"
    },
    { 
      src: sun, 
      alt: isEnglish ? "Century King Sun Driver" : "世紀王サンドライバー",
      title: isEnglish ? "Century King Sun Driver" : "世紀王サンドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider BLACKSUN. The first belt with automatic transformation. CSM version." : "仮面ライダーBLACKSUNに登場するベルト。初の自動変形のベルト。CSM版。"
    },
    { 
      src: moon, 
      alt: isEnglish ? "Century King Moon Driver" : "世紀王ムーンドライバー",
      title: isEnglish ? "Century King Moon Driver" : "世紀王ムーンドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider BLACKSUN. This is also a belt with automatic transformation. CSM version." : "仮面ライダーBLACKSUNに登場するベルト。これも自動変形するベルト。CSM版。"
    },
    { 
      src: sngk, 
      alt: isEnglish ? "Sengoku Driver" : "戦極ドライバー",
      title: isEnglish ? "Sengoku Driver" : "戦極ドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider Gaim.CSM version." : "仮面ライダー鎧武に登場するベルト。CSM版。"
    },
    { 
      src: gnssdriver, 
      alt: isEnglish ? "Genesis Driver" : "ゲネシスドライバー",
      title: isEnglish ? "Genesis Driver" : "ゲネシスドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider Gaim.CSM version." : "仮面ライダー鎧武に登場するベルト。CSM版。"
    },
    { 
      src: oz, 
      alt: isEnglish ? "OOO Driver" : "オーズドライバー",
      title: isEnglish ? "OOO Driver" : "オーズドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider OOO.CSM version." : "仮面ライダーオーズに登場するベルト。CSM版。"
    },
    { 
      src: kbt_bath, 
      alt: isEnglish ? "Kabuto Zector and Birth Driver" : "バースドライバーとカブトゼクター",
      title: isEnglish ? "Kabuto Zector and Birth Driver" : "バースドライバーとカブトゼクター",
      description: isEnglish ? "The belts featured in Kamen Rider Kabuto and Kamen Rider OOO.CSM version." : "画像左が仮面ライダーカブトに登場するベルト。画像右は仮面ライダーオーズに登場するベルト。CSM版。"
    },
    { 
      src: dbr, 
      alt: isEnglish ? "Double Driver" : "ダブルドライバー",
      title: isEnglish ? "Double Driver" : "ダブルドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider W.CSM version." : "仮面ライダーダブルに登場するベルト。CSM版。"
    },
    { 
      src: x_f, 
      alt: isEnglish ? "Extreme Memory and Fang Memory" : "エクストリームメモリとファングメモリ",
      title: isEnglish ? "Extreme Memory and Fang Memory" : "エクストリームメモリとファングメモリ",
      description: isEnglish ? "The memories featured in Kamen Rider W.CSM version." : "仮面ライダーダブルに登場するメモリ。CSM版"
    },
    { 
      src: skr, 
      alt: isEnglish ? "Lost Driver" : "ロストドライバー",
      title: isEnglish ? "Lost Driver" : "ロストドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider W.CSM version." : "仮面ライダーダブルに登場するベルト。CSM版。"
    },
    { 
      src: ac, 
      alt: isEnglish ? "Accel Driver" : "アクセルドライバー",
      title: isEnglish ? "Accel Driver" : "アクセルドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider W.CSM version." : "仮面ライダーダブルに登場するベルト。CSM版。"
    },
    { 
      src: denoue, 
      alt: isEnglish ? "Gao Belt" : "ガオウベルト",
      title: isEnglish ? "Gao Belt" : "ガオウベルト",
      description: isEnglish ? "The belt featured in Kamen Rider Den-O.Changing the buckle lets you use it as a different rider's.CSM version." : "仮面ライダー電王に登場するベルト。バックルを変えると別ライダーのにできる。CSM版。"
    },
    { 
      src: zrns, 
      alt: isEnglish ? "Zeronosu Belt" : "ゼロノスベルト",
      title: isEnglish ? "Zeronosu Belt" : "ゼロノスベルト",
      description: isEnglish ? "The belt featured in Kamen Rider Den-O.CSM version." : "仮面ライダー電王に登場するベルト。CSM版。"
    },
    { 
      src: mpd, 
      alt: isEnglish ? "Decade Driver" : "ディケイドライバー",
      title: isEnglish ? "Decade Driver" : "ディケイドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider Decade.CSM version." : "仮面ライダーディケイドに登場するベルト。CSM版。"
    },
    { 
      src: diend, 
      alt: isEnglish ? "Diend Driver" : "ディエンドライバー",
      title: isEnglish ? "Diend Driver" : "ディエンドライバー",
      description: isEnglish ? "The belt featured in Kamen Rider Decade.CSM version." : "仮面ライダーディケイドに登場するベルト。CSM版。"
    },
    { 
      src: breid, 
      alt: isEnglish ? "Blay Rouzer" : "ブレイラウザー",
      title: isEnglish ? "Blay Rouzer" : "ブレイラウザー",
      description: isEnglish ? "The weapon featured in Kamen Rider Blade.CSM version." : "仮面ライダー剣に登場する武器。CSM版。"
    },
    { 
      src: garren, 
      alt: isEnglish ? "Garren Rouzer" : "ギャレンラウザー",
      title: isEnglish ? "Garren Rouzer" : "ギャレンラウザー",
      description: isEnglish ? "The weapon featured in Kamen Rider Blade.CSM version." : "仮面ライダー剣に登場する武器。CSM版。"
    },
    { 
      src: krs, 
      alt: isEnglish ? "Karisu Rouzer" : "カリスラウザー",
      title: isEnglish ? "Karisu Rouzer" : "カリスラウザー",
      description: isEnglish ? "The weapon featured in Kamen Rider Blade.CSM version." : "仮面ライダー剣に登場する武器。CSM版。"
    },
    { 
      src: krsar, 
      alt: isEnglish ? "Various belts, etc." : "色々なベルト等",
      title: isEnglish ? "Various belts, etc." : "色々なベルト等",
      description: isEnglish ? "Various belts are shown. Visible ones include the Blade Sword, Calis Arrow, Drive Driver, Mach Driver, Gatcha Driver, Arc Driver, Dread Driver, and Evol Driver. Not shown but located below are the V Buckle, Zero One Driver, Break Buckle, Gallen Buckle, and others." : "色々なベルトが写ってる。見える範囲だと武刃ソード、カリスアロー、ドライブドライバー、マッハドライバー、ガッチャードライバー、アークドライバー、ドレッドライバー、エボルドライバー。写ってないけど下にあるのはVバックル、ゼロワンドライバー、ブレイバックル、ギャレンバックルなど。"
    },
    { 
      src: faizedge, 
      alt: isEnglish ? "Faiz Edge" : "ファイズエッジ",
      title: isEnglish ? "Faiz Edge" : "ファイズエッジ",
      description: isEnglish ? "The weapon featured in Kamen Rider Faiz.CSM version." : "仮面ライダーファイズに登場する武器。CSM版。"
    }

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % homeImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + homeImages.length) % homeImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="home-title">
            {isEnglish ? "Sota Takigawa's Portfolio Site" : '瀧川 颯太の紹介サイト'}
          </h1>
          <p className="hero-subtitle">
            {isEnglish 
              ? 'Introducing my background, personality, hobbies, favorite things, and learning goals'
              : '私の生まれや性格、趣味、好きなもの、学習目標について紹介します'
            }
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => onNavigate('about')} 
              className="btn btn-primary"
            >
              {isEnglish ? 'View Profile' : '自己紹介を見る'}
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-secondary"
            >
              {isEnglish ? 'Contact' : 'お問い合わせ'}
            </button>
          </div>
        </div>
      </section>
      
      <section className="home-preview">
        <div className="container">
          <div className="preview-section">
            <h2 className="section-title">
              {isEnglish ? 'About Me' : '私について'}
            </h2>
            <div className="preview-grid">
              <div className="preview-card" onClick={() => onNavigate('about')}>
                <h3>{isEnglish ? 'Profile' : '概要'}</h3>
                <p>{isEnglish ? 'Page about my background and personality' : '私の生まれや性格などについてのページです'}</p>
              </div>
            </div>
          </div>

          <div className="preview-section">
            <h2 className="section-title">
              {isEnglish ? 'Interests & Hobbies' : '趣味・興味'}
            </h2>
            <div className="preview-grid">
              <div className="preview-card" onClick={() => onNavigate('hobby')}>
                <h3>{isEnglish ? 'Hobbies' : '趣味'}</h3>
                <p>{isEnglish ? 'What I like about games and reading' : 'ゲームと読書のどこが好きか教えるページです'}</p>
              </div>
              <div className="preview-card" onClick={() => onNavigate('favorites')}>
                <h3>{isEnglish ? 'Favorites' : '好きなもの'}</h3>
                <p>{isEnglish ? 'About my favorite things like Kamen Rider and VTubers' : '好きなものである仮面ライダーとVtuberについて教えるページです'}</p>
              </div>
            </div>
          </div>

          <div className="preview-section">
            <h2 className="section-title">
              {isEnglish ? 'Learning & Goals' : '学習・目標'}
            </h2>
            <div className="preview-grid">
              <div className="preview-card" onClick={() => onNavigate('projects')}>
                <h3>{isEnglish ? 'Learning Goals' : '勉強したいこと、意気込み'}</h3>
                <p>{isEnglish ? 'About what I\'m studying and want to learn' : '今勉強してることやしていきたいことについてのページです'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="portfolio-slider-section">
        <div className="container">
          <h2 className="section-title">
            {isEnglish ? 'My Belt Collection' : '私が持っているベルト紹介'}
          </h2>
          
          <div className="portfolio-slider">
            <div className="slider-container">
              <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous image">
                &#8249;
              </button>
              
              <div className="slider-wrapper">
                <div 
                  className="slider-track" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {homeImages.map((image, index) => (
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
              {homeImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            {/* 説明テキスト */}
            <div className="slide-description">
              <h3 className="slide-title">{homeImages[currentSlide].title}</h3>
              <p className="slide-text">{homeImages[currentSlide].description}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-cta">
            <h2>{isEnglish ? 'Contact' : '問い合わせ'}</h2>
            <p>{isEnglish ? 'Feel free to contact me' : 'お問い合わせはこちらから'}</p>
            <button 
              onClick={() => onNavigate('contact')} 
              className="btn btn-contact"
            >
              {isEnglish ? 'Contact Me' : 'お問い合わせ'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home