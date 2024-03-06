import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <h1 className="Bouesso">Bouesso-Service</h1>
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className='box' key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, listItemIndex) => (
                  <li key={listItemIndex}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>      
        <span>Powered by <a href="https://movie-mak.netlify.app/" target="_blank" rel="noopener noreferrer" className="bouesso">Movie-Mak</a> and
        <a href="https://mak-developer.netlify.app/" target="_blank" rel="noopener noreferrer" className="bouesso"> Mak-Developer</a></span>
      </div>
    </>
  );
}

export default Footer;
