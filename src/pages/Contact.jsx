import { useForm, ValidationError } from '@formspree/react'
import SectionTitle from '../components/SectionTitle'
import { useRef } from 'react'

const Contact = () => {
    const [state, handleSubmit, reset] = useForm("moqglkbl")
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const resetHandler = () => {
        if (nameRef.current) nameRef.current.value = ''
        if (emailRef.current) emailRef.current.value = ''
        if (messageRef.current) messageRef.current.value = ''
        reset()
    }

    return (
        <section className="max-w-md mx-auto px-4 py-12 space-y-6">
            <SectionTitle title="Contact me" />
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Namn"
                    className="input input-bordered w-full"
                    ref={nameRef}
                    required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm" />

                <input
                    type="email"
                    name="email"
                    placeholder="E-post"
                    className="input input-bordered w-full"
                    ref={emailRef}
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm" />

                <textarea
                    name="message"
                    placeholder="Meddelande"
                    className="textarea textarea-bordered w-full"
                    ref={messageRef}
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm" />

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 cursor-pointer rounded-md font-semibold transition-colors duration-300
                    bg-primary text-white hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Send message
                </button>
            </form>

            {state.succeeded && (
                <div className="mt-5 p-4 bg-success/20 rounded-md shadow-md text-center">
                    <p className="text-success mb-4">
                        Thanks for contacting me.<br />
                        I will reply as soon as I can! 👏⌛
                    </p>
                    <button
                        onClick={resetHandler}
                        className="w-full py-3 cursor-pointer rounded-md font-semibold border border-success text-success
                        hover:bg-success/10 transition-colors duration-300"
                    >
                        Reset form
                    </button>
                </div>
            )}
        </section>
    )
}

export default Contact