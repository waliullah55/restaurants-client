import { useEffect, useRef, useState } from 'react';
import image from '../../assets/others/authentication1.png';
import '../Shared/CustomCSS.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLoginForn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <div className="authImg hero min-h-screen" >
            <div className="hero-content flex-col lg:flex-row gap-32 ">
                <div className="text-center lg:text-left">
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
                            <input ref={captchaRef} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" required />
                            <button onClick={handleCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn text-white hover:bg-[#BB8506] bg-[#BB8506]">Login</button>
                            {/* <input className="btn text-white hover:bg-[#BB8506] bg-[#BB8506]" type="submit" value={'Login'}/> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;