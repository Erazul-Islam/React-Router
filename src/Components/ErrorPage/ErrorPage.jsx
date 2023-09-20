import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>OPPs!!!</h1>
            <p>{error.ststusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <Link to="/" >  <button>Home</button> </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;