import "./Slider.css";
import { useState } from "react";
import Slider from "react-slick";
import exp from "./exp.png";
import growth from "./Group 42.png";
import belonging from "./Belonging.png";
import rewards from "./Belonging.png"
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"

const images = [exp, growth, belonging, rewards];

function Sliders() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <SlArrowRight style={{ color: "white", fontSize: "2rem" }} />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <SlArrowLeft style={{ color: "white", fontSize: "2rem" }} />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <div className="Sld">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Sliders;