import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ex1 from "../assets/ex1.jpg"
import ex2 from "../assets/ex2.jpg"
import ex3 from "../assets/ex3.jpg"
import ex4 from "../assets/ex4.jpg"
import ex5 from "../assets/ex5.jpg"
import "swiper/css";
import "swiper/css/pagination";
export default function HomeSlider() {
  return (
    <div className="w-screen relative h-screen -mt-16 cursor-grab">
      <Swiper className="w-full h-full text-7xl" pagination={true}>
        <SwiperSlide>
          <img src={ex1} alt="slider1" />
          <div className="absolute text-center text-sky-600 backdrop-blur-lg bg-opacity-70 rounded-xl p-12">
            <h1 className="large-title pb-12">Lorem ipsum dolor sit amet.</h1>
            <p className="small-title font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, ducimus. Neque nemo facilis quas vel quam?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ex2} alt="slider1" />
          <div className="absolute text-center text-sky-600 backdrop-blur-lg bg-opacity-70 rounded-xl p-12">
            <h1 className="large-title pb-12">Lorem ipsum dolor sit amet.</h1>
            <p className="small-title font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, ducimus. Neque nemo facilis quas vel quam?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ex3} alt="slider1" />
          <div className="absolute text-center text-sky-600 backdrop-blur-lg bg-opacity-70 rounded-xl p-12">
            <h1 className="large-title pb-12">Lorem ipsum dolor sit amet.</h1>
            <p className="small-title font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, ducimus. Neque nemo facilis quas vel quam?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ex4} alt="slider1" />
          <div className="absolute text-center text-sky-600 backdrop-blur-lg bg-opacity-70 rounded-xl p-12">
            <h1 className="large-title pb-12">Lorem ipsum dolor sit amet.</h1>
            <p className="small-title font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, ducimus. Neque nemo facilis quas vel quam?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ex5} alt="slider1" />
          <div className="absolute text-center text-sky-600 backdrop-blur-lg bg-opacity-70 rounded-xl p-12">
            <h1 className="large-title pb-12">Lorem ipsum dolor sit amet.</h1>
            <p className="small-title font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, ducimus. Neque nemo facilis quas vel quam?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
