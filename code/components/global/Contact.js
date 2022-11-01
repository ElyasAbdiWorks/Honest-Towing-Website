

export default function Contact() {
    return (
        <section id="contact" className="contact-container flex flex-ai-c">
            <div className="contact-message">
                <h1>Contact Us</h1>
                <p>
                    Our staff are always availible to schedule services or answer any questions you may have!
                </p>
            </div>
            <div className="contact-info">
                <div className="phone-container">
                    <h5>Phone</h5>
                    <a href="tel:6513878909"><p>(651) 387 8909</p></a>
                </div>
                <div className="email-container">
                    <h5>Email</h5>
                    <a href="mailto:contact@honest-towing.com"><p>contact@honest-towing.com</p></a>
                </div>
            </div>
        </section>
    )
}