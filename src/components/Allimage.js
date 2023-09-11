import React ,{useEffect,useState} from 'react'
import Mycard from './Mycard'
import "./allimage.css"
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




const Allimage = () => {

    const [dm, setdm] = useState(document.querySelector('.product-container'))
    useEffect(() => {
      
    
      return () => {
      setdm(document.querySelector('.product-container'));
      }
    }, [dm])
    


    const imge=[

        {
            id:8,
            src:eighth,
        },
        {
            id:9,
            src:ninth,
        },
        {
            id:12,
            src:twelth,
        },
        {
            id:10,
            src:tenth,
        },
        {
            id:1,
            src:first,
        },
        {
            id:2,
            src:second,
        },
        {
            id:3,
            src:third,
        },
        {
            id:4,
            src:fourth,
        },
        {
            id:5,
            src:fifth,
        },
        {
            id:6,
            src:sixth,
        },
        {
            id:7,
            src:seventh,
        },
        {
            id:11,
            src:elventh,
        },
        {
            id:13,
            src:thirteen,
        },
        {
            id:14,
            src:fourteen,
        },
       

    ];
   


    const btnpressprev = () => {
        let width = dm.clientWidth;
        dm.scrollLeft = dm.scrollLeft - width;
        console.log(width);
    }

    const btnpressnext = () => {
        let width = dm.clientWidth;
        dm.scrollLeft = dm.scrollLeft + width;
        console.log(width);
    }
    return (
    <div className='krloabb'>
        <button className="prev" onClick={btnpressprev}><p className='changes'>&lt;</p></button>
        <button className="next" onClick={btnpressnext}><p>&gt;</p></button>

        <div className="product-container">
        {imge.map(({id,src})=>(
            <Mycard key={id} src={src}/>
        ))}


        </div>


    </div>
  )
}

export default Allimage