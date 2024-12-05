import styles from './HeroStyle.module.css'
import heroImg from '../../assets/WhatsApp Image 2567-12-05 at 14.47.08.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import igLight from '../../assets/instagramLight.png'
import igDark from '../../assets/instagramDark.png'


import CV from '../../assets/Resume.pdf'
import { useTheme } from '../../common/ThemeContext'
import TypeAnimationText from '../../common/TypeAnimation'

const Hero = () => {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const igIcon = theme === 'light' ? igDark : igLight

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Phetnikone Phandolack" />
                <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>Phetnikone <br />Phandolack</h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://x.com/Gust50079472521" target='_blank'>
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/1t0t0" target='_blank'>
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.instagram.com/ttotophandolack/" target='_blank'>
                        <img src={igIcon} alt="Instagramicon" />
                    </a>


                </span>
                <p className={styles.desscription}>
                    <TypeAnimationText />
                </p>
                <a href={CV}>
                    <button className='hover' download>Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero