import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Local images
import saladImg from "../../../assets/home/slide1.jpg";
import pizzaImg from "../../../assets/home/slide2.jpg";
import soupImg from "../../../assets/home/slide3.jpg";
import dessertImg from "../../../assets/home/slide4.jpg";
import drinksImg from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Category = () => {
    return (
        <section >

            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            >

            </SectionTitle>



            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img
                            src={saladImg}
                            alt="Salad"
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black text-2xl font-semibold tracking-widest">
                            SALAD
                        </h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img
                            src={pizzaImg}
                            alt="Pizza"
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black text-2xl font-semibold tracking-widest">
                            PIZZA
                        </h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img
                            src={soupImg}
                            alt="Soup"
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black text-2xl font-semibold tracking-widest">
                            SOUP
                        </h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img
                            src={dessertImg}
                            alt="Dessert"
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black text-2xl font-semibold tracking-widest">
                            DESSERT
                        </h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img
                            src={drinksImg}
                            alt="Drinks"
                            className="w-full h-72 object-cover rounded-lg"
                        />
                        <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black text-2xl font-semibold tracking-widest">
                            DRINKS
                        </h3>
                    </div>
                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default Category;
