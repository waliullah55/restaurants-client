import image from '../../assets/others/authentication1.png';
import '../Shared/CustomCSS.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Componenets/SocialLogin';


const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const currentUer = result.user;
                console.log(currentUer);
                updateUser(data.name, data.photoURL)
                    .then(() => {
                        // console.log('updated user profile');

                        const savedUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully......',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(err => {
                console.log(err.code, err.message);
            })
    }


    return (
        <div>
            <Helmet><title>Bistro Boss | Sign Up</title> </Helmet>
            <div className="authImg hero min-h-screen" >
                <div className="hero-content flex-col lg:flex-row-reverse gap-32 ">
                    <div className="text-center lg:text-left">
                        <img src={image} className='w-[650px] bg-none' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name")} placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo UURL</span>
                                </label>
                                <input type="text" {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className='text-[#BB8506] font-semibold'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && (<span className='text-[#BB8506] font-semibold'>Password field is required</span>)}
                                {errors.password?.type === "minLength" && (<span className='text-[#BB8506] font-semibold'>Password must be 6 character</span>)}
                                {errors.password?.type === "pattern" && (<span className='text-[#BB8506] font-semibold'>Password must be one loweCase one upperCase one Special character one Number</span>)}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white hover:bg-[#BB8506] bg-[#BB8506]">Sign Up</button>
                            </div>
                        </form>
                        <p className='text-xl font-bold text-center -mt-4 mb-6'><small>Have an account? <Link to={'/login'} className='text-[#D1A054]'>Login Here</Link></small></p>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;