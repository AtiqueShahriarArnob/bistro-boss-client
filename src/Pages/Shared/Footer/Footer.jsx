import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>

            <div className="bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#1f2937] text-white py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">


                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold uppercase">Contact Us</h3>
                        <p>123 ABS Street, Unit 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold uppercase">Follow Us</h3>
                        <p className="text-sm opacity-80">Join us on social media</p>

                        <div className="flex justify-center md:justify-start gap-6 text-xl">
                            <a className="hover:text-orange-400 transition">
                                <FaFacebookF />
                            </a>
                            <a className="hover:text-orange-400 transition">
                                <FaInstagram />
                            </a>
                            <a className="hover:text-orange-400 transition">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                </div>
            </div>


            <div className="bg-black py-4">
                <p className="text-center text-gray-400 text-sm">
                    Copyright © {new Date().getFullYear()} CulinaryCloud.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
