import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

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


const data=[

  {
      id:8,
      img:eighth,
  },
  {
      id:9,
      img:ninth,
  },
  {
      id:12,
      img:twelth,
  },
  {
      id:10,
      img:tenth,
  },
  {
      id:1,
      img:first,
  },
  {
      id:2,
      img:second,
  },
  {
      id:3,
      img:third,
  },
  {
      id:4,
      img:fourth,
  },
  {
      id:5,
      img:fifth,
  },
  {
      id:6,
      img:sixth,
  },
  {
      id:7,
      img:seventh,
  },
  {
      id:11,
      img:elventh,
  },
  {
      id:13,
      img:thirteen,
  },
  {
      id:14,
      img:fourteen,
  },
 

];



function Changed() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
     
      <div className=' relative flex items-center w-full '>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 bg-white' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img
              className='h-[400px] max-w-[300px] min-w-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
        <MdChevronRight className='bg-white opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default Changed;