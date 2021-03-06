import React, {Fragment,useEffect,useState} from 'react';
import Navbar from "./Navbar";
import About from "../About";
import Experience from "../Experience";
import Noteworthy from "../Noteworthy";
import Clients from "../Clients";

import Mouse from '../../assets/images/mouse.svg';
import Projects from "../Projects";
import Contact from "../Contact";
import axios from 'axios';
import api from "../../Helper/Config";
const Home = () => {

    const [projects,setProject] = useState([]);
    const [experiences,setExperiences] = useState([]);

    useEffect( () => {
        const projects = axios.get(api.baseUrl+'projects');
        const experiences = axios.get(api.baseUrl+'experiences');
        axios.all([projects, experiences]).then(axios.spread((...response) => {
            setProject(response[0].data);
            setExperiences(response[1].data);
            console.log(response[1].data);
        }));
    },[]);

    return (
        <Fragment>
            <header className="banner" id="home">
                <Navbar/>
                <div className="container">
                    <section className="hero-content">
                        <a className="email" href="">akogwuemmanuel57@gmail.com</a>
                        <div className="hero-description">
                            <h3 className="text-white-50">Hi, my name is</h3>
                            <h1 className="text-white">Akogwu <span>Emmanuel.</span></h1>
                            <h2 className="">I build Amazing Stuff for the Web.</h2>
                            <p>I'm a software engineer based in Abuja, Nigeria specializing in building exceptional,
                                high-quality websites and applications.</p>
                            <a className="get-in-touch" href="">Get in touch</a>
                            <img alt="" className="mouse" src={Mouse}/>
                        </div>
                        <div className="social-icons">
                            <ul>
                                <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                                <li><a href=""><i className="fa fa-facebook"></i> </a></li>
                                <li><a href=""><i className="fa fa-instagram"></i> </a></li>
                                <li><a href=""><i className="fa fa-twitter"></i> </a></li>
                                <li></li>
                            </ul>
                            >
                        </div>
                    </section>
                </div>
            </header>
            <About/>
            <Experience experiences={experiences}/>
            <Projects projects={projects}/>
            <Noteworthy/>
            <Clients/>
            <Contact/>
        </Fragment>
    );
}

export default Home;