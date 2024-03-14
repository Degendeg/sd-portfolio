import '../styles/App.css'
import Contact from './Contact'
import Toggle from './Toggle'
import imgSrc from '../assets/me.webp'
import useLocalStorage from 'use-local-storage'
import { useEffect, useRef, useState } from 'react'
import { ReactTyped } from 'react-typed'
import ToTopBtn from './ToTopBtn'

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
      <div className={`container second ${isDark ? 'second-bg-dark' : 'second-bg-light'}`}>
        <div className="item" ref={socialsRef}>
          <div className="socials">
            <a href="https://www.linkedin.com/in/sebastian-degerman-063360100?originalSubdomain=se" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="280" viewBox="0 3 16 16">
                <path fill={isDark ? '#FFFFFF' : ''}
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
          <div className="card">
            <h3>LinkedIn</h3>
          </div>
        </div>
        <div className="item">
          <div className="socials">
            <a href="https://github.com/Degendeg" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="280" viewBox="0 3 16 16">
                <path fill={isDark ? '#FFFFFF' : ''}
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
          <div className="card">
            <h3>GitHub</h3>
          </div>
        </div>
        <div className="item">
          <div className="socials">
            <a href="CV.pdf" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="280" viewBox="0 3 16 16">
                <path fill={isDark ? '#FFFFFF' : ''}
                  d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z" />
                <path fill={isDark ? '#FFFFFF' : ''} fillRule="evenodd"
                  d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103" />
              </svg>
            </a>
          </div>
          <div className="card">
            <h3>CV</h3>
          </div>
        </div>
        <div className="item">
          <div className="socials">
            <a href="https://stackoverflow.com/users/3509874/urbz?tab=profile" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="280" viewBox="0 3 16 16">
                <path fill={isDark ? '#FFFFFF' : ''}
                  d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z" />
                <path fill={isDark ? '#FFFFFF' : ''}
                  d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z" />
              </svg>
            </a>
          </div>
          <div className="card">
            <h3>StackOverflow</h3>
          </div>
        </div>
      </div>
      <div className="blank">
        <div className="blank-wrapper" style={{ marginRight: '5vw' }}>
          <h1 ref={reposRef}>
            GitHub{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
              <path fill={isDark ? '#FFFFFF' : ''}
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
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
      <div className={`container third ${isDark ? 'third-bg-dark' : 'third-bg-light'}`}>
        <div className="item">
          <div className="img img-first"></div>
          <div className="card">
            <h3>Work in progress 🚧</h3>
            <p>Löksås ipsum flera om färdväg där som ännu åker gör, sjö sista miljoner hans jäst fram från vidsträckt denna, precis stora se det tid äng olika räv. Stora äng hela mjuka strand ser bland mot, lax och dimmhöljd på kan denna precis, sista vi det bland så tiden.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="item" ref={itemsRef}>
          <div className="img img-second"></div>
          <div className="card">
            <h3>Work in progress 🚧</h3>
            <p>Vid sitt tidigare annan bland äng vemod plats dimma där rot, genom annat år träutensilierna ta lax se där blivit, kan trevnadens blev enligt därmed själv vid genom kanske. Lax mot dimmhöljd upprätthållande ordningens tid annan sorgliga omfångsrik icke groda.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="item">
          <div className="img img-third"></div>
          <div className="card">
            <h3>Work in progress 🚧</h3>
            <p>Se bäckasiner därmed vid ingalunda groda om, se kom strand på själv både, sjö helt sitt är björnbär. Nu kan annat stig om hans kanske söka så plats hwila, plats denna strand vi hav har del av mjuka hans, blivit vi vidsträckt mjuka helt samma bra sig enligt.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
      <div className="blank" ref={contactRef}>
        <div className="blank-wrapper">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App