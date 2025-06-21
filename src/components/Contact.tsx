import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2>連絡先</h2>
      <div className="contact-links">
        <a href="mailto:example@email.com" className="contact-link">
          📧 メール
        </a>
        <a href="https://github.com/example" className="contact-link" target="_blank" rel="noopener noreferrer">
          🐙 GitHub
        </a>
        <a href="https://twitter.com/example" className="contact-link" target="_blank" rel="noopener noreferrer">
          🐦 Twitter
        </a>
      </div>
    </section>
  )
}

export default Contact