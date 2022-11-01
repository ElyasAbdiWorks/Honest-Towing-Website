// components
import Review from '../util/Review'

/**
 * 
 * @param string headerTitle 
 * @param string subHeading 
 * @param bool includeMessage "this is message"
 */
export default function Testimonials(props) {
    return (
        <section id="testimonials" className="testimonials-container">
            <div className="testimonials-description">
                <h1>{props.headerTitle}</h1>
                <h3>{props.subHeading}</h3>
            </div>
            <div className="testimonials flex flex-col flex-jc-c flex-ai-c">
                <div className="reviews-container">
                    <article className="review1">
                        <Review 
                            name="Abdirazak Yusuf"
                            initials="AY"
                            quality="Affordable"
                            descr="Amazing Job!
                            Would recommend to anyone 
                            who needs their car towed!
                            Very cheap prices!"
                        />
                    </article> 
                    <article className="review2">
                        <Review 
                            name="Zan"
                            initials="ZN"
                            quality="Professionalism"
                            descr="They were there within an hour and the tech was kind enough to show me some tips on what 
                            to do when the tire wouldn't come off. Price was more than reasonable and I would highly recommend!"
                        />
                    </article>
                    <article className="review3">
                        <Review 
                            name="MJ"
                            initials="MJ"
                            quality="Quick"
                            descr="Honest Towing is honestly the best towing service I've come across. They were quick and efficient. If your're ever
                            in a jam, this is the towing company to go to!"
                        />
                    </article>
                </div>
            </div>
            {props.includeMessage ? 
                <div className="message-container flex flex-col flex-ai-c flex-jc-c">
                    <p>We value your opinion. Leave some feed back for us on google!</p>
                    <a href="https://g.page/r/CYlruc7DAeScEAg/review"><button className="secondary-cta-btn">Review Us!</button></a>
                </div> : null
            }
            
        </section>
    )
}