import React, { Component } from "react";
import Slider from "react-slick";

import first from "../assest/1.jpg";
import second from "../assest/2.jpg";
import third from "../assest/3.jpg";
import fourth from "../assest/4.jpg";
import fifth from "../assest/5.jpg";
import sixth from "../assest/6.jpg";
import seventh from "../assest/7.jpg";
import eighth from "../assest/8.jpg";
import ninth from "../assest/9.jpg";
import tenth from "../assest/10.webp";
import elventh from "../assest/11.webp";
import twelth from "../assest/12.jpeg";
import thirteen from "../assest/13.jpeg";
import fourteen from "../assest/14.jpeg";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className="text-white">
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
            <img src={first} alt="" />
          </div>
          
          <div>
            <img src={second} alt="" />
          </div>
          
          <div>
            <img src={third} alt="" />
          </div>
          
          <div>
            <img src={fourteen} alt="" />
          </div>
          
          <div>
            <img src={fifth} alt="" />
          </div>
          
          <div>
            <img src={sixth} alt="" />
          </div>
          
          <div>
            <img src={seventh} alt="" />
          </div>
          
          <div>
            <img src={eighth} alt="" />
          </div>
          
          <div>
            <img src={ninth} alt="" />
          </div>
          
          <div>
            <img src={tenth} alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}