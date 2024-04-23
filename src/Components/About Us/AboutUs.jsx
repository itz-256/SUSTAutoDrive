import React from 'react'
import data from "../Data/data.json";
import AboutUsCard from './AboutUsCard';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className='Acontainer' id='Acontainer'>
            <div className='AboutUs'>
                {
                    data.map((data, id) => {
                        return (
                            <AboutUsCard key={id} data={data} />
                        );
                    })}

            </div>
        </div>
    )
}

export default AboutUs



