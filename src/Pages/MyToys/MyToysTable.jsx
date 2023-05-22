import { Link } from "react-router-dom";

const MyToysTable = ({ toy }) => {
    const { seller, name, sub_category, price, available_qty } = toy;
    return (
        <div className="grid grid-cols-6 space-y-10 ">
            <p>{seller}</p>
            <p>{name}</p>
            <p>{sub_category}</p>
            <p>{price}</p>
            <p>{available_qty}</p>
            <Link to='/addtoy'>Add Toy</Link>
        </div>
    );
};

export default MyToysTable;