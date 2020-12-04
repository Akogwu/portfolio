import React, {Fragment,useEffect} from 'react';
import galpin from "../assets/images/galpin-screenshoot.png";
import figma from "../assets/images/figma.svg";
import {Link} from "react-router-dom";

const ProjectItem = (props) => {

    const { title, excerpt, acf, cats, tag_names,thumb_image} = props.project;
    useEffect( () => {
        console.log(props.alt);
    } ,[])
    return (
        <Fragment>
            <div className={`portfolio  ${props.alt}`}>
                <div className="images">
                    <a href="">
                        <img alt="" className="img-fluid" src={thumb_image}/>
                    </a>
                </div>
                <div className="content">
                    <h3 className="featured-title">
                        <span className="count">{(props.count <= 9)? '0'+props.count:props.count }</span> Featured project
                    </h3>
    <h4 className="project-title">{title.rendered}  </h4>
                    <div className="project-description">
                    <div dangerouslySetInnerHTML={{ __html:excerpt.rendered }}/>
                    </div>
                    <div className="tags">
                        <ul>
                            {(tag_names) && tag_names.map( (tag,index) =><li key={index}>{tag.name}</li>)}
                        </ul>
                    </div>
                    <div className="project-technologies">
                        <ul>
                            {(cats) && cats.map( (cat,index) => <li key={index}>{cat.name}</li>)}
                        </ul>
                    </div>
                    <div className="icons">
                        <ul>
                            <li>
                                <Link to={{pathname:acf.web_address}} target="_blank"> <i className="fa fa-external-link fa-2x"></i></Link>
                            
                            </li>
                            <li><Link to={{pathname:acf.git_repo}} target="_blank"><i className="fa fa-github fa-2x"></i></Link></li>
                            <li className="figma-btn" title="Figma Design/Mockup">
                                <Link to={{pathname:acf.figma}} target="_blank">
                                    <img alt="" className="img-fluid" src={figma}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default ProjectItem;