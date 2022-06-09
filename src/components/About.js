import React from 'react';
import './About.css';
import logo from '../components/img/creator.jpg';
/*import { Button } from './Button';
import { Link } from 'react-router-dom';*/


function About() {
    return (
                <div className='card'>
                    <div className='profile-sidebar'>
                        <img src={logo} width="200px" height="200px" alt="creator" className='profile-image' />
                        <ul className='social-list'>
                            <li className='social-item'>
                                <a href="/" className='social-link'><i className='fab fa-twitter'></i></a>
                            </li>
                            <li className='social-item'>
                                <a href="https://www.linkedin.com/in/danielshepelev/" className='social-link'><i className='fab fa-linkedin'></i></a>
                            </li>
                            <li className='social-item'>
                                <a href="https://www.discordapp.com/users/277487535427551232" className='social-link'><i className='fab fa-discord'></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className='profile-main'>
                        <h2 className='profile-name'>Daniel Shepelev</h2>
                        <p className='profile-position'>Front-end developer, Cosmopolitan creator</p>
                        <p className='profile-body'>
                            I am a cosmopolitan and I fond of computer technology, space and antiquity. 
                        </p>
                        <p className='profile-body'>
                            Mobile: +48 571 510 702
                        </p>
                        <p className='profile-body'>
                            Email: shepelev.daniel.en@gmail.com
                        </p>
                        <p className='profile-body'>
                            Address: Leszno, Poland, 64-100 
                        </p>
                    </div>
                </div>
    );
}

export default About;