import Calculator from '../util/Calculator'

export default function InstantQuote() {
    return (
        <section id="prices" className="instant-quote-container flex flex-ai-c flex-jc-sb">
            <div className="instant-quote-header">
                <h2>Instant Quote Calculator</h2>
                <p>
                    When you decide to call a towing company to find out how much 
                    it's going to cost to get your car towed. The last thing you want to hear is "We'll get back to you with a quote". 
                    At Honest Towing, we pride ourselves with putting our customer first. So... we made a better way! You can view exactly how much your service is going to cost,
                    and better yet, even <span className="highlight">order services</span> right from <span className="highlight">our website!</span>
                </p>
            </div>
            <div className="calculator-container flex flex-ai-c flex-jc-c">
                <Calculator />
            </div>
        </section>
    )
}
