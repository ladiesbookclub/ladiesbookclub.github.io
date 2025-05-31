import "./DropCapParagraph.css";

const DropCapParagraph = ({ text }: any) => {
  if (!text) return null;

  const firstLetter = text[0];
  const rest = text.slice(1);

  return (
    <div className="drop-cap-wrapper">
      <span className="drop-cap">{firstLetter}</span>
      <p className="drop-cap-text">{rest}</p>
    </div>
  );
};

export default DropCapParagraph;
