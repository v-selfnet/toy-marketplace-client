import { Link } from "react-router-dom";
import logo from '../../../assets/car-side-solid.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelSignout = () => {
        logOut()
            .then(() => console.log('Sign out success'))
            .catch(error => console.error(error.message))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/toys'>Toys </Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        {
            user && <li><Link to='/addtoy'>Add Toy</Link></li>
        }
        <li><Link to='/blog'>Blog</Link></li>
        <div>
            {
                user ?
                    <li>
                        <Link onClick={handelSignout} className="" to='/login'>Signout</Link>
                        <span>{user.displayName ? user.displayName : user.email}</span>
                    </li> :
                    <li><Link className="" to='/login'>Login</Link></li>
            }
        </div>
    </>



    return (
        <div className="navbar bg-base-300 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <div className="flex gap-5">
                        <p className="text-3xl text-red-900 font-semibold">Toyazone</p>
                        <img className="w-10 rounded-full" src={logo} alt="logo" />
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>

            </div>
            <div className="navbar-end">

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {/* <div> */}
                            {
                                user && <img className="w-10 rounded-full border bottom-2" src={user.photoURL }/> 
                            }
                        {/* </div> */}
                        <img src={logo} />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;