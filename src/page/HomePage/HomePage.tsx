import { useEffect, useRef } from 'react'
import Header from '../../components/General/Header/Header';
import './style.scss'
import LogoIcons from '../../Icons/LogoIcons';
import Button from '../../components/General/button/Button';
import profil from '../../assets/image/profil.png'
import GridBody from '../../components/Display/gridBody/GridBody';
import SectionTitle from '../../components/Display/SectionTitle/SectionTitle';
import GridHero from '../../components/Display/GridHero/GridHero';
import figma from '../../assets/image/figma.jpg'
import git from '../../assets/image/git.jpg'
import Html from '../../assets/image/html.jpg'
import Css from '../../assets/image/css.jpg'
import Tailwind from '../../assets/image/tailwin.jpg'
import Sass from '../../assets/image/sass.jpg'
import Bootstrap from '../../assets/image/bootstrap.jpg'
import Iconreact from '../../assets/image/react.jpg'
import Javascript from '../../assets/image/javascript.jpg'
import LieuIcon from '../../Icons/LieuIcon';
import EmailIcon from '../../Icons/EmailIcon';
import PhoneIcon from '../../Icons/PhoneIcon';
import FacebookIcon from '../../Icons/FacebookIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import GithubIcon from '../../Icons/GithubIcon';
import LinkedinIcon from '../../Icons/LinkedinIcon';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { wordAnimation, buttonScrollDownAnim, buttonScrollUpAnim } from '../../utils/animation';
import Text from '../../components/General/Text/Text';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import ScrollIconDown from '../../Icons/ScrollIcon';
import ScrollIconUp from '../../Icons/ScrollIconUp';
import { cursorAnim } from '../../utils/cursor';
import Form from '../../components/Display/Form/Form';
import CV from '../../assets/CV/CV.pdf'



gsap.registerPlugin(ScrollTrigger)





