import { Link, Outlet } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Toys = () => {
    // set dynamic title
    useTitle('All Toys');

    return (
        <>
            <div className="flex gap-5 justify-center my-10">
                <Link><ActiveLink to='/toys/regular'>Regular</ActiveLink></Link>
                <Link><ActiveLink to='/toys/sports'>Sports</ActiveLink></Link>
                <Link><ActiveLink to='/toys/police'>Police</ActiveLink></Link>
            </div>
            <h1 className="text-3xl text-center text-red-800 my-10">Welcome to Toy Car Zone</h1>
            <Outlet></Outlet>
        </>
    );
};

export default Toys;