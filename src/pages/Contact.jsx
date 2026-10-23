import { useForm, ValidationError } from '@formspree/react'
import SectionTitle from '../components/SectionTitle'

const Contact = () => {
    const [state, handleSubmit, reset] = useForm('moqglkbl')

    const inputStyles =
        'w-full rounded-lg border border-base-300 bg-base-100 px-4 py-3 text-base-content placeholder:text-base-content/40 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15'

    const labelStyles = 'mb-2 block text-sm font-medium text-base-content/80'

    return (
        <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-4">
            <SectionTitle title="Contact me" />

            <div className="mx-auto max-w-2xl rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
                {!state.succeeded ? (
                    <>
                        <div className="mb-8 space-y-2">
                            <h2 className="text-xl font-semibold tracking-tight">
                                Let's talk
                            </h2>
                            <p className="text-sm leading-relaxed text-base-content/65">
                                Have a question, an idea, or just want to say hello?
                                Send me a message.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className={labelStyles}>
                                    Your name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className={inputStyles}
                                    autoComplete="name"
                                    required
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                    className="mt-2 block text-sm text-error"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className={labelStyles}>
                                    Your email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className={inputStyles}
                                    autoComplete="email"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className="mt-2 block text-sm text-error"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className={labelStyles}>
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="What's on your mind?"
                                    rows={5}
                                    className={`${inputStyles} min-h-36 resize-y`}
                                    required
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="mt-2 block text-sm text-error"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-content transition-all duration-200 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {state.submitting ? 'Sending message...' : 'Send message'}
                                {!state.submitting && (
                                    <span aria-hidden="true" className="transition-transform duration-200">
                                        ⟶
                                    </span>
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="flex flex-col items-center py-8 text-center">
                        <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-success/10 text-success">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="size-7"
                                aria-hidden="true"
                            >
                                <path
                                    d="m5 12 4 4L19 6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <h2 className="text-xl font-semibold tracking-tight">
                            Message sent!
                        </h2>

                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-base-content/65">
                            Thanks for reaching out. I'll get back to you as soon as I can.
                        </p>

                        <button
                            type="button"
                            onClick={reset}
                            className="mt-6 rounded-lg border border-base-300 bg-base-300 cursor-pointer px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Send another message
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Contact