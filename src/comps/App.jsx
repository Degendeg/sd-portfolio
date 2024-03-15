import '../styles/App.css'
import Contact from './Contact'
import Toggle from './Toggle'
import imgSrc from '../assets/me.webp'
import useLocalStorage from 'use-local-storage'
import { useEffect, useRef, useState } from 'react'
import { ReactTyped } from 'react-typed'
import ToTopBtn from './ToTopBtn'
import Socials from './Socials'
import RndFact from './RndFact'

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [isDark, setIsDark] = useLocalStorage("isDark", preference)
  const [isVisible, setIsVisible] = useState(false)
  const [repos, setRepos] = useState(null)
  const [age, setAge] = useState(null)
  const aboutRef = useRef()
  const imgRef = useRef()
  const socialsRef = useRef()
  const reposRef = useRef()
  const itemsRef = useRef()
  const contactRef = useRef()

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = imgRef.current

      const offsetX = (clientX - offsetLeft) / offsetWidth - 0.5
      const offsetY = (clientY - offsetTop) / offsetHeight - 0.5

      imgRef.current.style.transform = `translate(${offsetX * 20}px, ${offsetY * 20}px)`
    }

    const handleMouseLeave = () => {
      imgRef.current.style.transform = 'none'
    }

    window.addEventListener('scroll', handleScroll)
    imgRef.current.addEventListener('mousemove', handleMouseMove)
    imgRef.current.addEventListener('mouseleave', handleMouseLeave)

    calculateAge()
    getRepos()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      imgRef.current.removeEventListener('mousemove', handleMouseMove)
      imgRef.current.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const calculateAge = () => {
    let birthdate = new Date('1989-10-12')
    let currentDate = new Date()
    let ageFromDate = currentDate.getFullYear() - birthdate.getFullYear()
    if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
      ageFromDate--
    }
    setAge(ageFromDate)
  }

  const handleScroll = () => {
    if (window.scrollY > 300) { // Adjust 300 to the desired scroll position
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const goToRef = (ref) => (e) => {
    e.preventDefault();
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  };

  const getRepos = () => {
    fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_KEY}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setRepos(data)
      })
      .catch(error => {
        console.error('Error fetching repositories:', error)
      })
  }

  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <div className={`container ${isDark ? 'container-bg-dark' : 'container-bg-light'}`}>
        <Toggle isDark={isDark} handleChange={() => setIsDark(!isDark)} />
        {isVisible && <ToTopBtn isDark={isDark} goToTop={goToTop} />}
        <h1><ReactTyped strings={["Sebastian Degerman - Frontend Developer"]} typeSpeed={60} /></h1>
        <div className="container-wrapper">
          <div className="profile-pic-wrapper">
            <img ref={imgRef} className="profile-pic" src={imgSrc} alt="" />
          </div>
          <div className="site-map">
            <a onClick={goToRef(aboutRef)}>🔗 About me</a>
            <a onClick={goToRef(socialsRef)}>🔗 My socials</a>
            <a onClick={goToRef(reposRef)}>🔗 Repositories</a>
            <a onClick={goToRef(itemsRef)}>🔗 Items</a>
            <a onClick={goToRef(contactRef)}>🔗 Contact me</a>
          </div>
        </div>
      </div>
      <div className="blank">
        <div className="blank-wrapper">
          <p ref={aboutRef}>
            My name is Sebastian Degerman, I am {age} years old.
            I currently work as a consultant at <a href="https://www.consid.com/" target="_blank">Consid</a> with almost all
            my focus on frontend.
            I work daily with common web techniques such as HTML, CSS and JavaScript. <br />
            I like React, Vue, REST APIs, Azure,
            Netlify, DatoCMS, webpack/npm.
          </p>
          <p style={{ marginTop: '0' }}>
            When I get the opportunity, I do C# and Python aswell.
            I talk to my imaginary friend ChatGPT quite alot and do <a href="https://www.codingame.com/"
              target="_blank">CodinGame</a> nowadays.
            Use my <a href="mailto:sebastian.degerman@consid.se" target="_blank">mail ✉️</a> or <a onClick={goToRef(contactRef)}>contact form</a>{" "}
            below if you wish to get in contact with me.
          </p>
        </div>
      </div>
      <Socials socialsRef={socialsRef} isDark={isDark} />
      <div className="blank">
        <div className="blank-wrapper" style={{ marginRight: '5vw' }}>
          <h1 className="socials-h1" ref={reposRef}>
            GitHub{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
              <path fill={isDark ? '#FFFFFF' : ''}
                d={`M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01
                 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09
                  2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65
                   3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z`}
              />
            </svg>
            {" "}Repos
          </h1>
          <ul className="ul-repos">
            {repos ? (
              <>
                {repos.map((r) => (
                  <li key={r.id}>
                    <a href={r.html_url} target="_blank">{r.name}</a>
                  </li>
                ))}
              </>
            ) : (
              <>Laddar repos...</>
            )}
          </ul>
        </div>
      </div>
      <RndFact itemsRef={itemsRef} isDark={isDark} />
      <div className="blank" ref={contactRef}>
        <div className="blank-wrapper">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App