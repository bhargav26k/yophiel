import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-prev slick-arrow"
      style={{
        display: 'block',
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '50%',
        border: 'none',
        width: '40px',
        height: '40px',
        color: '#fff',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      &#10094;
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-next slick-arrow"
      style={{
        display: 'block',
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '50%',
        border: 'none',
        width: '40px',
        height: '40px',
        color: '#fff',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      &#10095;
    </button>
  );
};

const Hero18 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    swipeToSlide: true,
    touchMove: true,
    centerMode: true,
    centerPadding: '0px',
  };

  const slides = [
    {
      id: 1,
      image: 'https://yophiel.net/img/photos/bg28.jpg',
      heading: 'Innovative Solutions',
    },
    {
      id: 2,
      image: 'https://yophiel.net/img/photos/bg29.jpg',
      heading: 'Connecting the World',
    },
    {
      id: 3,
      image: 'https://yophiel.net/img/photos/bg30.jpg',
      heading: 'Empowering Businesses',
    },
    {
      id: 4,
      image: 'https://yophiel.net/img/photos/bg31.jpg',
      heading: 'Driving Innovation',
    },
  ];

  return (
    <section className="wrapper bg-light" style={{ margin: '0 25px', textAlign: 'center' }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="container-card">
            <div
              className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-dark-500"
              style={{
                backgroundImage: `url(${slide.image})`,
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                borderRadius: '15px', // Adjust the border radius as needed
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '15px', // Inherit the border radius from the parent
                }}
              />
              <h1
                className="display-2"
                style={{
                  zIndex: 2,
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                {slide.heading}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero18;
