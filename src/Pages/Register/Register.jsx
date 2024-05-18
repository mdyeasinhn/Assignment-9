import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    
    const handleRegister = e => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const name = from.get('name');
        const photo = from.get('photo');
        const email = from.get('email');
        const password = from.get('password');

        createUser(email, password)
        console.log(name, photo, email, password);

    }
    return (
        <div>
            <h2 className="text-3xl text-center mt-4">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body y md:w-3/4 lg:w-1/2 mx-auto ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                </div>
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
                <p className="text-center mt-3">Allready Have An Account ? <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;