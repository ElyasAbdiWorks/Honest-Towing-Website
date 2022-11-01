
// import components
import Hero from '../components/home/Hero'
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import InstantQuoteAd from '../components/home/InstantQuoteAd';
import Services from '../components/home/Services';
import InstantQuote from '../components/home/InstantQuote';
import TextwithHeader from '../components/global/TextwithHeader';
import TextBlock from '../components/global/TextBlock';

export default function Home() {
  return (
    <main>
      <Hero />
      <TextwithHeader 
        title = 'We are...'
        text = "a family owned towing and roadside business dedicated to serving our neighbors in the Twin Cities. Our roots
        in the towing business stretch back decades. But one thing has stayed consistant, our desire to help!"
        // addBtn = {true}
        // btnLink = '/about'
        // btnText = 'Learn More!'
      />
      <Testimonials 
        headerTitle = "Don't take our word for it..."
        subHeading = "Read our google reviews and see what our customer have to say!"
        includeMessage = {true}
      />
      <InstantQuoteAd />
      <Services />
      <TextBlock 
        text = "At Honest Towing, we actually put our customer's first. We understand that needing emergency car services doesn't make anyone's day better, so we take it upon us to do whatever it takes to make your life easier. We respond fast and are availible 24/7 whenever you need us!"
      />
      <InstantQuote />
    </main>
  );
}
