import React from 'react';
import "./Hero.css";
import dark_arrow from "../../assets/dark_arrow.png";

const Hero = () => {
    return (
        <div className='hero container' id='hero'>
            <div className='hero-text'>
                <h1>
                    A research and innovation team on self-driving technology at SUST

                </h1>
                <p>
                    Our mission is to be the hub of autonomous driving technology in Bangladesh.
                    It is the place where innovative minds come to learn about the challenges
                    of deploying software on a full-scale autonomous car
                </p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="Arrow" /></button>

            </div>

        </div>
    )
}

export default Hero
