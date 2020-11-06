import React, {Fragment} from 'react';

import MFA from '../assets/images/mfa.jpg';
import AMAC from '../assets/images/amac.png';
import COMMUNICATION from '../assets/images/communication.png';
import INTERFAITH    from '../assets/images/interfaith.png';
import GALGIN        from '../assets/images/galpin.png';
import SWAT          from '../assets/images/swat.png';

const Clients = () => {

    return (
        <Fragment>
            <section className="clients-section" id="clients">
                <div className="container">
                    <h2 className="title">Some of my Clients</h2>
                    <div className="clients">
                        <div className="client">
                            <img src={MFA} className="img-fluid" alt=""/>
                        </div>
                        <div className="client">
                            <img src={AMAC} alt=""/>
                        </div>
                        <div className="client">
                            <img src={COMMUNICATION} alt=""/>
                        </div>
                        <div className="client">
                            <img src={INTERFAITH} alt=""/>
                        </div>
                        <div className="client">
                            <img src={GALGIN} alt=""/>
                        </div>
                        <div className="client">
                            <img src={SWAT} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );

}

export default Clients;