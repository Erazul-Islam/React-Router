/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title,body} = post;
    return (
        <div className="border-8 rounded-xl text-yellow-800 mt-8 w-[300px]">
            <h3>Post of id: {id}</h3>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`} >Post Details</Link>
        </div>
    );
};

export default Post;