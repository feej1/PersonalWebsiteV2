import './Footer.css';
import React from 'react';



const footerText = 
    `Designed and built by Joseph Fee`

function Footer () {
    return (
        <div>
            <footer class="site-footer">
                      <p class="footer-text">{footerText}</p>
            </footer>
        </div>
    )
}




export default Footer;
