import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email,phone} = user;
    return (
        <div className="text-blue-600 border-8 mt-8 w-[300px] ml-28 rounded-xl">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/user/${id}`} >Show Details</Link>
        </div>
    );
};

export default User;