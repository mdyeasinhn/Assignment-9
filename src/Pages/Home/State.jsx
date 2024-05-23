import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const State = ({ eState }) => {
    const { estate_title,
        id,
        image,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities } = eState;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{segment_name}</h2>
                <p>{description}</p>
                <p className="flex items-center gap-2"><FaLocationDot/> {location}</p>
                <div className="flex justify-between">
                <h2>Area : {area}</h2>
                <h2>Price: {price}</h2>
                </div>
                <div className="justify-center">
                    <Link to={`/eState/${id}`}><button className="btn btn-primary w-full">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default State;