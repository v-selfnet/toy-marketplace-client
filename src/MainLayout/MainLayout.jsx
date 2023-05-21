import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center'>
                {
                    navigation.state === 'loading' && <progress className="progress w-full h-5 bg-red-100"></progress>
                }
            </div>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;