// packages
import Link from "next/link"

export default function Banner(props) {
    return (
        <div className="banner-ad-container flex flex-ai-c flex-jc-sb">
            <div className="banner-ad">
                <h2>{props.headline}</h2>
                <p>{props.desc}</p>
            </div>
            <div className="banner-cta">
            <Link href={props.link}><a><button className="ad-cta-btn">{props.cta}</button></a></Link>
            </div>
        </div>
    )
}