import styles from './HeroStyle.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedinIcon = theme === 'light' ? linkedInLight : linkedInDark

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
                    <a href="https://x.com" target='_blank'>
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com" target='_blank'>
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://linkedin.com" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.desscription}>
                    With Love and Passion for developing modern React web apps for comercial businesses.
                </p>
                <a href={CV}>
                    <button className='hover' download>Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero