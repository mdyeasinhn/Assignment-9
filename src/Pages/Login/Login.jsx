import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const { signIn, googleLogin, setUser, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword]= useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');


        signIn(email, password)
            .then(res => console.log(res.user))
            .catch(error => setError(error.message))

        console.log(email, password);
    };
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => setUser(res.user))
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(res => setUser(res.user))
    }
    return (
        <div>
            <h2 className="text-3xl text-center mt-4">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body y md:w-3/4 lg:w-1/2 mx-auto ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type={showPassword? "text":  "password"} placeholder="Password" className="input input-bordered" required />

                    <span className="absolute top-12 right-2" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                    
                    {
                        error && <small className="text-red-600 mt-2">{error}</small>
                    }
                </div>
                <div className="form-control mt-1">
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-3">
                    <button name="submit" className="btn btn-primary">Login</button>
                </div>
                <p className="text-center mt-4">Do Not Have An Account ? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
                <div className="divider"> Or </div>

            <button onClick={handleGoogleLogin} className="btn btn-error">Login with Google </button>
            <button onClick={handleGithubLogin} className="btn btn-error">Login with Github </button>
            </form>

        </div>
    );
};

export default Login;