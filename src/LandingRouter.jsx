import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./landing.components/Header";
import Footer from "./landing.components/Footer";
import Home from "./landing.pages/Home";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function LandingRouter() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
