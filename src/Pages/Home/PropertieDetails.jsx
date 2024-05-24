import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";


const PropertieDetails = () => {
    const properties = useLoaderData();
    const {id} = useParams();
    const idInt= parseInt(id);
    const propertie = properties.find(propertie => propertie.id ===idInt);


       return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
        <figure><img className="h-[500px]" src={propertie.image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{propertie.segment_name}</h2>
          <p>{propertie.description}</p>
          <div>
          <ul>Facilities : </ul>
          <li>{propertie.facilities[0]}</li>
          <li>{propertie.facilities[1]}</li>
          <li>{propertie.facilities[2]}</li>
          <li>{propertie.facilities[3]}</li>
          </div>
          <p className="flex items-center gap-2"><FaLocationDot/> {propertie.location}</p>
          <div className="flex justify-between">
                <h2>Area : {propertie.area}</h2>
                <h2>Price: {propertie.price}</h2>
                </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    );
};

export default PropertieDetails;