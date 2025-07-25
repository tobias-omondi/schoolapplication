'use client';
import React from 'react';
import './Footer.css';

import logopng from '/src/assets/schoollogo.webp';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { motion } from 'framer-motion';

// BOUNCE VARIANT FOR LINKS
const bounceVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
      delay: i * 0.1
    }
  })
};

const Footer = () => {
  const quickLinks = ['HOME', 'ABOUT US', 'BLOG', 'GALLERY', 'NEWS & EVENTS', 'CHILD PORTFOLIO'];
  const facilities = ['CONFERENCE', 'LIBRARIES', 'RESEARCH EQUIPMENT', 'SPORTS', 'IT SUPPORTS'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className='footer-container-level'
    >
      <div className='footer-container'>

        {/* Logo and animated title */}
        <div className='school-footerlogo-container'>
          <img src={logopng} alt='school-logo' />
          
          <h2 className="footer-title">
            BrightOak{" "}
            {"Academy".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </h2>

          <p className="footer-description">
            A forward-thinking school committed to nurturing creativity, leadership, and academic excellence in every learner.
          </p>
        </div>

        {/* Quick links */}
        <div className='footer-web-column'>
          <h1>QUICK LINKS</h1>
          <div className='footer-web-links'>
            <ul>
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={bounceVariant}
                  viewport={{ once: true }}
                >
                  <a href={`/${link.toLowerCase().replace(/ & | /g, '-')}`}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Facilities */}
        <div className='footer-facilities-column'>
          <h1>OUR FACILITIES</h1>
          <div className='footer-facilities-links'>
            <ul>
              {facilities.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={bounceVariant}
                  viewport={{ once: true }}
                >
                  <a href='/'>{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className='footer-contact-column'>
          <h1>CONTACT US</h1>
          <div className='footer-contact-list'>
            <ul>
              <motion.li custom={0} initial="hidden" whileInView="visible" variants={bounceVariant}>
                <a href='/'>EMAIL: <span>brightoak@gmailinfo.com</span></a>
              </motion.li>
              <motion.li custom={1} initial="hidden" whileInView="visible" variants={bounceVariant}>
                <a href='/aboutus'>LOCATION</a>
              </motion.li>
              <motion.li custom={2} initial="hidden" whileInView="visible" variants={bounceVariant}>
                <a href='/blog'>CONTACT US</a>
              </motion.li>

              {/* Social icons */}
              <motion.div
                className='footer-social-links'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.5 }}
              >
                <ul>
                  {[<FaInstagram />, <FaXTwitter />, <FaYoutube />, <FaFacebook />, <FaLinkedin />].map((icon, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {icon}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Subscribe */}
              <motion.div
                className="footer-subscribe"
                initial="hidden"
                whileInView="visible"
                variants={bounceVariant}
                custom={3}
              >
                <p>Subscribe to our newsletter</p>
                <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit">Subscribe</button>
                </form>
              </motion.div>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} BrightOak Academy. All rights reserved.
      </div>
    </motion.div>
  );
};

export default Footer;
