import "./BookCover.css";

const BookCover = ({ props }: any) => {
  return (
    <div className="BookCover">
      <h2>{props.headerText}</h2>
      {props.coverFileName ? (
        <figure>
          <img
            className={`cover ${props.appendClassName ?? ""}`}
            src={`/assets/book_covers/${props.coverFileName}`}
            alt={props.fallbackText}
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = "/assets/book_covers/default.png";
            }}
          />
          <figcaption>
            {Boolean(props.footerText) && <p>{props.footerText}</p>}
          </figcaption>
        </figure>
      ) : (
        <p>{props.fallbackText ?? "missing fallback text too... :("}</p>
      )}
    </div>
  );
};

export default BookCover;
