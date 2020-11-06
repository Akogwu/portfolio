import React, {Fragment} from 'react';
import Profile from '../assets/images/profile.jpg';

const About = () => {
    return (
        <Fragment>
            <section className="about" id="about">
                <div className="container">
                    <div className="description">
                        <h2 className="title">About me</h2>
                        <p>Hello! I'm Emmanuel, a software engineer based in Abuja, Nigeria who enjoys building
                            things that live
                            on the internet. I develop exceptional websites and web apps that provide intuitive ,
                            pixel-perfect
                            user interfaces with efficient and modern backends.</p>
                        <p>Shortly after graduating from University Jos, I joined the engineering team at Ministry
                            of Foreign
                            Affairs where I work on a wide variety of interesting and meaningful projects on a daily
                            basis.</p>
                        <p>Here are a few technologies I've been working with recently:</p>
                        <div className="skills">
                            <ul>
                                <li>Javascript (Es6+)</li>
                                <li>HTML5 & (S)CSS</li>
                                <li>PHP (Laravel/Lumen)</li>
                                <li>React Js</li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-image">
                        <div className="image">
                            <img alt="" className="img-fluid" src={Profile}/>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default About;