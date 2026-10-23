import { Link } from 'react-router-dom'
import { ReactTyped } from 'react-typed'
import avatar from '../assets/avatar.jpg'

const getAge = (dateOfBirth) => {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)

    let age = today.getFullYear() - birthDate.getFullYear()

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
            today.getDate() < birthDate.getDate())
    ) {
        age--
    }

    return age
}

const Home = () => {
    return (
        <div className="flex items-center justify-center px-4 py-4">
            <section className="w-full max-w-2xl space-y-6 text-center">
                <div className="relative mx-auto size-48 overflow-hidden rounded-full shadow-[0_0_15px_5px_rgba(147,197,253,0.6)] ring-4 ring-gray-500/60 transition-all duration-300 hover:shadow-[0_0_20px_8px_rgba(147,197,253,0.9)] hover:ring-gray-500 sm:size-64 md:size-80">
                    <img
                        src={avatar}
                        alt="Portrait of Sebastian Degerman"
                        className="size-full scale-90 rounded-full object-cover transition-transform duration-300 hover:scale-100"
                    />
                </div>

                <h1 className="text-3xl font-medium">
                    My name is Sebastian Degerman
                </h1>

                <p className="min-h-7 text-lg font-semibold">
                    <ReactTyped
                        strings={[
                            'I primarily work as a frontend developer',
                            'I sometimes do backend',
                            'I help code find its way to the cloud',
                            'I used to work as a teacher',
                        ]}
                        typeSpeed={40}
                        backSpeed={30}
                        backDelay={2000}
                        loop
                    />
                </p>

                <div className="space-y-4 text-base leading-relaxed text-base-content/70">
                    <p>
                        I am {getAge('1989-10-12')} years old and currently work
                        as a consultant at Consid, focusing primarily on
                        frontend development.
                    </p>

                    <p>
                        I am <s>fullstack</s>, but I don't really like that
                        expression. I work daily with web technologies such as
                        HTML, CSS and JavaScript.
                    </p>

                    <p>
                        I enjoy working with React, Vue, Node.js, C#, REST APIs,
                        cloud platforms and CMS solutions.
                    </p>

                    <p>
                        Want to get in touch? Drop me an{' '}
                        <a
                            className="font-semibold underline underline-offset-4 transition-colors hover:text-primary"
                            href="mailto:sebbed89@hotmail.com"
                        >
                            email
                        </a>{' '}
                        or use my{' '}
                        <Link
                            className="font-semibold underline underline-offset-4 transition-colors hover:text-primary"
                            to="/contact"
                        >
                            contact form
                        </Link>
                        .
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        to="/repos"
                        className="inline-flex items-center text-md underline underline-offset-4 animate-pulse"
                    >
                        Look at my repositories
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home