import { useForm, ValidationError } from '@formspree/react'
import SectionTitle from '../components/SectionTitle'

const Contact = () => {
    const [state, handleSubmit, reset] = useForm("moqglkbl")

    return (
        <section className="max-w-md mx-auto px-4 py-12 space-y-6">
            <SectionTitle title="Contact me" />
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Namn"
                    className="input input-bordered w-full"
                    required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm" />

                <input
                    type="email"
                    name="email"
                    placeholder="E-post"
                    className="input input-bordered w-full"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm" />

                <textarea
                    name="message"
                    placeholder="Meddelande"
                    className="textarea textarea-bordered w-full"
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm" />

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 cursor-pointer rounded-md font-semibold transition-colors duration-300 bg-primary
                    text-white hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed dark:bg-primary-dark dark:hover:bg-primary"
                >
                    Send message
                </button>
            </form>

            {state.succeeded && (
                <div className="mt-5 p-4 bg-green-50 dark:bg-green-900 rounded-md shadow-md text-center">
                    <p className="text-green-700 dark:text-green-300 mb-4">
                        Thanks for contacting me.<br />
                        I will reply as soon as I can! 👏⌛
                    </p>
                    <button
                        onClick={reset}
                        className="w-full py-3 cursor-pointer rounded-md font-semibold border border-green-700 text-green-700 hover:bg-green-100
                        dark:border-green-300 dark:text-green-300 dark:hover:bg-green-800 transition-colors duration-300"
                    >
                        Reset form
                    </button>
                </div>
            )}
        </section>
    )
}

export default Contact