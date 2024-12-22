// import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slaider.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import image1 from '../../assets/Slaider/slaider-1.jpg'
import image2 from '../../assets/Slaider/slaider-2.jpg'
import image3 from '../../assets/Slaider/slaider-3.jpg'
// import image4 from '../../../assets/carasol-4.jpg'


const Bannar = () => {

    // useEffect(() => {
    //     document.title = "Home | CENE HUB"
    // }, [])


    return (
        <>
            <div className='pt-[72px]' >

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='h-[80vh] w-full object-cover' src={image1} alt="Slide 1" /></SwiperSlide>
                    <SwiperSlide><img className='h-[80vh] w-full object-cover' src={image2} alt="Slide 2" /></SwiperSlide>
                    <SwiperSlide><img className='h-[80vh] w-full object-cover' src={image3} alt="Slide 3" /></SwiperSlide>
                    {/* <SwiperSlide><img className='h-[80vh] w-full max-sm:object-cover' src={image4} alt="Slide 4" /></SwiperSlide> */}
                </Swiper>
            </div>
           
        </>

    );
};

export default Bannar;