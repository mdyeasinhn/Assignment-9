import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    
    const handleLogin = e => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');
        signIn(email, password)

        console.log( email, password);
    };
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button name="submit" className="btn btn-primary">Register</button>
                </div>
                <p className="text-center mt-4">Do Not Have An Account ? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;