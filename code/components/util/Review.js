// packages
import Image from "next/image"
import starsSVG from "../../public/stars.svg"


export default function Review({name, initials, quality, descr}) {
    return (
        <div className="review-container">
            <div className="customer flex flex-ai-c">
                <div className="customer-initials flex flex-ai-c flex-jc-c">{initials}</div>
                <h5>{name}</h5>
            </div>
            <div className="stars-container">
                <Image 
                    src={starsSVG}
                    alt="5 star rating"
                    layout='fill'
                    objectFit='fill'
                    objectPosition='left'
                />
            </div>
            <div className="quality-container">
                <h3>{quality}</h3>
            </div>
            <div className="review-descp">
                <p>{descr}</p>
            </div>
        </div>
    )
}