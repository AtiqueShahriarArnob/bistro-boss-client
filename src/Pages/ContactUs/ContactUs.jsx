import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const ContactUs = () => {
    return (
        <div className="bg-base-100 min-h-screen">

            <div className="bg-orange-400 bg-opacity-70 py-24">
                <SectionTitle
                    subHeading="Visit Us"
                    heading="Contact Us"
                />
            </div>


            <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">


                <div className="space-y-6">
                    <h3 className="text-3xl font-bold">
                        Get In Touch
                    </h3>

                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-2xl text-yellow-600" />
                        <p>Dhaka, Bangladesh</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaPhoneAlt className="text-2xl text-yellow-600" />
                        <p>+880 1234 567 890</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-2xl text-yellow-600" />
                        <p>info@bistroboss.com</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaClock className="text-2xl text-yellow-600" />
                        <p>Mon – Sun: 10:00 AM – 11:00 PM</p>
                    </div>
                </div>


                <div className="w-full h-[350px] md:h-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Bistro Boss Location"
                        src="https://www.google.com/maps?q=Dhaka%20Bangladesh&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </section>
        </div>
    );
};

export default ContactUs;
