import Image from 'next/image';
import BottomWhtGradient from '../util/BottomWhtGradient';
import TopWhtGradient from '../util/TopWhtGradient';

/**
 * this is a full screen (height) component that allows for a title and text paragraph with a picture in the background. similar to the page hero component.
 * @param string 'image' // file name of the image
 * @param string 'imageAlt' // alt tag desc
 * @param string 'title' // title of content
 * @param stirng 'text' // insert text
 * @param bool 'reversed' // determines which side the conent will be positions, either right or left
 */
export default function DescWithPictureFS(props) {
    const imageName = '/' + props.image;
  return (
      <section className={props.reversed ? 'description-with-picture-fs-container-reversed flex flex-col' : 'description-with-picture-fs-container flex flex-col'}>
        <TopWhtGradient />
            <div className={props.reversed ? 'whiteRight' : 'whiteleft'}></div>
            <Image
                alt={props.imageAlt}
                src={imageName}
                layout='fill'
                objectFit='cover'
                className='desc-pic-bkg'
            />
            <div className='content flex flex-col'>
              <h1>{props.title}</h1>
              <p>{props.text}</p>
            </div>
        <BottomWhtGradient />
      </section>
  );
}
