import Head from "next/head";
import PageHero from "../components/global/PageHero";
import TextBlock from "../components/global/TextBlock";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Honest Towing & Roadside | Contact</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PageHero 
                    heading = 'Contact Us'
                    pageDesc = "the towing company that actually puts our customer's first. We understand that needing emergency car services doesn't make anyone's day better, so we take it upon us to do whatever it takes to make your life easier. We respond fast and are availible 24/7 whenever you need us!"
                    image = 'carcrash.jpg'
                    imageAlt = 'image alt'
                />
                <TextBlock 
                    text = "the towing company that actually puts our customer's first. We understand that needing emergency car services doesn't make anyone's day better, so we take it upon us to do whatever it takes to make your life easier. We respond fast and are availible 24/7 whenever you need us!"
                />
            </main>
        </>
    );
  }