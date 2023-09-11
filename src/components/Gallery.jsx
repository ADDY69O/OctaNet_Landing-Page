            import React from 'react'


    import "react-multi-carousel/lib/styles.css"
        
    import Changed from './Changed';

            const Gallery = () => {
                let data = [
                    {
                        des: "1",
                        imgSrc: "../assest/1.jpg"
                    },
                    {
                        des: "2",
                        imgSrc: "../assest/2.jpg"
                    },
                    {
                        des: "3",
                        imgSrc: "../assest/3.jpg"
                    },
                    {
                        des: "4",
                        imgSrc: "../assest/4.jpg"
                    },
                    {
                        des: "5",
                        imgSrc: "../assest/5.jpg"
                    },
                    {
                        des: "6",
                        imgSrc: "../assest/6.jpg"
                    },
                    {
                        des: "7",
                        imgSrc: "../assest/7.jpg"
                    },
                    {
                        des: "8",
                        imgSrc: "../assest/8.jpg"
                    },
                    {
                        des: "9",
                        imgSrc: "../assest/9.jpg"
                    },
                    {
                        des: "10",
                        imgSrc: "../assest/10.webp"
                    },
                    {
                        des: "11",
                        imgSrc: "../assest/11.webp"
                    },
                    {
                        des: "12",
                        imgSrc: "../assest/12.jpeg"
                    },
                    {
                        des: "13",
                        imgSrc: "../assest/13.jpeg"
                    },
                    {
                        des: "14",
                        imgSrc: "../assest/14.jpeg"
                    },
                ];
            return (
                <div className='bg-white w-full '>
                    
                    <h1 className='mx-auto items-center text-center text-white md:text-4xl sm:text-3x text-2xl  font-bold py-2 '>GALLERY</h1>
                    <Changed/>

                </div>
            )
            }

            export default Gallery