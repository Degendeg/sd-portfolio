import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navItems = [
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
]

const Header = () => {
    const location = useLocation()

    return (
        <header className="py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center text-sm tracking-tight">
            <Link to="/" className="font-medium text-xs sm:text-lg">Sebastian Degerman</Link>
            <nav className="flex space-x-2 sm:space-x-6 text-base sm:text-lg items-center">
                {navItems.map(item => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`relative ${location.pathname === item.path
                            ? 'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-current'
                            : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
                <ThemeToggle />
            </nav>
        </header>
    )
}

export default Header