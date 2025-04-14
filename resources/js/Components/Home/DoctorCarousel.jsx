import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FiFacebook } from "react-icons/fi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const arrowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#244A6A",
    border:"solid 3px #244A6A",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    cursor: "pointer",
    fontSize: "20px",               
    fontWeight: "bold",       
  };

const NextArrow = ({ onClick }) => (
    <div style={{ ...arrowStyle, right: "-20px" }} onClick={onClick}>
      <FaChevronRight size={20} color="#fff" />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div style={{ ...arrowStyle, left: "-20px" }} onClick={onClick}>
      <FaChevronLeft size={20} color="#fff" />
    </div>
  );

const DoctorCarousel = ({ doctors }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Explorez nos médecins</h2>
      <Slider {...settings}>
        {doctors.map((doctor, i) => (
          <div key={i} className="card-container">
            <div className={`doctor-card ${i === activeSlide ? "active" : ""}`}>
              <img src={doctor.image} alt={doctor.name} className="doctor-img" />
              <h3>{doctor.name}</h3>
              <p className="specialty">{doctor.specialty}</p>
            </div>
          </div>
        ))}


      </Slider>
    </div>
  );
};

export default DoctorCarousel;
