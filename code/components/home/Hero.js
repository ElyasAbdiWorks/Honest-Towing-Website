// packages
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="hero-container flex flex-ai-c">
        <div className="whiteleft"></div>
        <Image
            alt="Towing employee hooking up car to tow truck"
            src='/hero-image.jpeg'
            layout='fill'
            objectFit='cover'
            className='hero-bkg'
            priority
        />
        <div className="hero-heading-container">
            <div className="hero-main-heading">
                <h1>The Best Towing Company In The Twin Cities</h1>
            </div>
            <div className="hero-sub-heading">
                <h3>Available 24/7 for <br/>every type of emergency</h3>
            </div>
            <a href="tel:6513878909"><button className="primary-cta-button">Call Us Now</button></a>
        </div>
        <div className="message-to-customer flex flex-ai-c flex-jc-c">
            <div className="message-contents flex flex-ai-c flex-jc-c">
                <p>Get An Instant Quote Now</p>
                <Link href='/quote'><a><button className="ad-cta-btn">Instant Quote</button></a></Link>
            </div>
        </div>
    </section>
  );
}