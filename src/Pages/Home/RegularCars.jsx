import { Link } from "react-router-dom";

const RegularCars = ({ regularCar }) => {
    const { _id, img, name, price, rating } = regularCar;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-10">
            <img className="rounded-2xl" src={img} alt="Regular Car" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>$ <span className="text-3xl font-bold">{price}</span> </p>
                <p>Ratings: {rating}</p>
                <Link to={`/regular/${_id}`}>
                    <button className="btn btn-primary w-full">View Detail</button>
                </Link>
            </div>
        </div>
    );
};

export default RegularCars;