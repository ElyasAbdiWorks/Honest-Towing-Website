// packages
import Link from "next/link";

/**
 * 
 * @param bool reversed 
 * @param string title
 * @param string text 
 * @param bool addBtn
 * @param string btnText
 * @param string btnLink
 * @returns 
 */
export default function TextwithHeader(props) {
    const className = props.reversed ? 'text-with-header-container-reversed' : 'text-with-header-container';
  return (
      <section id="textWithHeader" className={className}>
        <div className="text-with-header-header flex flex-ai-c flex-jc-sb">
          <h1>{props.title}</h1>
        </div>
        <div className="text-with-header-content flex flex-col">
          <p>{props.text}</p>
          {props.addBtn ? <Link href={props.btnLink}><a className="learn-more-link"><button className="learn-more-btn secondary-cta-btn">{props.btnText}</button></a></Link> : null }
        </div>
        
      </section>
  );
}
