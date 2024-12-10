import React from 'react'
import styles from './ProjectsStyles.module.css'
import chatGPT from '../../assets/chatgpt.jpg'
import cryptoplace from '../../assets/CryptoPlace.webp'
import blogapp from '../../assets/Blogapp.webp'
import ProjectCard from '../../common/ProjectCard'



const Projects = () => {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Project</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={chatGPT} link='' h3={'ChatGPT-Clone'} />
                <ProjectCard className={styles.projectCard} src={cryptoplace} link='https://github.com/1t0t0/08-cryptoplace.git' h3={'CryptoPlace'} />
                <ProjectCard src={blogapp} link='https://github.com/1t0t0/03-blog-app.git' h3={'Blog-App'} />
            </div>
        </section>
    )
}

export default Projects