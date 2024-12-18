import React from 'react'
import styles from './SkillsStyle.module.css'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'
import nodejs from '../../assets/nodejs.svg'
import vite from '../../assets/vite.svg'
import figma from '../../assets/figma.svg'
import react from '../../assets/react.svg'
import nextLight from '../../assets/nextjs.svg'
import nextDark from '../../assets/nextDark.svg'
import mongodb from '../../assets/mongodb.svg'
import sql from '../../assets/mysql.svg'
import git from '../../assets/git.svg'
import tailwind from '../../assets/tailwindcss.svg'

import { useTheme } from '../../common/ThemeContext'


import SkillList from '../../common/SkillList'

const Skills = () => {
    const { theme, toggleTheme } = useTheme()

    const nextIcon = theme === 'light' ? nextDark : nextLight;

    return (
        <section id='skills' className={styles.container}>
            <p className='sectionTitle'>Skills</p>
            <h3>language and tools</h3>
            <div className={styles.SkillsList}>
                <SkillList src={html} />
                <SkillList src={css} />
                <SkillList src={javascript} />
                <SkillList src={nodejs} />
                <SkillList src={vite} />
                <SkillList src={figma} />
            </div>

            <h3>libraries and frameworks</h3>
            <div className={styles.SkillsList}>
                <SkillList src={react} />
                <SkillList src={nextIcon} />
                <SkillList src={tailwind} />
            </div>
            <h3>database and other</h3>
            <div className={styles.SkillsList}>
                <SkillList src={mongodb} />
                <SkillList src={sql} />
                <SkillList src={git} />
            </div>



        </section>
    )
}

export default Skills