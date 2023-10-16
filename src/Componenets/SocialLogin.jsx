import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const currentUser = result.user;
                console.log(currentUser);
                const savedUser = { name: currentUser.displayName, email: currentUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })

            })
    }
    return (
        <div className='-pt-5 -mt-5'>
            <div className="divider">OR</div>
            <div className='w-full  text-center my-4'>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline text-2xl">
                    <FcGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;