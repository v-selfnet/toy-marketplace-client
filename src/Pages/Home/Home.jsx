import useTitle from "../../Hooks/useTitle";

const Home = () => {
    // set dynamic title
    useTitle('Home');

    return (
        <h3>Home</h3>
    );
};

export default Home;