import { useContext, useEffect, useRef, useState } from 'react';
import img from '../../assets/menu/menu-bg.png';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha
} from 'react-simple-captcha';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogIn from '../../Components/SocialLogIn/SocialLogIn';

const LogIn = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Login Successful!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    title: 'Login Failed',
                    text: error.message,
                    icon: 'error'
                });
            });
    };

    const handleValidationCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisable(false);
            Swal.fire({
                title: 'Captcha Verified',
                icon: 'success'
            });
        } else {
            setDisable(true);
            Swal.fire({
                title: 'Invalid Captcha',
                icon: 'error'
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>Bistro | Log In</title>
            </Helmet>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content flex flex-col w-full">
                    <h1 className="text-5xl font-bold text-white mb-10">
                        Log In
                    </h1>

                    <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
                        <form onSubmit={handleLogIn} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your email"
                                    required
                                />

                                <label className="label mt-4">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your password"
                                    required
                                />

                                <label className="label mt-4">Captcha</label>
                                <LoadCanvasTemplate />
                                <input
                                    type="text"
                                    ref={captchaRef}
                                    className="input input-bordered w-full mt-2"
                                    placeholder="Enter Captcha"
                                />

                                <button
                                    type="button"
                                    onClick={handleValidationCaptcha}
                                    className="btn btn-outline mt-4"
                                >
                                    Validate Captcha
                                </button>

                                <div className="text-right mt-2">
                                    <Link className="link link-hover text-sm">
                                        Forgot password?
                                    </Link>
                                </div>

                                <input
                                    disabled={disable}
                                    className="bg-orange-500 text-white p-4 rounded-xl mt-6 w-full disabled:opacity-50"
                                    type="submit"
                                    value="Login"
                                />
                            </fieldset>


                        </form>
                        <SocialLogIn></SocialLogIn>

                        <p className="text-center pb-6">
                            New here?{' '}
                            <Link to="/signUp" className="text-orange-600 font-semibold">
                                Create an account
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;
