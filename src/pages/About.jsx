import { useState } from 'react'
import cat from '../assets/cat.jpg'
import SectionTitle from '../components/SectionTitle'

const randomFacts = [
    {
        header: 'Cat Owner',
        text: 'My cat is named Elda and she came to me a few weeks old back in 2016. She is just a farmers cat but a loved family member, see image below. 🐈'
    },
    {
        header: 'Dad',
        text: 'My childrens names are Alice and Ella and they were born in 2023, so they are small and lively! Yes, they are <u>twins</u>! 👶👶'
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
        text: 'It is difficult to choose just one favorite movie, so I will mention several.. including Star Wars (4,5,6), Gladiator, Goodfellas, Shawshank Redemption, and Interstellar. 🎞️'
    },
    {
        header: 'Favorite TV Shows',
        text: 'It is difficult to choose just one TV series, so I will mention several.. Entourage, Breaking Bad, Prison Break, The Big Bang Theory, Stargate SG-1 and many more. 📺'
    },
]

const About = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <section className="max-w-3xl mx-auto px-4 py-12 space-y-8">
            <SectionTitle title="About me" />

            {randomFacts.map(({ header, text }, i) => (
                <div key={i} className="space-y-2">
                    <h2 className="text-lg font-semibold">{header}</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {header === 'Dad' ? (
                            <span dangerouslySetInnerHTML={{ __html: text }} />
                        ) : (
                            text
                        )}
                    </p>

                    {header.includes('Cat') && (
                        <img
                            src={cat}
                            alt="Elda the cat"
                            loading="lazy"
                            className={`rounded-lg mt-4 shadow-md cursor-pointer transition-all duration-300 ease-in-out ${expanded ? 'w-96' : 'w-24'
                                }`}
                            onClick={() => setExpanded(!expanded)}
                            title={expanded ? 'Click to minimize' : 'Click to expand'}
                        />
                    )}
                </div>
            ))}
        </section>
    )
}

export default About
