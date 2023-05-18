import { Link, Outlet } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
    // set dynamic title
    useTitle('Home');

    return (
        <>
        <div className="flex gap-5">
            <Link to='/regular'>Regular</Link>
            <Link to='sports'>Sports</Link>
            <Link to='police'>Police</Link>
        </div>
        <h1 className="text-3xl text-center text-red-800 my-10">Welcome to Toy Car Zone</h1>
            <Outlet></Outlet>
        </>
    );
};

export default Home;