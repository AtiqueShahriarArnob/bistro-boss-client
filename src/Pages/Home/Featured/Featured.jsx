import { Parallax } from "react-parallax";
import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Featured = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={featuredImg}
            strength={-200}
        >
            <div className="hero min-h-[600px]">
                <div className="hero-overlay bg-black bg-opacity-60"></div>

                <div className="hero-content flex-col text-white">

                    <div className="mb-10">
                        <SectionTitle
                            subHeading={"Check It Out"}
                            heading={"From Our Menu"}
                        >
                        </SectionTitle>
                    </div>


                    <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl">
                        <img
                            src={featuredImg}
                            alt="Featured"
                            className="w-full md:w-1/2 rounded-lg"
                        />

                        <div>
                            <p className="mb-2">March 20, 2024</p>
                            <h3 className="text-2xl mb-3">WHERE CAN I GET SOME?</h3>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Repellendus harum velit architecto ducimus minus quibusdam.
                            </p>
                            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Featured;
