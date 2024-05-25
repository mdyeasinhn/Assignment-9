import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import State from "./State";


const Home = () => {
    const data = useLoaderData();
  
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl text-center mt-8 mb-8">Residential properties</h2>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8  ">
                {
                    data.map(state => <State key={state.id} eState={state}></State>)
                }
            </div>
           
        </div>
    );
};

export default Home;