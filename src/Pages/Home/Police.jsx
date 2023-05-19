import { useLoaderData } from "react-router-dom";
import PoliceCars from "./PoliceCars";

const Police = () => {
    const policeCars = useLoaderData();
    return (
        <div>
            <h3 className="text-center font-semibold text-xl">Total Police Cars Collection: {policeCars.length}</h3>
            <div className="grid grid-cols-3 gap-5">
                {
                    policeCars.map(car => <PoliceCars
                        key={car._id}
                        car={car}
                        ></PoliceCars>)
                        
                }
            </div>
        </div>
    );
};

export default Police;