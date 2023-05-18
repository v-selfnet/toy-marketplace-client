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
            <Outlet></Outlet>
        </>
    );
};

export default Home;