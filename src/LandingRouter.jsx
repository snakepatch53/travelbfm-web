import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./landing.components/Footer";
import Home from "./landing.pages/Home";
import Header from "./landing.components/Header";
import Business from "./landing.pages/Business";
import About from "./landing.pages/About";
import Contact from "./landing.pages/Contact";

export default function LandingRouter() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
