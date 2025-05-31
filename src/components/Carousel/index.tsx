import Slider from "react-slick";
import { useEffect, useRef } from "react";
import BookCover from "../BookCover";
import BOOKS from "../../data/books";
import "./Carousel.css";

const Carousel = () => {
  let sliderRef: any = useRef(null);

  const children = BOOKS.map((book) => (
    <BookCover key={book.headerText} props={book} />
  ));

  const today = new Date();
  const initialSlideIndex = BOOKS.findIndex(({ startDate, endDate }) => {
    const start = startDate;
    const end = endDate;

    if (Boolean(start) && Boolean(end)) {
      return today >= start! && today <= end!;
    }

    return 0;
  });

  useEffect(() => {
    if (sliderRef) {
      sliderRef.slickGoTo(initialSlideIndex);
    }
  }, [initialSlideIndex]);

  const CAROUSEL_SETTINGS = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 300,
    focusOnSelect: true,
    variableWidth: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    draggable: true,
  };

  return (
    <div className="carousel-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...CAROUSEL_SETTINGS}
      >
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
