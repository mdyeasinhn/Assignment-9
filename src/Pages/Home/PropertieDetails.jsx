import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";


const PropertieDetails = () => {
    const properties = useLoaderData();
    const {id} = useParams();
    const idInt= parseInt(id);
    const propertie = properties.find(propertie => propertie.id ===idInt);


       return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
        <figure><img className="md:h-[200px]lg:h-[500px]"  src={propertie.image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{propertie.estate_title}</h2>
          <p>{propertie.description}</p>
          <div>
          <ul className="font-bold">Facilities : </ul>
          <li>{propertie.facilities[0]}</li>
          <li>{propertie.facilities[1]}</li>
          <li>{propertie.facilities[2]}</li>
          <li>{propertie.facilities[3]}</li>
          </div>
          
          <p className="flex items-center gap-2"><FaLocationDot/> {propertie.location}</p>
          <p className="text-xl font-semibold">{propertie.status}</p>
      
          <div className="flex justify-between">
                <h2>Area : {propertie.area}</h2>
                <h2>Price: {propertie.price}</h2>
                </div>
          <div className="card-actions justify-start">
            <button className="btn  ">{propertie.segment_name}</button>
          </div>
        </div>
      </div>
    );
};

export default PropertieDetails;