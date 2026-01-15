import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Downloader from "./pages/Downloader";
import NotFound from "./pages/NotFound";

import "./style.css";

export default function App() {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloader" element={<Downloader />} />
        
        <Route path="*" element={<NotFound />} />
    </Routes>
}