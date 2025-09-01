const ProjectCard = ({ title, description, period, link, image }) => (
    <div className="flex justify-between items-start py-6 border-b border-base-200">
        <div>
            <p className="text-xs text-base-content/70">{period}</p>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="text-sm text-base-content/70 mt-1">{description}</p>
            {link && (
                <a
                    href={link}
                    className="text-sm underline underline-offset-2 mt-2 inline-block"
                    target="_blank" rel="noopener noreferrer"
                >
                    Check it out ↗
                </a>
            )}
        </div>
        {image && (
            <img src={image} alt={title} className="w-20 h-auto rounded-lg" />
        )}
    </div>
)

export default ProjectCard