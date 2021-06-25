import React from 'react';
import './style.scss';

import githubIcon from 'src/assets/images/001-github.svg';
import pdfIcon from 'src/assets/images/001-pdf.svg';
import linkedinIcon from 'src/assets/images/002-linkedin.svg';
import CvDownload from 'src/assets/CV-KillianCourvoisier-DeveloppeurWeb.pdf';

const Footer = () => (
  <div className="footer">
    <a href={CvDownload} download>
      <div className="footer__download">
        <img src={pdfIcon} alt="pdf icon" />
        <p>CV - PDF</p>
      </div>
    </a>

    <a href="https://github.com/KillianCourvoisier">
      <div className="footer__icon__github">
        <img src={githubIcon} alt="github icon" />
        <p>Page GitHub</p>
      </div>
    </a>

    <a href="https://www.linkedin.com/in/killian-courvoisier-158904207/">
      <div className="footer__icon__linkedin">
        <img src={linkedinIcon} alt="linkedin icon" />
        <p>Profile LinkedIn</p>
      </div>
    </a>
  </div>
);

export default Footer;
