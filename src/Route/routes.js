
import routes from "./allroutes";
import { useRoutes } from "react-router-dom";

function AllRoute(){
    const route = useRoutes(routes);
    return (
        <>
            {route}
        </>
    )
}
export default AllRoute;