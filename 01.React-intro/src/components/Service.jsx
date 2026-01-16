import React from 'react'
import '../assets/css/service.css'
const Service = ({ services }) => {
    return (
        <>
            <h2>Our Services</h2>
            <p>We offer a comprehensive range of services to help your business succeed in the digital world.</p>

            <div>         {services.map((servcard) => {
                return (<div className='cards' key={servcard.id}>
                    <span>{servcard.icon}</span>
                    <h3>{servcard.title}</h3>
                    <p>{servcard.description}</p>

                </div>)
            })}</div>

        </>

    )
}

export default Service