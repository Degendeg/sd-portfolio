import '../styles/Form.css'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("moqglkbl");
    return (
        <>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
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
                        Your message
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
                    Submit
                </button>
            </form>
            {state.succeeded &&
                <p className="success">Thanks for contacting me, I will get back to you when I have time.</p>
            }
        </>
    )
}

export default ContactForm