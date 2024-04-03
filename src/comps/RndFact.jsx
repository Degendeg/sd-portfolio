import { useState, useEffect } from 'react';

const RndFact = ({ itemsRef, isDark, ReactTyped }) => {
  const randomFacts = [
    { header: 'Kattägare', text: 'Min katt heter Elda och är 8 år gammal. Hon är en vanlig men underbar bondkatt.' },
    { header: 'Tvillingpappa', text: 'Mina barn heter Alice och Ella och är födda 2023, så dem är små och livliga!' },
    { header: 'Datorspelare', text: 'Jag har spelat datorspel sedan barnsben. The Sims, Warcraft, C&C, Sudden Strike, CS, WoW, DotA 2, RL, The Long Dark mfl..' },
    { header: 'Utövar sport', text: 'Trots att min familj tar upp majoriteten av min tid så försöker jag att träna, det blir mest padel och innebandy. Tycker ishockey och fotboll är roligt också!' },
    { header: 'Favoritfilmer', text: 'Det är svårt att bara välja en favoritfilm så jag nämner flera.. där ingår Star Wars (4,5,6), Gladiator, Goodfellas, Shawshank Redemption samt Interstellar.' },
    { header: 'Bästa TV-serier', text: 'Det är svårt att bara välja en serie så jag nämner flera.. Entourage, Breaking Bad, Prison Break, The Big Bang Theory, Stargate SG-1 mfl..' },
  ];

  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFactIndex(prevIndex => (prevIndex + 1) % randomFacts.length);
    }, 5000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`container third ${isDark ? 'third-bg-dark' : 'third-bg-light'}`}>
      <h1 className="rnd-fact-h1"><ReactTyped strings={["Random facts about me"]} typeSpeed={60} /></h1>
      <div className="item" ref={itemsRef}>
        <div className="img img-first"></div>
        <div className="card">
          <h3>{randomFacts[factIndex].header}</h3>
          <p>{randomFacts[factIndex].text}</p>
        </div>
      </div>
    </div>
  );
};

export default RndFact;
