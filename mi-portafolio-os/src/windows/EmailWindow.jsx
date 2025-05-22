import { useContext, useRef, useState } from 'react';
import Window from '../components/Window';
import { WindowContext } from '../context/WindowContext';
import WindowContent from '../components/WindowContent';
import emailjs from '@emailjs/browser';
import '../styles/email.css';

function EmailWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

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
      .catch(() => setError('Error al enviar el mensaje. Intenta de nuevo.'));
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
                <h3>Mail Sent Succesfully!</h3>
                <p>Ill get in contact with you very soon! 💜</p>
            </div>
            ) : (
            <form ref={form} onSubmit={sendEmail} className="email-form">
                <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                    Want to get in touch?
                </h1>
                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW52MHBhaG50cTVmMXQxNmZwcWw0M3l2NmVxaTI3anpraWVwOThzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LHZyixOnHwDDy/giphy.gif" alt="Michi-Gif"/>

                <p className="email-intro">
                    You can send me an email if you like, I'll be happy to get in touch with you! :D
                </p>

                <div className="email-grid">
                    <input type="text" name="user_name" placeholder="Your Name" required />
                    <input type="email" name="user_email" placeholder="Your Mail" required />
                </div>

                <input type="text" name="subject" placeholder="Subject" required className="email-subject" />

                <textarea name="message" placeholder="Your message here.." required rows={5} />

                <button type="submit">Send</button>

                {error && <div className="email-error">{error}</div>}
            </form>
            )}

    </Window>
  );
}

export default EmailWindow;
