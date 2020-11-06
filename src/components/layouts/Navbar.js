import React, {Fragment,useRef,useEffect} from 'react';
import Logo from '../../assets/images/Logo.png';
import gsap from 'gsap';

const Navbar = () => {

    const navRef = useRef(null);

    useEffect( () => {

        gsap.from(navRef.current,
            {
                duration:1,
                autoAlpha:0,
                ease:'none',
                delay:1
            })

    },[navRef])

    return (
        <Fragment>
            <nav ref={navRef} className="sticky-top nav">
                <div className="container">
                    <a className="logo" href="#home">
                        <img alt="" src={Logo}/>
                        <span className="text-white-50">akogwu</span>emmanuel.com</a>
                    <div className="menu-icon">
                        <div className="hamburger"></div>
                    </div>
                    <div className="menu">
                        <ul className="ml-md-auto">
                            <li className="active"><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#portfolio">Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;