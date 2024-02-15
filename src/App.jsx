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
import AuthGuard from "./guards/AuthGuard";
import SessionOutGuard from "./guards/SessionOutGuard";
import { Notification } from "./component/Notification";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

export default function App() {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Notification />
                <Routes>
                    <Route path="/*" element={<LandingRouter info={info} />} />
                    <Route element={<SessionOutGuard />}>
                        <Route path="/login" element={<Login info={info} />} />
                        <Route path="/register" element={<Register info={info} />} />
                    </Route>
                    <Route element={<AuthGuard />}>
                        <Route path="/panel/*" element={<PanelRouter info={info} />} />
                    </Route>
                    <Route path="*" element={<NotFound info={info} />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}
// function
