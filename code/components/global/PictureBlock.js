import Image from "next/image";
import BottomWhtGradient from "../util/BottomWhtGradient";
import TopWhtGradient from '../util/TopWhtGradient';

export default function PictureBlock(props) {
    const imageName = '/' + props.image;
    return (
        <section className="picture-block-container">
            <TopWhtGradient />
            <Image
                alt={props.imageAlt}
                src={imageName}
                layout='fill'
                objectFit='cover'
                className='picture-block-image'
            />
            <BottomWhtGradient />
        </section>
    );
}
