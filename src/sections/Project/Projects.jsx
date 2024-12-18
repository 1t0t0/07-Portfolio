import React from 'react'
import styles from './ProjectsStyles.module.css'
import geminiLight from '../../assets/Gemini-light.jpg'
import geminiDark from '../../assets/Gemini-dark.jpg'
import cryptoplace from '../../assets/CryptoPlace.webp'
import blogapp from '../../assets/Blogapp.webp'
import ProjectCard from '../../common/ProjectCard'
import { useTheme } from '../../common/ThemeContext'




const Projects = () => {
    const { theme, toggleTheme } = useTheme()
    const geminiIcon = theme === 'light' ? geminiDark : geminiLight

    return (
        <section id='projects' className={styles.container}>
            <p className='sectionTitle'>Project</p>
            <div className={styles.projectsContainer}>
                <ProjectCard src={geminiIcon} link='https://github.com/1t0t0/09-Gemini-Clone.git' h3={'Gemini-Clone'} />
                <ProjectCard className={styles.projectCard} src={cryptoplace} link='https://github.com/1t0t0/08-cryptoplace.git' h3={'CryptoPlace'} />
                <ProjectCard src={blogapp} link='https://github.com/1t0t0/03-blog-app.git' h3={'Blog-App'} />
            </div>
        </section>
    )
}

export default Projects