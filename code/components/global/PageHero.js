// packages
import Image from 'next/image';

// components
import BottomWhtGradient from '../util/BottomWhtGradient';

/**
 *
 * @param string image
 * @param string imageAlt
 * @param string heading
 * @param string pageDesc
 * @returns 
 */
export default function PageHero(props) {
    const imageName = '/' + props.image;

  return (
      <section className='page-hero flex flex-ai-c'>
        <div className='whiteleft'></div>
            <Image
                alt={props.imageAlt}
                src={imageName}
                layout='fill'
                objectFit='cover'
                className='page-hero-bkg'
                priority
            />
        <div className='page-hero-heading'>
            <h1>{props.heading}</h1>
            <h6>{props.pageDesc}</h6>
        </div>
        <BottomWhtGradient />
      </section>
  );
}