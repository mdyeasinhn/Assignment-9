import { Link } from "react-router-dom";



const EroorPage = () => {
    return (
        <div className="text-center  bg-white w-full h-[500px] rounded-lg">
            <div className="pt-20">
                <h1 className="text-gray-400 font-bold text-9xl mt-8 ">404</h1>
                <h2 className="mt-4 text-black font-semibold text-3xl ">Page Not found  </h2>
                <h3 className="text-black mt-6">Opps!, the page you looking for does not exist </h3>
            </div>
            <div className="mt-10">
               <Link to='/'> <button className="btn btn-success px-9">Back to home </button></Link>
            </div>
           
        </div>
    );
};

export default EroorPage;