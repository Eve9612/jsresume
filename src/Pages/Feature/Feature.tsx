const Feature = () => ( 

    <div style={{maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial, sans-serif', padding: '20px'}}>Testing
        <h1 style={{fontSize: '28px', fontWeight: 'bold', textAlign: 'center'}}>Humanity First Employment 
        </h1>
        <p style={{textAlign: 'center', marginBottom: '30',}}>
            Conneting job seekers with manufacturing employers in Missouri. 
        </p>

        {[
        {
            title: "1. Support for Employers",
            description: "We help manufacturers hire reliable immigrant workers and offer tools to improve retention and productivity."
         },
        {
            title: "2. Job Placement Services",
            description: "We connect qualified foreign-born job seekers with factory jobs that pay $15 to $20 per hour."
        },
        {
            title: "3. Tiered Pricing Model",
            description: "Employers can choose from basic, standard, or premium hiring packages depending on their needs and size."
        }
            ].map((feature, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '10px', backgroundColor: 'white', color: 'black' }}>
            <h2 style={{ fontSize: '20px' }}>{feature.title}</h2>
            <p>{feature.description}</p>
            </div>
        ))}
            {/* Call to Action */}
            <div style={{ textAlign: 'center' }}>
            <p>Interested in working with us?</p>
            <a href="/contact" style={{ backgroundColor: '#4f46e5', color: 'white', padding: '10px 20px', textDecoration: 'none' }}>
            Contact Us
            </a>
            </div>
            </div>    
        );

export default Feature;
