import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
    // set dynamic title
    useTitle('Login');

    const { signIn } = useContext(AuthContext)

    const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // signin
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.error(error.message)
            });


    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-40">
                <div className="text-center lg:text-left w-1/2 space-y-10">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
                        <form onSubmit={handleSignin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-xs mt-3'>Do not have an Account? <Link to='/register' className='text-orange-600'>Please Register</Link></p>
                    </div>
                </div>
            </div>
        </div>


        
    );
};

export default Login;