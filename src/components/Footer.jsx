import cv from '../assets/CV.pdf'

const Footer = () => (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-evenly w-full max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Social icons in a row */}
            <div className="flex justify-center space-x-4">
                <a
                    href="https://www.linkedin.com/in/sebastian-degerman-063360100?originalSubdomain=se"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:text-primary" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.2 2.3-2.2 4.2-2.2 4.5 0 5.3 3 5.3 6.9V24h-5v-7.3c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-5V8z" />
                    </svg>
                </a>
                <a
                    href="https://github.com/Degendeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:text-primary" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.553 3.294-1.23 3.294-1.23.653 1.653.242 2.873.118 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.628-5.48 5.922.43.37.814 1.103.814 2.222v3.293c0 .323.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a
                    href="https://stackoverflow.com/users/3509874/urbz?tab=profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Stack Overflow"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:text-primary" viewBox="0 0 24 24">
                        <path d="M17.473 20.933V14.79h2.156v8.212H2.156V14.79h2.156v6.143zM6.31 18.797h11.41v-2.135H6.31zm.156-4.119 11.28 2.388.45-2.093-11.28-2.388zm2.312-4.207 10.512 4.95.906-1.97-10.512-4.95zm4.119-4.181 8.49 7.533 1.41-1.6-8.49-7.532zm7.838-6.29-1.65 1.272 6.635 8.58 1.65-1.272z" />
                    </svg>
                </a>
                <a href={cv} target="_blank" rel="noopener noreferrer" aria-label="CV">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 fill-current hover:text-primary" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 2 6 6h-6zM8 14h8v2H8zm0-4h8v2H8z" />
                    </svg>
                </a>
            </div>

            {/* Copyright text */}
            <p className="text-xs sm:text-lg text-center sm:text-left">
                © {new Date().getFullYear()} Sebastian Degerman. All rights reserved.
            </p>
        </div>
    </footer>
)

export default Footer