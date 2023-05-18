import { Link, Outlet } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Toys = () => {
    // set dynamic title
    useTitle('All Toys');

    return (
        <>
        <div className="flex gap-5">
            <Link to='/toys/regular'>Regular</Link>
            <Link to='/toys/sports'>Sports</Link>
            <Link to='/toys/police'>Police</Link>
        </div>
        <h1 className="text-3xl text-center text-red-800 my-10">Welcome to Toy Car Zone</h1>
            <Outlet></Outlet>
        </>
    );
};

export default Toys;