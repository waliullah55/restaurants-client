import { useContext, useEffect, useState } from 'react';
import image from '../../assets/others/authentication1.png';
import '../Shared/CustomCSS.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLoginForn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successfully.......',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.code, error.message);
            })
    }
    const handleCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <div>
            <Helmet><title>Bistro Boss | Login</title> </Helmet>
            <div className="authImg hero min-h-screen" >
                <div className="hero-content flex-col lg:flex-row gap-32 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now</h1>
                        <img src={image} className='w-[650px] bg-none' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleLoginForn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    < LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleCaptcha} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                {/* TODO: disable button for captcha  */}
                                <button disabled={false} className="btn text-white hover:bg-[#BB8506] bg-[#BB8506]">Login</button>
                                {/* <input className="btn text-white hover:bg-[#BB8506] bg-[#BB8506]" type="submit" value={'Login'}/> */}
                            </div>
                        </form>
                        <p className='text-xl font-bold text-center -mt-4 mb-6'><small>New Here? <Link to={'/signup'} className='text-[#D1A054]'>Create an accoutn</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;