

export default function TextBlock(props) {
  return (
      <section className="text-block-container flex flex-col flex-ai-c flex-jc-c">
          <p>{props.text}</p>
      </section>
  );
}
