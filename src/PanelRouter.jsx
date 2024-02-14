import "./RouterPanel.css";

import { Route, Routes } from "react-router-dom";
import Header from "./panel.components/Header";
import { Notification } from "./panel.components/Notification";
import { useState } from "react";
import Sidebar from "./panel.components/Sidebar";
import Home from "./panel.pages/Home";
import Users from "./panel.pages/Users";
import CrudProgress from "./panel.components/CrudProgress";
import Slider from "./panel.pages/Slider";

// const Home = lazy(() => import("./landing.pages/Home"));

export default function PanelRouter({ info, session, updateSession }) {
    const [showSidebar, setShowSidebar] = useState("open");
    const [progress, setProgress] = useState(false);
    const handleClickShowSidebar = () => {
        setShowSidebar(showSidebar == "open" ? "close" : "open");
    };

    function handleLogout() {
        setProgress(true);
        // logout().then(() => {
        //     window.localStorage.removeItem("session");
        //     window.location.href = "/";
        // });
    }
    return (
        <>
            <div className="panel-page">
                <Notification />
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
                            <Route
                                path="/"
                                element={<Home session={session} updateSession={updateSession} />}
                            />
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
