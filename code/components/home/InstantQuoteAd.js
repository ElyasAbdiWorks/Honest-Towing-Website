// components
import Banner from "../util/Banner"

export default function InstantQuoteAd() {
    return (
        <section className="instant-quote-ad-section-container flex flex-ai-c flex-jc-c">
            <Banner 
                headline="Get An Instant Quote Right Now"
                desc="No need to call around. You can view exactly how much your bill is going to 
                be right here on our website!"
                cta="Instant Quote"
                link='/quote'
            />
        </section>
    )
}