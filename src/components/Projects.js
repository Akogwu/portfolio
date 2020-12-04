import React, {Fragment,useEffect,useState} from 'react';
import galpin from '../assets/images/galpin-screenshoot.png';
import figma from '../assets/images/figma.svg';
import config from '../Helper/Config';
import axios from 'axios';
import ProjectItem from "./ProjectItem";
const Projects = () => {
    const [projects,setProjects] = useState([]);

    useEffect( () => {
        axios.get(config.baseUrl+`projects`).then(res => {
            setProjects(res.data)
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
                        {
                            projects.map( (project,index) =>  <ProjectItem project={project} count={index+1} alt={((index+1) % 2 == 0)?'alt':'opps'} key={index}></ProjectItem> )
                        }
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