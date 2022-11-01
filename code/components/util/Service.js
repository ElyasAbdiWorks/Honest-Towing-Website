import Image from "next/image";

export default function Service(props) {
  return (
      <div className='service-container flex flex-col flex-jc-c'>
        <Image src={props.image} alt={props.alt} layout='fill' objectFit="scale-down"/>
        <h3>{props.service}</h3>
        <p>{props.desc}</p>
      </div>
  );
}
