import Head from "next/head";
import PageHero from "../components/global/PageHero";
import TextBlock from '../components/global/TextBlock';
import InstantQuote from '../components/home/InstantQuote';
import Testimonials from "../components/home/Testimonials";

export default function Quote() {
    return (
        <>
            <Head>
                <title>Honest Towing & Roadside | Quote</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PageHero 
                    heading = 'Our Prices'
                    image = 'carcrash.jpg'
                    imageAlt = 'image alt'
                    pageDesc = "It's simple! We are the towing company that actually puts our customer's first. We understand 
                    that needing emergency car services doesn't make anyone's day better, so we take it upon us to 
                    do whatever it takes to make your life easier. We respond fast and are availible 24/7 whenever 
                    you need us!"
                />
                <InstantQuote />
                <TextBlock 
                    text = "It's simple! We are the towing company that actually puts our customer's first. We understand 
                    that needing emergency car services doesn't make anyone's day better, so we take it upon us to 
                    do whatever it takes to make your life easier. We respond fast and are availible 24/7 whenever 
                    you need us!"
                />
                <Testimonials 
                    headerTitle = "Our Reviews"
                    subHeading = "Read what our customers have to say!"
                />
            </main>
        </>
    );
  }