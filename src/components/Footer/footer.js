import css from './footer.module.css';
import React from 'react';
import email from './email.svg'


function Footer() {
  return (
    <div className={css.footer}>
      <p>Contact Us: 
        <img className={css.icon} src={email} alt='' />
        <a href="mailto:support@todoapp.com">support@todoapp.com</a></p>
        
    </div>
  );
}

export default Footer;