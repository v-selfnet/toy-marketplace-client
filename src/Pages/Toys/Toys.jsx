import { Link, Outlet } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import ActiveLink from "../../ActiveLink/ActiveLink";
import Marquee from "react-fast-marquee";

const Toys = () => {
    // set dynamic title
    useTitle('All Toys');

    const imageGalary = <div className="flex gap-10 mb-10">
        <img className="rounded-full w-40" src="https://i.ibb.co/4msJ5sJ/regular-01.png" alt="" />
        <img className="rounded-full w-40" src="https://i.ibb.co/jhFf6kS/regular-02.png" alt="" />
        <img className="rounded-full w-40" src="https://i.ibb.co/6t2RJ45/regular-03.png" alt="" />
        <img className="rounded-full w-40" src="https://i.ibb.co/t4XWxHz/sports-01.png" alt="" />
        <img className="rounded-full w-40" src="https://i.ibb.co/NrBxyFk/sports-02.png" alt="" />
        <img className="rounded-full w-40" src="https://i.ibb.co/PMpwVDF/soprts-03.png" alt="" />
        <img className="rounded-full w-40" src="https://i.ibb.co/q0vWTxB/police-01.png" alt="" />
        <img className="rounded-full w-40" src="https://i.ibb.co/MDPsp1p/police-02.png" alt="" />
        <img className="rounded-full w-40" src="https://i.ibb.co/pLD38yR/police-03.png" alt="" />
    </div>

    const categoryLinks = <div className="flex gap-5 justify-center my-10">
        <Link><ActiveLink to='/toys/regular'>Regular</ActiveLink></Link>
        <Link><ActiveLink to='/toys/sports'>Sports</ActiveLink></Link>
        <Link><ActiveLink to='/toys/police'>Police</ActiveLink></Link>
    </div>

    return (
        <>
            {categoryLinks}
            <h1 className="text-3xl text-center text-red-800 my-10">Welcome to Toy Car Zone</h1>
            <Marquee>
                {imageGalary}
            </Marquee>
            <Outlet></Outlet>
        </>
    );
};

export default Toys;