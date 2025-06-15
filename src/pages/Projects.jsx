import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'

const Projects = () => {
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/user/repos', {
            headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_KEY}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error('GitHub fetch failed')
                return res.json()
            })
            .then(data => {
                const formatted = data.map(repo => ({
                    title: repo.name,
                    description: repo.description || 'No description provided.',
                    period: new Date(repo.created_at).getFullYear() + ' – ' + new Date(repo.pushed_at).getFullYear(),
                    link: repo.html_url
                }))
                setRepos(formatted)
                setError(null)
            })
            .catch(err => {
                console.error(err)
                setError('Could not load projects, try again!')
                setRepos([])
            })
            .finally(() => setLoading(false))
    }, [])

    const messageStyles = "flex justify-center items-center text-center h-64 text-2xl font-semibold"

    if (loading) {
        return (
            <section>
                <SectionTitle title="Repos" />
                <div className={messageStyles}>Loading projects...</div>
            </section>
        )
    }

    if (error) {
        return (
            <section>
                <SectionTitle title="Repos" />
                <div className={`${messageStyles} text-red-400`}>{error} 😔</div>
            </section>
        )
    }

    if (repos.length === 0) {
        return (
            <section>
                <SectionTitle title="Repos" />
                <div className={messageStyles}>No projects found. 😔</div>
            </section>
        )
    }

    return (
        <section>
            <SectionTitle title="Repos" />
            <div className="grid md:grid-cols-2 gap-6">
                {repos.map((repo, idx) => (
                    <ProjectCard key={idx} {...repo} />
                ))}
            </div>
        </section>
    )
}

export default Projects
