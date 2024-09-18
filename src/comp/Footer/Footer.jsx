import React from 'react';
import './Footer.css';
import {assets} from "../../assets/assets";


const Footer = () => {

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    };
    return (

        <div className="footer">
            <div className="footer-left">
                <p>SINCE 2024</p>
                <p>peng0256.@GMAIL.COM</p>
            </div>

            <div className="footer-center">
                <ul className="footer-social">
                    <li><a href="https://www.instagram.com/peng0256.png/"><img src={assets.inst} alt="Instagram"/></a>
                    </li>
                    <li><a href="https://t.me/peng0256"><img src={assets.telegram} alt="Telegram"/></a></li>
                    {/*<li><a href="#"><img src={assets.vk} alt="VK"/></a></li>*/}
                </ul>
            </div>

            <div className="footer-right">
                <div className="back-to-top" onClick={scrollToTop}>
                    <span>BACK TO TOP </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
