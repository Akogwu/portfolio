import React, {Fragment} from 'react';

const PreLoader = () => {
    return (
        <Fragment>
            <div className="preloader">
                <div className="content">
                    <svg width="81" height="84" viewBox="0 0 81 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g className="svg-logo">
                            <path className="letter-a" d="M34.5938 48.1406H24.3203L22.3672 54H16.1367L26.7227 25.5625H32.1523L42.7969
                54H36.5664L34.5938 48.1406ZM25.9023 43.3945H33.0117L29.4375 32.75L25.9023 43.3945Z" fill="white"
                                  fillOpacity="0.97"/>
                            <path className="letter-e"
                                  d="M62.5625 41.6758H51.3125V49.293H64.5156V54H45.4531V25.5625H64.4766V30.3086H51.3125V37.0859H62.5625V41.6758Z"
                                  fill="#B6980E"/>
                            <circle cx="40.5" cy="40.5" r="40.5" fill="white" fillOpacity="0.11"/>
                            <circle className="border" cx="40.5" cy="40.5" r="39" stroke="transparent"
                                    strokeOpacity="0.69" strokeWidth="3"/>
                        </g>
                    </svg>
                    <p>Please wait...</p>
                </div>
            </div>
        </Fragment>
    );
}

export default PreLoader;