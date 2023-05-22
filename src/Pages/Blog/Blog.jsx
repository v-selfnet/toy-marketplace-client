import useTitle from "../../Hooks/useTitle";

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <h3>Welcome to my Blog</h3>
            <p>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <p>2. Compare SQL and NoSQL databases?</p>
            <p>3. What is express JS? What is Nest JS?</p>
            <p>4. WWhat is MongoDB aggregate and how does it work?</p>

           
        </div>
    );
};

export default Blog;