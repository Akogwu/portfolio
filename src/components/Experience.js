import React, {Fragment} from 'react';
import portfolioIcon from '../assets/images/portfolio-icon.png';
import Moment from "react-moment";

const Experience = (props) => {
    return (
        <Fragment>
            <section className="experience-section" id="experience">
                <div className="container">
                    <div className="work-experience-title">
                        Work Experience
                    </div>
                    <div className="experiences">

                        {
                          props.experiences.map( ( experience,index ) => <div className="experience" key={index}>
                              <img alt="" src={portfolioIcon}/>
                              <div className="company-date">
                                  <div className="company">
                                      <p>{experience.title.rendered}</p>
                                      <span>{experience.acf.position}</span>
                                  </div>
                                  <div className="date">
                                      <p>
                                          <Moment parse="YYYY-MM-DD HH:mm" format="YYYY">
                                              {experience.acf.start_date}
                                          </Moment>  --
                                          <Moment parse="YYYY-MM-DD HH:mm" format="YYYY">
                                               {experience.acf.end_date}
                                          </Moment>
                                      </p>
                                  </div>
                              </div>

                              <div dangerouslySetInnerHTML={{__html:experience.content.rendered}} className="duties">
                              </div>
                          </div> )
                        }

                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Experience;