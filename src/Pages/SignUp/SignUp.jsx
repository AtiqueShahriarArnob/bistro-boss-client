import { useForm } from 'react-hook-form';
import img from '../../assets/menu/menu-bg.png';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogIn from '../../Components/SocialLogIn/SocialLogIn';

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;


                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/user', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added in data base')

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Account Created!',
                                        text: `Welcome, ${data.name}`,
                                    });
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Profile Update Failed',
                            text: error.message
                        });
                    });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Sign Up Failed',
                    text: error.message
                });
            });
    };

    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content flex flex-col w-full">
                    <h1 className="text-5xl font-bold text-white mb-10">
                        Sign Up
                    </h1>

                    <div className="card bg-base-100 w-full max-w-xl shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <label className="label">Name</label>
                            <input
                                type="text"
                                {...register('name', { required: true })}
                                className="input input-bordered w-full"
                                placeholder="Enter your name"
                            />

                            <label className="label mt-2">Photo URL</label>
                            <input
                                type="url"
                                {...register('photoUrl', { required: true })}
                                className="input input-bordered w-full"
                                placeholder="Photo URL"
                            />

                            <label className="label mt-2">Email</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                            />

                            <label className="label mt-2">Password</label>
                            <input
                                type="password"
                                {...register('password', { required: true, minLength: 6 })}
                                className="input input-bordered w-full"
                                placeholder="Enter your password"
                            />

                            <input
                                className="bg-orange-500 p-3 text-white rounded-xl w-full mt-6"
                                type="submit"
                                value="Sign Up"
                            />

                        </form>
                        <SocialLogIn></SocialLogIn>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
