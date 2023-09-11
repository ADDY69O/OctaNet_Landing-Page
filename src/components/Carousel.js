import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
export default ()=> {
 
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
<div><img src="../assest/1.jpg" alt="" /></div>
<div><img src="../assest/2.jpg" alt="" /></div>
<div><img src="../assest/3.jpg" alt="" /></div>
<div><img src="../assest/4.jpg" alt="" /></div>
<div><img src="../assest/5.jpg" alt="" /></div>
<div><img src="../assest/6.jpg" alt="" /></div>
<div><img src="../assest/7.jpg" alt="" /></div>
<div><img src="../assest/8.jpg" alt="" /></div>
<div><img src="../assest/9.jpg" alt="" /></div>
<div><img src="../assest/10.webp" alt="" /></div>
<div><img src="../assest/11.webp" alt=""/></div>
<div><img src="../assest/12.jpeg" alt=""/></div>
<div><img src="../assest/13.jpeg" alt=""/></div>
<div><img src="../assest/14.jpeg" alt=""/></div>



</Carousel>
};
