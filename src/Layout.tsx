import { Outlet } from "react-router-dom";
import "./index.css"
import Header from "./components/molecules/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <div className={"container"}>
                    <Outlet />
                </div>
                
            </main>
        </>
    );
};

export default Layout;
