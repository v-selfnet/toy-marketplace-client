import useTitle from "../../Hooks/useTitle";

const AddToy = () => {
    // set dynamic title
    useTitle('Add Toy');

    return (
        <div>
            <h3>Add Toy</h3>
        </div>
    );
};

export default AddToy;