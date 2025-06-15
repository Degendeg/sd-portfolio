import { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <button onClick={toggleTheme} className="btn btn-ghost btn-md mb-1 sm:mb-0 sm:btn-lg border-4">
            {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
        </button>
    )
}

export default ThemeToggle