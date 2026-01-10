import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className="my-20 max-w-4xl mx-auto text-center">

            <div className="mb-10">
                <SectionTitle
                    subHeading={"What our Client Say"}
                    heading={"TESTIMONIALS"}
                >
                </SectionTitle>
            </div>


            <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className="px-10">

                            <div className="text-orange-400 text-xl mb-4">
                                {"★".repeat(review.rating)}
                                {"☆".repeat(5 - review.rating)}
                            </div>

                            <p className="text-gray-600 mb-4">
                                {review.details}
                            </p>

                            <h3 className="text-orange-500 font-semibold tracking-widest">
                                {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
