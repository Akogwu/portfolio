import React, {Fragment,useEffect} from 'react';
import '../../assets/styles.scss'
import PreLoader from "../PreLoader";




const Template = (props) => {


    useEffect(() => {
        config();
    },[]);


    const config =  () => {
        const icon = document.querySelector('.menu-icon');
        const menu  = document.querySelector('.menu');

        window.addEventListener('load',()=>{
            setTimeout(function () {
                const preload = document.querySelector('.preloader');
                preload.remove();
            },2000);
        });

        const navbar = document.querySelector('.nav');
        icon.addEventListener('click', e => {
            icon.classList.toggle('active');
            menu.classList.toggle('open');
        } );

        let scroll = window.pageYOffset;
        if (scroll >= 120){
            navbar.classList.add('in-body');
        }else {
            navbar.classList.remove('in-body');
        }
        var lastScrollTop = 0;
        window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop){
                navbar.classList.add('scrollDown');
                navbar.classList.remove('scrollUp');
            } else {
                navbar.classList.add('scrollUp');
                navbar.classList.remove('scrollDown');
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);


        window.addEventListener('scroll', () =>{
            let scroll = window.pageYOffset;
            if (scroll >= 120){
                navbar.classList.add('in-body');
            }else {
                navbar.classList.remove('in-body');
            }
        });




        const contact_form = document.querySelector('.contact-details');
        const close_btn= document.querySelector('.close-button');
        const contact_btn = document.querySelector('#contactButton');

        contact_btn.addEventListener('click',function (e) {
            e.preventDefault();
            contact_form.classList.add('active');
        });
        close_btn.addEventListener('click',function (e) {
            e.preventDefault();
            contact_form.classList.remove('active');
        });


    }


    return (
        <Fragment>
            <PreLoader/>
            <div id="wrapper">

                {props.children}
                <footer className="footer-section">
                    <div className="container">
                        <div className="content">
                            <h3 className="title">akogwuemmanuel.com</h3>
                            <span className="copy-right">&copy; All Rights Reserve 2020</span>
                        </div>
                    </div>
                </footer>
            </div>
        </Fragment>
    );
}


export default Template;