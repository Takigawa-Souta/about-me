import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>私の紹介</h1>
      <h2 className={styles.subtitle}>概要</h2>
      <p>生まれは滋賀県で現在も滋賀で活動中。主にプログラミングの基礎やシステム、セキュリティ関連を勉強中。京都デザイン＆テクノロジー専門学校に所属しており、スーパーITエンジニア専攻で学んでいます。好きなもの、趣味、性格、おすすめなものはABOUTにて記載</p>
    </div>
  )
}

export default Home
  