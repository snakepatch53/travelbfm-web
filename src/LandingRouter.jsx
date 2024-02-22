import { Route, Routes } from "react-router-dom";
import Footer from "./landing.components/Footer";

import { Suspense, lazy } from "react";
import Header from "./landing.components/Header";
import { Notification } from "./component/Notification";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./landing.pages/Home"));
const Business = lazy(() => import("./landing.pages/Business"));
const About = lazy(() => import("./landing.pages/About"));
const Contact = lazy(() => import("./landing.pages/Contact"));

export default function LandingRouter({ info }) {
    return (
        <>
            <Notification />
            <Header info={info} />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home info={info} />} />
                    <Route path="/business" element={<Business info={info} />} />
                    <Route path="/about" element={<About info={info} />} />
                    <Route path="/contact" element={<Contact info={info} />} />
                </Routes>
            </Suspense>
            <Footer info={info} />
        </>
    );
}
