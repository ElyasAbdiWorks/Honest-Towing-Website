// packages
import Link from "next/link"

// import components
import FeatureBubble from '../util/FeatureBubble'

export default function Features() {
    return (
        <section id="about" className="features-container flex flex-ai-c flex-jc-c">
            <div className="features-description flex flex-col">
                <h2>Why Are We The Best?</h2>
                <p>It's simple! We are the towing company that actually puts our customer's first. 
                    We understand that needing emergency car services doesn't make anyone's day better,
                     so we take it upon us to do whatever it takes to make your life easier. We respond fast
                    and are availible 24/7 whenever you need us!
                </p>
                <Link href='/about'><a className="learn-more-btn"><button className="secondary-cta-btn">Learn More!</button></a></Link>
            </div>
            <div className="features-highlights">
                <div className="feature1"><FeatureBubble feature="Affordable" /></div>
                <div className="feature2"><FeatureBubble feature="Trusted" /></div>
                <div className="feature3"><FeatureBubble feature="Experienced" /></div>
            </div>
        </section>
    )
}