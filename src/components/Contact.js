import React, {Fragment} from 'react';


const Contact = () => {

    return (
        <Fragment>
            <section className="contact-section" id="contact">
            <div className="container">
                <div className="call">
                    <h1>Let's <span className="accent-color">Build</span> Something Amazing</h1>
                </div>
                <div className="action-btn">
                    <a  id="contactButton">CONTACT ME</a>
                </div>

                <div className="contact-details">
                    <div className="details">
                        <div className="intro">
                            <p>I'm currently looking for freelance opportunities, my inbox is always open.
                                Whether for a
                                potential project or just to say hi, I'll respond to your email as soon as
                                possible!</p>
                        </div>
                        <div className="social-media">
                            <ul>
                                <li><i className="fa fa-envelope"></i>
                                    <a href="mailto:contact@akogwuemmanuel.com">contact@akogwuemmanuel.com</a>
                                </li>
                                <li><i className="fa fa-phone"></i> <a href="tel:+2347031610538">+234 703 1610
                                    538</a></li>
                                <li>
                                    <i className="fa fa-instagram"></i> <a href="instagram.com/imakosco">im_akosco</a>
                                </li>
                                <li>
                                    <i className="fa fa-linkedin"></i> <a href="www.linkedin.com/in/emmanuel-akogwu">www.linkedin.com/in/emmanuel-akogwu
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="form">
                        <a  className="close-button"> <i className="fa fa-close"></i> Close</a>
                        <h2 className="title">GET IN TOUCH</h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name" className="sr-only">Your name</label>
                                <input type="text" name="name" id="name" className="form-control"
                                       placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="sr-only">Your Email Address</label>
                                <input type="email" name="email" id="email" className="form-control"
                                       placeholder="Email address"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea name="message" id="message" rows="5" className="form-control"
                                          placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <div className="submit-recaptcha">
                                    <div className="g-recaptcha"
                                         data-sitekey="6LdJ_eUUAAAAACUxG5kaBeebKTUeOje1eBEPpkA0">
                                    </div>
                                    <div>
                                        <button type="submit">Send message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    );

}


export default Contact;