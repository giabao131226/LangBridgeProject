import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import Head from "../head/head";
import { useSelector } from "react-redux";
import Body from "../Body/body";

function PageDefault(){
    const token = useSelector(state => state.changeLogin)
    return (
        <>
            <Head />
            <Outlet />
            <Footer />
        </>
    )
}
export default PageDefault;