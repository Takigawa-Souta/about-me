import './ContactHeader.css'

function ContactHeader() {
  return (
    <div className="contact-header">
      <div className="contact-header-content">
        <div className="contact-header-text">
          <h1>お問い合わせ</h1>
          <p>ご質問やご相談がございましたら、お気軽にご連絡ください。お仕事のご依頼もお待ちしています。</p>
        </div>
        <div className="contact-header-visual">
          <div className="contact-animation">
            <div className="message-bubble">
              <span>💬</span>
            </div>
            <div className="contact-lines">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader
