import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                };
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');

                    })

            })
            .catch(err => console.log(err));
    };

    return (
        <div className='pl-52 mb-4'>
            <div  >
                <button className='flex border p-3 justify-center items-center rounded-xl' onClick={handleGoogleSignIn} >
                    Go With Google <FaGoogle className='ml-1'></FaGoogle>
                </button>
            </div>
        </div>

    );
};

export default SocialLogIn;