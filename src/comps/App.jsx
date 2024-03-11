import "../styles/App.css"
import useLocalStorage from "use-local-storage"
import { Toggle } from "./Toggle"
import { ReactTyped } from "react-typed"
import imgSrc from '../assets/me.webp'
import ContactForm from "./ContactForm"

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [isDark, setIsDark] = useLocalStorage("isDark", preference)

  return (
    <>
      <div className="app" data-theme={isDark ? "dark" : "light"}>
        <Toggle isDark={isDark} handleChange={() => setIsDark(!isDark)} />
        <h1 className="title">
          <ReactTyped strings={["Sebastian Degerman - Frontend Developer"]} typeSpeed={60} />
        </h1>
        <div className="box">
          <h2>
            <ReactTyped strings={["Work in progress..."]} typeSpeed={80} />
          </h2>
          <div className="profile-pic-wrapper">
            <img className="profile-pic" src={imgSrc} alt="" />
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default App