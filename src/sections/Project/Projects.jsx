import React from 'react'
import styles from './ProjectsStyles.module.css'
import chatGPT from '../../assets/chatgpt.jpg'
import cryptoplace from '../../assets/cryptoplace.png'
import blogapp from '../../assets/Blogapp.jpg'
import ProjectCard from '../../common/ProjectCard'



const Projects = () => {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Project</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={chatGPT} link='' h3={'CLONE'} p="ChatGPT clone" />
                <ProjectCard src={cryptoplace} link='https://github.com/1t0t0/08-cryptoplace.git' h3={'API'} p="Cryptoplace" />
                <ProjectCard src={blogapp} link='https://github.com/1t0t0/03-blog-app.git' h3={'CRUD'} p="Blog app" />
            </div>
        </section>
    )
}

export default Projects