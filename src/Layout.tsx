import { Outlet } from "react-router-dom";
import "./index.css"
import Header from "./components/organisms/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
