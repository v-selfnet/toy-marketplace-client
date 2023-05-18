import { useLoaderData } from "react-router-dom";
import SportsCar from "./SportsCar";

const Sports = () => {
    const sportsCars = useLoaderData();
    return (
        <div>
            <h3 className="text-center font-semibold text-xl">Total Sports Cars Collection: {sportsCars.length}</h3>
            <div className="grid grid-cols-3 gap-5">
                {
                    sportsCars.map(car => <SportsCar
                        key={car._id}
                        car={car}
                    ></SportsCar>)
                        
                }
            </div>
        </div>
    );
};

export default Sports;