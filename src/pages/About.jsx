import { useEffect, useState } from 'react'
import cat from '../assets/cat.jpg'
import SectionTitle from '../components/SectionTitle'
import DOMPurify from 'dompurify'

const randomFacts = [
    {
        header: 'Cat Owner',
        text: 'My cat is named Elda and she came to me a few weeks old back in 2016. She is just a farmers cat but a loved family member, see <strong>expandable</strong> image below. 🐈'
    },
    {
        header: 'Dad',
        text: 'My childrens names are Alice and Ella and they were born in late 2023, so they are small and lively! <br/> Yes, they are <u>twins</u>! 👶👶'
    },
    {
        header: 'Gamer',
        text: 'I have been playing video games since childhood. CS, WoW, DotA, RL, PUBG, The Long Dark and many more. 🖥️'
    },
    {
        header: 'Sports Enthusiast',
        text: 'Even though my family takes up most of my time, I still try to exercise, mostly playing padel and floorball. I also enjoy ice hockey and football! 🎾🏑'
    },
    {
        header: 'Favorite Movies',
        text: 'It is difficult to choose just one favorite movie, so I will mention several.. including Star Wars (4,5,6), Gladiator, Goodfellas, Shawshank Redemption and Interstellar. 🎞️'
    },
    {
        header: 'Favorite TV Shows',
        text: 'It is difficult to choose just one TV series, so I will mention several.. Entourage, Breaking Bad, Prison Break, The Big Bang Theory, Stargate SG-1 and many more. 📺'
    },
]

const About = () => {
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if (!expanded) return

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setExpanded(false)
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [expanded])

    return (
        <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-4">
            <SectionTitle title="About me" />

            <div className="grid gap-5 md:grid-cols-2">
                {randomFacts.map(({ header, text }) => {
                    const isCat = header === 'Cat Owner'

                    return (
                        <article
                            key={header}
                            className={`rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${isCat ? 'md:col-span-2' : ''
                                }`}
                        >
                            <div
                                className={
                                    isCat
                                        ? 'grid gap-6 md:grid-cols-2 md:items-center'
                                        : 'space-y-3'
                                }
                            >
                                <div className="space-y-3">
                                    <h2 className="text-lg font-semibold tracking-tight">
                                        {header}
                                    </h2>

                                    <div className="h-1 w-10 rounded-full bg-primary/70" />

                                    <p className="text-base-content/80 leading-relaxed">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(text),
                                            }}
                                        />
                                    </p>
                                </div>

                                {isCat && (
                                    <div className="flex justify-start md:justify-center">
                                        <button
                                            type="button"
                                            onClick={() => setExpanded(true)}
                                            aria-label="Expand image of Elda"
                                            className="group relative aspect-square w-32 shrink-0 cursor-zoom-in overflow-hidden rounded-2xl border border-base-300 bg-base-200/50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-40"
                                        >
                                            <img
                                                src={cat}
                                                alt="Elda the cat"
                                                loading="lazy"
                                                className="size-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                                            />

                                            <span
                                                aria-hidden="true"
                                                className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-base-100/90 text-base-content shadow-sm transition-transform duration-300 group-hover:scale-110"
                                            >
                                                ⤢
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </article>
                    )
                })}
            </div>
            <div
                aria-hidden={!expanded}
                onClick={() => setExpanded(false)}
                className={`!m-0 fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-all duration-300 ${expanded
                    ? 'visible opacity-100'
                    : 'invisible pointer-events-none opacity-0'
                    }`}
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo of Elda"
                    onClick={(event) => event.stopPropagation()}
                    className={`relative max-w-[92vw] transition-all duration-300 ease-out ${expanded
                        ? 'translate-y-0 scale-100'
                        : 'translate-y-3 scale-95'
                        }`}
                >
                    <button
                        type="button"
                        onClick={() => setExpanded(false)}
                        aria-label="Close image"
                        className="absolute right-3 top-3 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur transition-colors hover:bg-black/80"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="size-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>

                    <img
                        src={cat}
                        alt="Elda the cat"
                        className="block max-h-[82vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
                    />

                    <p className="mt-3 text-center text-sm text-white/70">
                        Elda · Click outside or press Esc to close
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About