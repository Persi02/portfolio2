import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
const wordAnimation = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        y: 300,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: 'top 70%',
            end: 'top top',
            toggleActions: 'play none none reverse'
        }
    })
}
const wordAnimationLeft = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        x: -300,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: '30% 70%',
            end: '30% top',
            toggleActions: 'play none none reverse'
        }
    })
}

const wordAnimationRight = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        x: 300,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: 'top 70%',
            end: 'top top',
            toggleActions: 'play none none reverse'
        }
    })
}


const opacAnimation = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: point,
            start: 'top 70%',
            end: 'top top',
            toggleActions: 'play none none reverse'
        }
    })
}
const buttonScrollDownAnim = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        rotate: 0,
        display: 'block',


    }, {
        rotate: 180,
        display: 'none',
        duration: 0.01,
        scrollTrigger: {
            trigger: point,
            start: '20% bottom',
            end: '90% bottom',
            toggleActions: 'none play none reverse'
        }
    })
}
const buttonScrollUpAnim = (classname: string, point: string) => {
    gsap.fromTo(classname, {
        rotate: 0,
        display: 'none'

    }, {
        rotate: 180,
        display: 'block',
        duration: 0.01,
        scrollTrigger: {
            trigger: point,
            start: '20% bottom',
            end: '90% bottom',
            toggleActions: 'none play none reverse'
        }
    })
}

const navAnimation = (header: HTMLElement | null) => {
    gsap.to(header, {
        scrollTrigger: {
            start: '10% bottom',
            end: '10% bottom',
            trigger: '.about',
            onEnter() {
                if (header) {
                    header.classList.remove('header');
                    header.classList.add('header_scroll');
                }

            },
            onEnterBack() {
                if (header) {
                    header.classList.remove('header_scroll');
                    header.classList.add('header');
                }

            }
        }
    });

}


export { wordAnimation, wordAnimationLeft, wordAnimationRight, opacAnimation, buttonScrollDownAnim, buttonScrollUpAnim, navAnimation }