import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner";

const Home = () => {
    // set dynamic title
    useTitle('Home');

    return (
        <div className="w-4/5 mx-auto my-12">
            <Banner></Banner>
        </div>
    );
};

export default Home;