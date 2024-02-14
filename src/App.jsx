import { Suspense } from "react";
import "./App.css";
import LandingRouter from "./LandingRouter";
import info from "./mook/info.json";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { lazy } from "react";
import PanelRouter from "./PanelRouter";
import NotFound from "./component/NotFound";
import Loading from "./component/Loading";
import Register from "./pages/Register";
const Login = lazy(() => import("./pages/Login"));

function App() {
    const session = {
        photo_url: "https://via.placeholder.com/150",
    };
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<LandingRouter info={info} />} />
                    {/* <Route
                        path="/panel/*"
                        element={<PanelRouter info={info} session={session} />}
                    /> */}
                    <Route path="/login" element={<Login info={info} />} />
                    <Route path="/register" element={<Register info={info} />} />
                    <Route path="*" element={<NotFound info={info} />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
