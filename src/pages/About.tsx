import '../pages/About.css';
import { useScrollPosition } from '../hooks/useScrollPosition';
import type { BasePageProps } from '../types';
import { mbti } from "../assets/images";

function About({ isEnglish }: BasePageProps) {
  useScrollPosition('about');
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="overview-title-section">
          <h1 className="overview-title">
            {isEnglish 
              ? "This page introduces me, Sota Takigawa" 
              : "このページは私、瀧川颯太のことを紹介するページです"
            }
          </h1>
        </div>
        
        <div className="about-content">
          <div className="about-details">
            <h2>{isEnglish ? 'Self Introduction' : '自己紹介'}</h2>
            <p className="overview-content">
              {isEnglish 
                ? "I've mentioned this many times, but my name is Sota Takigawa. I was born in Shiga Prefecture and have lived there for 18 years."
                : "何度も書いてますが私の名前は瀧川颯太です\n私は滋賀県で生まれて18年間滋賀に住んでます。"
              }
            </p>
            <p className="overview-content">
              {isEnglish 
                ? "People often say I'm serious, and I like to proceed and manage things efficiently. My MBTI type is INTJ (The Architect)."
                : "性格は真面目と言われることが多く効率的に物事を進めたり動かしたりすることが好きです\nMBTIではINTJで建築者です"
              }
            </p>
            <p className="overview-content">
              {isEnglish 
                ? "My strength is observing my surroundings well and turning that into my own power or helping others. What I'm not good at is getting deeply involved with people or approaching them first. I'm also not good at teaching others, so I want to improve that."
                : "特技は周りをよくみて観察し自分の力にしたり手助けすることです。\n苦手なことは人と深く関わったり自分から話しかけることです。また人に教えることも苦手なので治していきたいなと思っています"
              }
            </p>
          </div>
        </div>
        
        <div className="about-image-section">
          <div className="about-card">
            <div className="about-card-image">
              <img 
                src={mbti}
                alt={isEnglish ? "MBTI INTJ Architect personality type" : "MBTI INTJ 建築者タイプ"}
              />
            </div>
            <div className="about-card-content">
              <h3 className="about-card-title">
                {isEnglish ? "INTJ - The Architect" : "INTJ - 建築者"}
              </h3>
              <p className="about-card-description">
                {isEnglish 
                  ? "A strategic and independent personality type. Known for their analytical thinking and ability to see the big picture while focusing on long-term goals."
                  : "戦略的で独立性の高い性格タイプ。分析的思考と長期的な目標に焦点を当てながら全体像を把握する能力で知られています。"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About