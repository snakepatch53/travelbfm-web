import { Route, Routes } from "react-router-dom";
import Footer from "./landing.components/Footer";

import { lazy } from "react";
import Header from "./landing.components/Header";

const Home = lazy(() => import("./landing.pages/Home"));
const Business = lazy(() => import("./landing.pages/Business"));
const About = lazy(() => import("./landing.pages/About"));
const Contact = lazy(() => import("./landing.pages/Contact"));

export default function LandingRouter({ info }) {
    document.title = info.name;
    return (
        <>
            <Header info={info} />
            <Routes>
                <Route path="/" element={<Home info={info} />} />
                <Route path="/business" element={<Business info={info} />} />
                <Route path="/about" element={<About info={info} />} />
                <Route path="/contact" element={<Contact info={info} />} />
            </Routes>
            <Footer info={info} />
        </>
    );
}
