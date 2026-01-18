import React from 'react'

export const Services = () => {

    const services = [
        {
            id: 1,
            icon: "🌐",
            title: "Web Development",
            description: "Modern, responsive websites built with the latest technologies",
        },
        {
            id: 2,
            icon: "📱",
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications",
        },
        {
            id: 3,
            icon: "🎨",
            title: "UI/UX Design",
            description: "Beautiful, user-friendly interfaces that convert",
        },
        {
            id: 4,
            icon: "💡",
            title: "Consulting",
            description: "Strategic technology consulting for your business",
        },
    ];
    return (

        <section id="Services" className="services-section">
            <h2>
                Our Services
            </h2>
            <p>
                We offer a comprehensive range of services to help your business succeed in the digital world.
            </p>
            <ul id='Services' className='services'>
                {
                    services.map((service) => (
                        <li key={service.id} className='service-card'>
                            <span className='icon'>{service.icon}</span>
                            <h2 className='title'>{service.title}</h2>
                            <p className='description'>{service.description}</p>

                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
