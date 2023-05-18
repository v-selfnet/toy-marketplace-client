import useTitle from "../../Hooks/useTitle";

const Toys = () => {
    // set dynamic title
    useTitle('All Toys');

    return (
        <div>
            <h3>Toys</h3>
        </div>
    );
};

export default Toys;