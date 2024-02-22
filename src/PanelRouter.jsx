import "./RouterPanel.css";

import { Route, Routes } from "react-router-dom";
import Header from "./panel.components/Header";
import { Suspense, lazy, useContext, useState } from "react";
import Sidebar from "./panel.components/Sidebar";
import CrudProgress from "./panel.components/CrudProgress";
import { logout } from "./services/users";
import { SessionContext } from "./context/session";
import { ShopCartProvider } from "./context/shop-cart";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./panel.pages/Home"));
const Profile = lazy(() => import("./panel.pages/Profile"));
const Users = lazy(() => import("./panel.pages/Users"));
const Business = lazy(() => import("./panel.pages/Business"));
const Categories = lazy(() => import("./panel.pages/Categories"));
const Products = lazy(() => import("./panel.pages/Products"));
const Shop = lazy(() => import("./panel.pages/Shop"));

export default function PanelRouter({ info }) {
    const { removeSession } = useContext(SessionContext);

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
        <ShopCartProvider>
            <div className="panel-page">
                <div className={"panel-page-state " + showSidebar}></div>
                <Header
                    info={info}
                    onClickButtonBars={handleClickShowSidebar}
                    onLogout={handleLogout}
                />

                <div className="panel-page-content">
                    <Sidebar />
                    <div className="panel-page-page scroll-style relative" id="main-content">
                        <Suspense fallback={<Loading />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/users" element={<Users />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/business" element={<Business />} />
                                <Route path="/categories" element={<Categories />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/shop" element={<Shop />} />
                                <Route path="/shop/:business_id" element={<Shop />} />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
            <CrudProgress isOpen={progress} text="Cerrando sesion..." />
        </ShopCartProvider>
    );
}
