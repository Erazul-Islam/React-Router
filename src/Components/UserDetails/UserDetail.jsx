import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <h2>Website: {website}</h2>
        </div>
    );
};

export default UserDetail;