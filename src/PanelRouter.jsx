import "./RouterPanel.css";

import { Route, Routes } from "react-router-dom";
import Header from "./panel.components/Header";
import { lazy, useContext, useState } from "react";
import Sidebar from "./panel.components/Sidebar";
import CrudProgress from "./panel.components/CrudProgress";
import { logout } from "./services/users";
import { SessionContext } from "./context/session";

const Home = lazy(() => import("./panel.pages/Home"));
const Users = lazy(() => import("./panel.pages/Users"));
const Slider = lazy(() => import("./panel.pages/Slider"));

export default function PanelRouter({ info }) {
    const { session, removeSession } = useContext(SessionContext);

    const [showSidebar, setShowSidebar] = useState("open");
    const [progress, setProgress] = useState(false);
    const handleClickShowSidebar = () => {
        setShowSidebar(showSidebar == "open" ? "close" : "open");
    };

    function handleLogout() {
        setProgress(true);
        logout().then(() => removeSession());
    }
    return (
        <>
            <div className="panel-page">
                <div className={"panel-page-state " + showSidebar}></div>
                <Header
                    info={info}
                    onClickButtonBars={handleClickShowSidebar}
                    onLogout={handleLogout}
                />

                <div className="panel-page-content">
                    <Sidebar session={session} />
                    <div className="panel-page-page scroll-style relative">
                        <Routes>
                            <Route path="/" element={<Home session={session} />} />
                            <Route path="/users" element={<Users session={session} />} />
                            <Route path="/slider" element={<Slider session={session} />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <CrudProgress isOpen={progress} text="Cerrando sesion..." />
        </>
    );
}
