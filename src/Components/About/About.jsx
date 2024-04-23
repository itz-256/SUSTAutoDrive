import React from 'react'
import "./About.css";
import picture from "../../assets/picture.png"
import play_icon from "../../assets/play-icon.png"

const About = ({ setPlayState }) => {
    return (
        <section className='about' id='howitworks'>

            <div className="about-left">
                <img src={picture} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => {
                    setPlayState(true)
                }} />
            </div>
            <div className="about-right">
                <h3>HOW IT WORK'S</h3>
                <h2>
                    Nurturing the global leaders in autonomous driving technology to develop more
                    advanced and safer technology for the road!
                </h2>
                <p>
                    SUST Autodrive tasted the basic software architecture for a
                    self-driving car and became successful with it. Our goal is to develop
                    an autonomous car and achieve level four autonomy
                    for the critical road condition of Bangladesh.

                </p>
                <p>
                    We applied machine learning techniques and computer vision algorithms with proper control theory.
                    As our simulation works properly, we are aiming to develop Bangladesh's first self-driving
                    car in real life as soon as possible.
                </p>
                <p>
                    We are aiming to collaborate with companies with the same interests to make the first
                    self-driving car in Bangladesh and achieve level 4 autonomy.

                </p>
            </div>

        </section>
    )
}

export default About
