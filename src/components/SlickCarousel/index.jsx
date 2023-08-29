import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SlickCarousel = ({ data, title }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    // <img src={LeftArrow} alt="prevArrow" {...props} />
    <BsArrowLeft {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    // <img src={RightArrow} alt="nextArrow" {...props} />
    <BsArrowRight {...props} />
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div
      className="card__container"
      style={{
        // width: "100%",
        background: "purple",
        margin: "50px 100px",
      }}
    >
      <h2> {title}</h2>
      <Slider
        {...settings}
        className="card__container--inner"
        style={{
          //   width: "100%",
          background: "pink",
          display: "flex",
        }}
      >
        {data.map((item, index) => {
          return (
            <div
              className="card__container--inner--card"
              key={index}
              style={{
                display: "flex",
              }}
            >
              <img src={item.url} alt="hero_img" />

              <div className="card__container--inner--card--date_time">
                <img src="https://www.wanderon.in/svg/clock.svg" alt="time" />
                <p>4D-5D</p>

                <img
                  src="https://www.wanderon.in/svg/map-pin.svg"
                  alt="location"
                  style={{ marginLeft: 10 }}
                />
                <p>Delhi</p>
              </div>

              <h2>Meghalaya Backpacking</h2>
              <p>
                starts at <span>₹15,999/-</span>
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
