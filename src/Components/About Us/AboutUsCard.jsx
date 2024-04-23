import React from 'react'
import "./AboutUsCard.css"


const AboutUsCard = ({ data: { title, imageSrc, description, team } }) => {
    return (
        <div className='Ccontainer' >
            <img src={imageSrc} alt="" className='Cimg' />
            <h3 className='Ctitle'>{title}</h3>
            <p className='Cdescription'>{description}</p>
            <h3 className='Cteam'>{team}</h3>
        </div>
    )

}

export default AboutUsCard
