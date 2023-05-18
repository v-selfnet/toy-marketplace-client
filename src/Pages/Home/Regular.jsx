import { useLoaderData } from "react-router-dom";
import RegularCars from "./RegularCars";

const Regular = () => {
    const regularCars = useLoaderData();

    return (
        <div>
            <h3 className="text-center font-semibold text-xl">Total Regular Cars Collection: {regularCars.length}</h3>
            <div className="grid grid-cols-3 gap-5">
                {
                    regularCars.map(regularCar => <RegularCars
                        key={regularCar._id}
                        regularCar={regularCar}
                    ></RegularCars>)
                }
            </div>
        </div>
    );
};

export default Regular;