import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
    // set dynamic title
    useTitle('My Toys');
    return (
        <div>
            <h3>My Toys</h3>
        </div>
    );
};

export default MyToys;