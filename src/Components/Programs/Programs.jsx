import React from 'react'
import "./Programs.css"
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
    return (
        <div className='programs' id='keyfeatures'>
            <div className='program'>
                <img src={card1} alt="One" />
                <div className='caption'>
                    <img src={program_icon_1} alt="" />
                    <p>Reinforcement based model for autonomous driving</p>

                </div>
            </div>
            <div className='program'>
                <img src={card2} alt="Two" />
                <div className='caption'>
                    <img src={program_icon_2} alt="" />
                    <p>
                        Better perception and navigation system
                    </p>
                </div>
            </div>

            <div className='program'>
                <img src={card3} alt="Three" />
                <div className='caption'>
                    <img src={program_icon_3} alt="" />
                    <p>Advance computer vision techniques</p>
                </div>
            </div>



        </div>
    )
}

export default Programs
