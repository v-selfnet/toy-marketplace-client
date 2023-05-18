import { useLoaderData } from "react-router-dom";

const SportsDetail = () => {
    const carDetail = useLoaderData();
    const { _id, img, name, price, rating, description } = carDetail;
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-10">
            <img className="rounded-2xl" src={img} alt="Regular Car" />
            <div className="card-body">
                <p><small>Product iD: {_id}</small></p>
                <h2 className="card-title">{name}</h2>
                <p>$ <span className="text-3xl font-bold">{price}</span> </p>
                <p>Ratings: {rating}</p><hr />
                <p className='text-xl font-bold'>Detail Information:</p>
                <p>{description}</p><hr />
                <button className="btn btn-primary w-full mt-6">Add My List</button>
            </div>
        </div>
    );
};

export default SportsDetail;