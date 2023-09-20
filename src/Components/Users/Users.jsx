import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    console.log(users)

    return (
        <div>
            <h1>Our users: {users.length}</h1>
            <h1>Here is our users</h1>
            <div className="grid grid-cols-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;