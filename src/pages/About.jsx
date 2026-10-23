import { useState } from 'react'
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
                                            onClick={() => setExpanded(!expanded)}
                                            aria-expanded={expanded}
                                            aria-label={expanded ? 'Minimize image of Elda' : 'Expand image of Elda'}
                                            title={expanded ? 'Click to minimize' : 'Click to expand'}
                                            className={`group block cursor-pointer max-w-full overflow-hidden rounded-xl transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${expanded ? 'w-full' : 'w-24'
                                                }`}
                                        >
                                            <div className="flex min-h-24 items-center justify-center">
                                                <img
                                                    src={cat}
                                                    alt="Elda the cat"
                                                    loading="lazy"
                                                    className={`block h-auto max-h-[420px] w-full rounded-xl object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${expanded ? 'scale-100' : 'scale-100 group-hover:scale-105'
                                                        }`}
                                                />
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default About