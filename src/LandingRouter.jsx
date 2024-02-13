import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./landing.components/Footer";
import Home from "./landing.pages/Home";
import Header from "./landing.components/Header";
import Business from "./landing.pages/Business";

export default function LandingRouter() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/business" element={<Business />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
