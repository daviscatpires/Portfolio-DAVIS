import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Scatamburgo</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://instagram.com/daviscatamburgo?igshid=OGQ5ZDc2ODk2ZA==" className="footer__social-link" target='blank'>
                <i class="uil uil-instagram"></i>
                </a>
                <a href="https://wa.me/393481804532" className="footer__social-link" target='blank'>
                <i class="uil uil-whatsapp"></i>
                </a>
                <a href="https://github.com/daviscatpires" className="footer__social-link" target='blank'>
                <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Scatamburgo. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
