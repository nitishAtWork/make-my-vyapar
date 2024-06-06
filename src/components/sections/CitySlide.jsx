import React , {lazy} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
const CityCard = lazy(() => import('../common/CityCard'));

const CitySlide = () => {
  return (
    <div>
      <div className="container  ">
        <p className="text-lg mb-2 font-medium">FIND SUPPLIERS BY LOCATION</p>
        <div className=" mb-4 p-1">
          <div className=' w-full '>
            <Swiper
              loop={true}
              speed={800}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              // navigation={true}
              // navigation={{
              //   prevEl: '.prev-slide',
              //   nextEl: '.next-slide',
              // }}
              breakpoints={{
                240: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                868: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
                1224: {
                  slidesPerView: 6,
                  spaceBetween: 18,
                },
                1424: {
                  slidesPerView: 8,
                  spaceBetween: 18,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="serv-slider">

              <SwiperSlide >
                <CityCard cityImg="images/flag/c2.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c1.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c2.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c1.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c2.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c1.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c2.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c1.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c2.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c1.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c2.jpg" cityName="Location Name" />
              </SwiperSlide>

              <SwiperSlide >
                <CityCard cityImg="images/flag/c1.jpg" cityName="Location Name" />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CitySlide