function HomePage() {

    let title = useRef<HTMLHeadingElement | null>(null)
    let about = useRef<HTMLDivElement | null>(null);


    let tl = gsap.timeline();

    useEffect(() => {
        gsap.fromTo('body', { height: '100vh', overflowY: 'hidden' }, { height: 'auto', overflowY: 'auto', delay: 5 })
    }, [])

    useEffect(() => {
        if (title.current) {
            const title1 = title.current?.firstElementChild;
            const title2 = title.current?.lastElementChild;
            tl.fromTo(title1, { x: -400, opacity: 0, ease: Power3.easeOut }, { x: 0, opacity: 1, ease: Power3.easeOut, duration: 1.5 }, 5).fromTo(title2, { x: 400, opacity: 0, ease: Power3.easeOut }, { x: 0, opacity: 1, duration: 1.3 }, 5).fromTo('.intro-name', { y: 44, opacity: 0 }, { y: 0, opacity: 1 }, 5).fromTo('.logo', { x: 300, opacity: 0 }, { x: 0, opacity: 1 }, 5).fromTo(['.header', '.wrap_btn-hero', '.wrap_button-scroll'], { opacity: 0 }, { opacity: 1, duration: 1 }, 5)
        }



    }, [tl])
    useEffect(() => {

        wordAnimation('.panel_about .about_title', '.panel_about')
        wordAnimation('.panel_skills .about_title', '.panel_skills')
        wordAnimation('.panel_contact .about_title', '.panel_contact')
        wordAnimation('.first_about h3', '.body_about')
        wordAnimation('.body_about p', '.body_about')
        buttonScrollUpAnim('.btn-scroll2', 'main')
        buttonScrollDownAnim('.btn-scroll1', 'main')
        wordAnimation('.lieu', '.body_contact')
        wordAnimation('.sociaux', '.body_contact')
        wordAnimation('.form_contact', '.body_contact')
        cursorAnim()


    }, [])
    useEffect(() => {
        let ctx = gsap.context(() => {

            const panels = document.querySelectorAll<HTMLElement>('.panel');
            panels.forEach((panel) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
                    pin: true,
                    pinSpacing: false
                });
            });

        });
        return () => ctx.revert();
    }, [])


    return (
        <>

            <main>
                <Header className=' header' />
                <div className='wrap_button-scroll'>
                    <p className='body_text'>Scroll</p>
                    <div>
                        <Link to='down'
                            smooth={true}
                            duration={500} >
                            <ScrollIconDown />
                        </Link>
                        <Link to='hero'
                            smooth={true}
                            duration={500} >
                            <ScrollIconUp />
                        </Link>

                    </div>
                </div>
                <div className="cursor-dot" data-cursor-dot />
                <div className="cursor-outline" data-cursor-outline />

                <section className='hero' id='hero'>
                    <GridHero />
                    <div className='intro wrap' id='intro'>
                        <div className='intro-name'>
                            <h3 className='second-h3'>Persi</h3>
                            <Text tag='p' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime' color="#817474" className='body_text' />
                        </div>
                        <LogoIcons className='logo' />
                    </div>
                    <div className="work">
                        <h1 className='h1' ref={title}><span className='developer'>Developer</span><span className='front'>Front end</span></h1>
                        <div className="wrap_btn-hero">
                            <Link to='down'
                                smooth={true}
                                duration={500} >
                                <Button text='Contact Me' className='btn-lg' />
                            </Link>
                            <NavLink to={CV} target='_blank'>
                                <Button text='Show CV' className='btn-lg btn-w' />
                            </NavLink>

                        </div>
                    </div>

                </section>

                <section className='about' ref={about} id="about">
                    <SectionTitle text='About' className='panel panel_about' />
                    <div className="body_about wrap panel ">
                        <GridBody />
                        <div className="first_about">
                            <h3 className='first-h3'>Hello I am Pérsi</h3>
                            <Text tag='p' text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime pariatur rem non consequatur
                                unde quas suscipit ea placeat quia cumque laudantium assumenda dolore voLorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sequi saepe maxime pariatur rem non consequatur
                                unde quas suscipit ea placeat quia cumque laudantium assumenda dolore voluptatum ut ullam! Enim?' className='body_textgm' />
                        </div>
                        <div className="second_about">
                            <figure>
                                <img src={profil} alt="profil" />
                            </figure>
                            <div className="info">

                                <p className='body_textgm'>Email &nbsp;&nbsp;: <span>andriamananandroh@gmail.com</span></p>
                                <p className='body_textgm'>Education &nbsp;&nbsp; :<span>Developer front JS ,
                                    SAHA Academique  (2023 )</span></p>
                                <p className='body_textgm'>Diplôme &nbsp;&nbsp;:<span> Bacc +2 électronique informatique</span></p>
                                <p className='body_textgm'>Phone &nbsp;&nbsp;:<span>+261346810380</span></p>
                                <p className='body_textgm'>City &nbsp;&nbsp;:<span>Antananarivo/Madagascar</span></p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className='myskills ' id='mySkills'>
                    <SectionTitle text='My Skills' className='panel panel_skills' />
                    <div className="body_skills  wrap panel">
                        <GridBody />
                        <div className="first_skills">
                            <div className="design">
                                <h3 className='second-h3 '>UX/UI design</h3>
                                <img src={figma} alt='figma' />
                            </div>
                            <div className="outils">
                                <h3 className='second-h3 '>Outils</h3>
                                <img src={git} alt='git' />
                            </div>
                        </div>
                        <div className="second_skills">
                            <div className="developer">
                                <h3 className='second-h3 '>Web developer</h3>
                                <div className="work_developer">
                                    <div className="wrap_skills">
                                        <img src={Html} alt='html' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Css} alt='css' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Tailwind} alt='Tailwind' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Bootstrap} alt='Bootstrap' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Sass} alt='Sass' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Javascript} alt='Javascript' />
                                    </div>
                                    <div className="wrap_skills">
                                        <img src={Iconreact} alt='Iconreact' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='contact' id="contact">
                    <SectionTitle text='Contact' className='panel panel_contact' />
                    <div className="body_contact wrap panel" id='down'>
                        <div className="wrap_sociaux wrap">
                            <div className="lieu">
                                <div>
                                    <div className="icon_lieu"><LieuIcon /></div>

                                    <p className='body_text'>Location  &nbsp;&nbsp;&nbsp;&nbsp;: Antananarivo/Madagascar</p>
                                </div>
                                <div>
                                    <div className="icon_lieu"><EmailIcon /></div>

                                    <p className='body_text'>Email  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  andriamananandroh@gmail.com</p>
                                </div>
                                <div>
                                    <div className="icon_lieu"><PhoneIcon /></div>

                                    <p className='body_text'>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +261346810380</p>
                                </div>



                            </div>
                            <div className="sociaux">
                                <h3 className='second-h3'>Follow me on social media</h3>
                                <div>
                                    <NavLink to='https://www.facebook.com/hernjakaandri?locale=fr_FR'>
                                        <FacebookIcon />
                                    </NavLink>
                                    <NavLink to='https://twitter.com/hernjaka1'>
                                        <TwitterIcon />
                                    </NavLink>
                                    <NavLink to='https://github.com/Persi02'>
                                        <GithubIcon />
                                    </NavLink>
                                    <NavLink to='https://www.linkedin.com/in/hernjaka-andriamananandro-b72122284/'>
                                        <LinkedinIcon />
                                    </NavLink>




                                </div>
                            </div>
                        </div>
                        <Form />
                        <div className="hr">
                            <hr />
                            <p >Portfolio@Pérsi2023</p>
                        </div>
                    </div>
                </section>

            </main >


        </>
    )
}

export default HomePage

