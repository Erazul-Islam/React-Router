const User = ({user}) => {
    const {id,name,eamail,phone} = user;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {eamail}</p>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default User;