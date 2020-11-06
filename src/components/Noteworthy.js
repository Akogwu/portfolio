import React, {Fragment} from 'react';
import folder from '../assets/images/folder.svg';
const Noteworthy = () => {

    return (
        <Fragment>
            <section className="notable-portfolios">
                <div className="container">
                    <div className="title">
                        <h2>Other Noteworthy Projects</h2>
                    </div>
                    <div className="portfolio-container">
                        <div className="portfolio">
                            <header>
                                <div className="icons">
                                    <div className="folder">
                                        <img src={folder} alt=""/>
                                    </div>
                                    <div className="links">
                                        <a href=""><i className="fa fa-github"></i></a>
                                        <a href=""><i className="fa fa-external-link"></i></a>
                                    </div>
                                </div>

                                <h4 className="sub-title">Covid-19 tracker</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eius
                                    excepturi, fugiat fugit id inventore numquam optio quis saepe tempore.</p>
                            </header>
                            <footer>
                                <div className="techs">
                                    <ul>
                                        <li>SCSS</li>
                                        <li>Javascript</li>
                                    </ul>
                                </div>
                            </footer>
                        </div>
                        <div className="portfolio">
                            <header>
                                <div className="icons">
                                    <div className="folder">
                                        <img src={folder} alt=""/>
                                    </div>
                                    <div className="links">
                                        <a href=""><i className="fa fa-github"></i></a>
                                        <a href=""><i className="fa fa-external-link"></i></a>
                                    </div>
                                </div>
                                <h4 className="sub-title">Covid-19 tracker</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eius
                                    excepturi, fugiat fugit id inventore numquam optio quis saepe tempore.</p>
                            </header>
                            <footer>
                                <div className="techs">
                                    <ul>
                                        <li>SCSS</li>
                                        <li>Javascript</li>
                                    </ul>
                                </div>
                            </footer>
                        </div>
                        <div className="portfolio">
                            <header>
                                <div className="icons">
                                    <div className="folder">
                                        <img src={folder} alt=""/>
                                    </div>
                                    <div className="links">
                                        <a href=""><i className="fa fa-github"></i></a>
                                        <a href=""><i className="fa fa-external-link"></i></a>
                                    </div>
                                </div>
                                <h4 className="sub-title">Covid-19 tracker</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eius
                                    excepturi, fugiat fugit id inventore numquam optio quis saepe tempore.</p>
                            </header>
                            <footer>
                                <div className="techs">
                                    <ul>
                                        <li>SCSS</li>
                                        <li>Javascript</li>
                                    </ul>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Noteworthy;