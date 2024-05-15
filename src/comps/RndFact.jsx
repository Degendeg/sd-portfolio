import { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'react-modern-modal';
import imageSrc from '../assets/elda.jpg';
import purify from 'dompurify'

const RndFact = ({ itemsRef, isDark, ReactTyped }) => {
  const [factIndex, setFactIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (text) => {
    text.includes('image here') ? setIsOpen(true) : setIsOpen(false)
  };
  const handleClose = () => setIsOpen(false);

  const randomFacts = [
    { header: 'Cat Owner', text: 'My cats name is Elda and she is 8 years old. She is just a farmers cat but a loved family member, see <a>image here</a>.' },
    { header: 'Dad', text: 'My childrens names are Alice and Ella and they were born in 2023, so they are small and lively! Yes, they are <strong>twins</strong>!' },
    { header: 'Gamer', text: 'I have been playing video games since childhood. The Sims, Warcraft, C&C, Sudden Strike, CS, WoW, DotA 2, RL, The Long Dark, etc..' },
    { header: 'Sports Enthusiast', text: 'Even though my family takes up most of my time, I still try to exercise, mostly playing padel and floorball. I also enjoy ice hockey and football!' },
    { header: 'Favorite Movies', text: 'It is difficult to choose just one favorite movie, so I will mention several.. including Star Wars (4,5,6), Gladiator, Goodfellas, Shawshank Redemption, and Interstellar.' },
    { header: 'Favorite TV Shows', text: 'It is difficult to choose just one TV series, so I will mention several.. Entourage, Breaking Bad, Prison Break, The Big Bang Theory, Stargate SG-1, etc..' },
  ];

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
          <p onClick={(e) => handleOpen(e.target.textContent)} dangerouslySetInnerHTML={{ __html: purify.sanitize(randomFacts[factIndex].text) }}></p>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalBody>
          <img src={imageSrc} alt="" className="img-thumbnail" />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RndFact;
