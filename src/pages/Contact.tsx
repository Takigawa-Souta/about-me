import { useState } from 'react'
import './Contact.css'
import { useScrollPosition } from '../hooks/useScrollPosition';

interface ContactProps {
  isEnglish: boolean
}

function Contact({ isEnglish }: ContactProps) {
  useScrollPosition('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信の処理をここに追加
    const message = isEnglish ? 'Message sent! (Demo)' : 'メッセージが送信されました！（デモ用）'
    alert(message)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">
            {isEnglish ? 'Contact Page' : 'お問い合わせページ'}
          </h1>
          <p className="contact-content">
            {isEnglish 
              ? 'This page is for those who want to contact me. If you have any questions or consultations, please contact me at the email address below.'
              : 'このページでは私に連絡を取りたい方のためのページです。\n何か質問や相談がある方は以下のメールアドレスまでご連絡ください。'
            }
          </p>
          <p className="contact-email">
            {isEnglish ? 'Email address: xxxxxxxxxxx@gmail.com' : 'メールアドレス: xxxxxxxxxxx@gmail.com'}
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>{isEnglish ? 'Contact Information' : '連絡先情報'}</h2>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>xxxxxxxxxxx@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h3>{isEnglish ? 'Phone' : '電話'}</h3>
                <p>{isEnglish ? 'Please contact us by email' : 'お問い合わせはメールでお願いします'}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>{isEnglish ? 'Location' : '所在地'}</h3>
                <a 
                    href="https://www.google.com/maps/place/Shiga+Prefecture" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="location-link"
                >
                <p>{isEnglish ? 'Shiga Prefecture, Japan' : '滋賀県'}</p>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>{isEnglish ? 'Contact Form' : 'お問い合わせフォーム'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  {isEnglish ? 'Name *' : 'お名前 *'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isEnglish ? 'Enter your name' : 'お名前を入力してください'}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  {isEnglish ? 'Email Address *' : 'メールアドレス *'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={isEnglish ? 'Enter your email address' : 'メールアドレスを入力してください'}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  {isEnglish ? 'Subject' : '件名'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={isEnglish ? 'Enter subject' : '件名を入力してください'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  {isEnglish ? 'Message *' : 'メッセージ *'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={isEnglish ? 'Enter your message here...' : 'メッセージを入力してください...'}
                  required
                  rows={6}
                />
              </div>
              
              <button type="submit" className="submit-btn">
                {isEnglish ? 'Send' : '送信'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
