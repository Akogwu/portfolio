import React, {Fragment,useEffect,useState} from 'react';
import galpin from '../assets/images/galpin-screenshoot.png';
import figma from '../assets/images/figma.svg';
import config from '../Helper/Config';
import axios from 'axios';
const Projects = () => {
    const [projects,setProjects] = useState([]);

    useEffect( () => {
        axios.get(config.baseUrl+`projects`).then(res => {
            setProjects(res.data)
            console.log(res.data);
        }).catch(err => {
           console.log(err);
        });
    },[]);

    return (
        <Fragment>
            <section className="portfolio-section" id="portfolio">
                <div className="container">
                    <div className="portfolio-title mobile">
                        Some Things I Built
                    </div>
                    <div className="portfolios">
                        <div className="portfolio">
                            <div className="images">
                                <a href="">
                                    <img alt="" className="img-fluid" src={galpin}/>
                                </a>
                            </div>
                            <div className="content">
                                <h3 className="featured-title">
                                    <span className="count">01</span> Featured project
                                </h3>
                                <h4 className="project-title">Staff records and Document Managent
                                    System.</h4>
                                <div className="project-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est,
                                    exercitationem
                                    explicabo, illo ipsam molestiae nam natus perferendis quasi, ratione sapiente
                                    unde. Ab
                                    accusantium assumenda ea excepturi nemo recusandae reprehenderit?
                                </div>
                                <div className="tags">
                                    <ul>
                                        <li>UI Design</li>
                                        <li>UX Design</li>
                                        <li>API</li>
                                        <li>Design System</li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <ul>
                                        <li>Javascript</li>
                                        <li>Laravel</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>
                                <div className="icons">
                                    <ul>
                                        <li>
                                            <a href=""><i className="fa fa-external-link fa-2x"></i></a>
                                        </li>
                                        <li><a href=""><i className="fa fa-github fa-2x"></i></a></li>
                                        <li className="figma-btn" title="Figma Design/Mockup">
                                            <a href="">
                                                <img alt="" className="img-fluid" src={figma}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="portfolio alt">
                            <div className="images">
                                <img alt="" className="img-fluid" src={galpin}/>
                            </div>
                            <div className="content">
                                <h3 className="featured-title"><span className="count">02</span> Featured project
                                </h3>
                                <h4 className="project-title">Staff records and Document Managent
                                    System.</h4>
                                <div className="project-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est,
                                    exercitationem
                                    explicabo, illo ipsam molestiae nam natus perferendis quasi, ratione sapiente
                                    unde. Ab
                                    accusantium assumenda ea excepturi nemo recusandae reprehenderit?
                                </div>
                                <div className="tags">
                                    <ul>
                                        <li>UI Design</li>
                                        <li>UX Design</li>
                                        <li>API</li>
                                        <li>Design System</li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <ul>
                                        <li>Javascript</li>
                                        <li>Laravel</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>
                                <div className="icons">
                                    <ul>
                                        <li>
                                            <a href=""><i className="fa fa-external-link fa-2x"></i></a>
                                        </li>
                                        <li><a href=""><i className="fa fa-github fa-2x"></i></a></li>
                                        <li className="figma-btn" title="Figma Design/Mockup">
                                            <a href="">
                                                <img alt="" className="img-fluid" src={figma}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio">
                            <div className="images">
                                <img alt="" className="img-fluid" src={galpin}/>
                            </div>
                            <div className="content">
                                <h3 className="featured-title"><span className="count">03</span> Featured project
                                </h3>
                                <h4 className="project-title">Staff records and Document Managent
                                    System.</h4>
                                <div className="project-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam est,
                                    exercitationem
                                    explicabo, illo ipsam molestiae nam natus perferendis quasi, ratione sapiente
                                    unde. Ab
                                    accusantium assumenda ea excepturi nemo recusandae reprehenderit?
                                </div>
                                <div className="tags">
                                    <ul>
                                        <li>UI Design</li>
                                        <li>UX Design</li>
                                        <li>API</li>
                                        <li>Design System</li>
                                    </ul>
                                </div>
                                <div className="project-technologies">
                                    <ul>
                                        <li>Javascript</li>
                                        <li>Laravel</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                </div>
                                <div className="icons">
                                    <ul>
                                        <li>
                                            <a href=""><i className="fa fa-external-link fa-2x"></i></a>
                                        </li>
                                        <li><a href=""><i className="fa fa-github fa-2x"></i></a></li>
                                        <li className="figma-btn" title="Figma Design/Mockup">
                                            <a href="">
                                                <img alt="" className="img-fluid" src={figma}/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-title">
                        Some Things I Built
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Projects;