import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.png'
import { ReactTyped } from 'react-typed'

const Home = () => {
    const getAge = dob =>
        new Date().getFullYear() - new Date(dob).getFullYear() - (new Date() < new Date(new Date().getFullYear() + '-' + dob.slice(5)) ? 1 : 0)

    return (
        <div className="flex items-center justify-center px-4 py-12 space-y-6">
            <section className="max-w-2xl text-center space-y-6">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto relative ring-4 ring-gray-500 ring-opacity-60 hover:ring-opacity-100 shadow-[0_0_15px_5px_rgba(147,197,253,0.6)] hover:shadow-[0_0_20px_8px_rgba(147,197,253,0.9)] transition-all duration-300">
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="w-full h-full object-cover rounded-full scale-90 transition-transform duration-300 hover:scale-100"
                    />
                </div>

                <h1 className="mt-10 text-3xl font-medium">My name is Sebastian Degerman 👋</h1>

                <p className="text-lg font-semibold">
                    <ReactTyped
                        strings={['I work as a frontend developer', 'I work as a backend developer', 'I work as a teacher']}
                        typeSpeed={40}
                        backSpeed={30}
                        backDelay={2000}
                        loop
                    />
                </p>

                <p className="text-md text-base-content/70 leading-relaxed">
                    I am {getAge('1989-10-12')} years old. I currently work as a consultant at Consid with almost all my focus on frontend. I am <s>fullstack</s>, but I don't like that expression.<br />
                    I work daily with common web techniques such as HTML, CSS and JavaScript.<br />
                    I like React, Vue, Node.js, C#, REST APIs, Cloud platform(s)/services & CMSes.<br /><br />
                    Use my <a className="underline font-semibold" href="mailto:sebbed89@hotmail.com">mail</a> ✉️ or <Link className="underline font-semibold" to="/contact">contact form</Link> 📝 if you wish to get in contact with me.
                </p>

                <Link
                    to="/projects"
                    className="inline-flex items-center text-md underline underline-offset-4 animate-pulse"
                >
                    Look at my projects
                </Link>
            </section>
        </div>
    )
}

export default Home