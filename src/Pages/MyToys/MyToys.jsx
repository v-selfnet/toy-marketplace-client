import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import MyToysTable from "./MyToysTable";

const MyToys = () => {
    // set dynamic title
    useTitle('My Toys');

    const toys = useLoaderData();
    return (
        <div>
            <h3>My Toys: {toys.length}</h3>
            <div className="grid grid-cols-6 gap-y-10">

                <p>Seller Name</p>
                <p>Name</p>
                <p>Sub Category</p>
                <p>Price</p>
                <p>Available Quantity</p>

            </div>
            {
                toys.map(toy => <MyToysTable
                    key={toy._id}
                    toy={toy}
                ></MyToysTable>)
            }
        </div>
    );
};

export default MyToys;