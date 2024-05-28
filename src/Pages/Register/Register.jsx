import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPassword, setShowPassword]= useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const name = from.get('name');
        const photo = from.get('photo');
        const email = from.get('email');
        const password = from.get('password');

        if (!/@gmail\.com$/.test(email)) {
            setEmailError('Email must end with @gamil.com')
            return
        }

        if (password.length < 6) {
            setError('password must be 6 characters..')
            return
        } else if (!/[A-Z]/.test(password)) {
            setError("Your password should have at least one upper case characters.");
            return;
        }
        setError('')
        setEmailError('')

        createUser(email, password)
            .then(res => {
                setUser(res.user)
            })
            .catch(error => setError(error.message))
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
                    {
                        emailError && <small className="text-red-600">{emailError}</small>
                    }
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered" required />
                    <span className="absolute top-12 right-2" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                </div>
                <div className="form-control">

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    {
                        error && <small className="text-red-600">{error}</small>
                    }
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