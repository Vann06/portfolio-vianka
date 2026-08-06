import { useContext, useRef, useState } from 'react';
import Window from '../components/Window';
import { WindowContext } from '../context/WindowContext';
import WindowContent from '../components/WindowContent';
import emailjs from '@emailjs/browser';
import '../styles/email.css';
import '../styles/buttons.css'
import { useTranslation } from 'react-i18next';

function EmailWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);
    emailjs
      .sendForm(
        'service_l61wvlo',
        'template_e2x636i',
        form.current,
        'bHflgf4Viy9YX7nMB'
      )
      .then(() => setSent(true))
  .catch(() => setError(t('emailForm.error')));
  };

  return (
    <Window
      title="contact"
      zIndex={zIndex}
      onClose={() => closeWindow('contact')}
      onFocus={() => bringToFront('contact')}
    >

    {sent ? (
            <div className="email-success">
                <div className="emoji-bounce">:3</div>
        <h3>{t('emailForm.successTitle')}</h3>
        <p>{t('emailForm.successSubtitle')}</p>
            </div>
            ) : (
            <form ref={form} onSubmit={sendEmail} className="email-form">
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{t('emailForm.title')}</h1>
                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW52MHBhaG50cTVmMXQxNmZwcWw0M3l2NmVxaTI3anpraWVwOThzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LHZyixOnHwDDy/giphy.gif" alt="Michi-Gif"/>

        <p className="email-intro">{t('emailForm.intro')}</p>

                <div className="email-grid">
          <input type="text" name="user_name" placeholder={t('emailForm.name')} required />
          <input type="email" name="user_email" placeholder={t('emailForm.email')} required />
                </div>

        <input type="text" name="subject" placeholder={t('emailForm.subject')} required className="email-subject" />

        <textarea name="message" placeholder={t('emailForm.message')} required rows={5} />

        <button className='btn'>{t('emailForm.send')}</button>

        {error && <div className="email-error">{error}</div>}
            </form>
            )}

    </Window>
  );
}

export default EmailWindow;
