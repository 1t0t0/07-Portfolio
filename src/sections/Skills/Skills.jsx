import React from 'react'
import styles from './SkillsStyle.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

const Skills = () => {
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.SkillsList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="NodeJS" />
            </div>
            <hr />
            <div className={styles.SkillsList}>
                <SkillList src={checkMarkIcon} skill="ReactJS" />
                <SkillList src={checkMarkIcon} skill="NEXTJS" />
                <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
            </div>
            <hr />
            <div className={styles.SkillsList}>
                <SkillList src={checkMarkIcon} skill="Webpack" />
                <SkillList src={checkMarkIcon} skill="Git" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
            </div>
        </section>
    )
}

export default Skills