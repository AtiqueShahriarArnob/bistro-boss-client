
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import BistroBoss from './BristoBoss/BristoBoss';
import CallUs from './CallUs/CallUs';
import Category from './Category/Category';
import Featured from './Featured/Featured';
import PopularMenu from './PopularMenu/PopularMenu';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <div>
                <Helmet><title>Bistro | Home</title></Helmet>

            </div>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;