import React from 'react'

const ProjectCard = ({ src, link, h3 }) => {
    return (
        <a href={link} target="_blabk" className="project-card">
            <img className='hover' src={src} alt={`${h3} logo`} />
            <h3>{h3}</h3>
        </a>
    )
}

export default ProjectCard