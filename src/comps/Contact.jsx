import { useForm, ValidationError } from '@formspree/react'
import '../styles/Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm("moqglkbl");
  return (
    <div className="form-wrapper">
      <h1 className="form-h1">Contact</h1>
      <div className="terminal-menu">
        <div className="terminal-btns terminal-close"></div>
        <div className="terminal-btns terminal-minimize"></div>
        <div className="terminal-btns terminal-zoom"></div>
      </div>
      <div className="terminal-screen">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">
              Din email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              placeholder="✉️"
              required
            />
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="error"
          />
          <div className="form-group">
            <label htmlFor="message">
              Ditt meddelande
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              required
            />
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="error"
          />
          <button className="submit-btn" type="submit" disabled={state.submitting}>
            Kontakta mig
          </button>
        </form>
        {state.succeeded &&
          <p className="success">Thanks for contacting me, I will get back to you when I have time.</p>
        }
      </div>
    </div>
  )
}

export default Contact