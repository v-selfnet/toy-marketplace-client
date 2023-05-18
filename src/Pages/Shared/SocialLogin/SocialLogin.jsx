import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='text-center'>
            <div className="divider">OR</div>
            <button onClick={handelGoogleSignIn} className="btn btn-outline btn-xs btn-accent mr-6">Google</button>
            <button className="btn btn-outline btn-xs btn-accent">Github</button>
        </div>
    );
};

export default SocialLogin;