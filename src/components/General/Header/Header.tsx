import { Link } from 'react-scroll';
import './style.scss';
import { useEffect, useRef } from 'react';
import { navAnimation } from '../../../utils/animation';

interface Props {
    className: string,


}

function Header({ className }: Props) {

    let header = useRef<HTMLElement | null>(null);

    useEffect(() => {
        navAnimation(header.current);
    }, [])
    return (
        <header ref={header} className={`wrap ${className} `}>
            <nav className='menu-navigation'>
                <Link className='nav-link' to="hero"
                    smooth={true}
                    duration={500} >Home</Link>
                <Link className='nav-link' to='about'
                    smooth={true}
                    duration={500} >About</Link>
                <Link className='nav-link' to='mySkills'
                    smooth={true}
                    duration={500} >My Skills</Link>
                <Link className='nav-link' to='contact'
                    smooth={true}
                    duration={500} >Contact</Link>
            </nav>

        </header>
    )
}

export default Header