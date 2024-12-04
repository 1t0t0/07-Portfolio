import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'



const Projects = () => {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Project</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={viberr} link='#' h3={'project1'} p="Streaming App" />
                <ProjectCard src={freshBurger} link='#' h3={'project2'} p="Delivery food" />
                <ProjectCard src={hipsster} link='#' h3={'project3'} p="Classes shop" />
                <ProjectCard src={fitLift} link='#' h3={'project4'} p="Fitness App" />
            </div>
        </section>
    )
}

export default Projects