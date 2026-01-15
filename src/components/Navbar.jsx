import { Link } from "react-router-dom";

import "./Navbar.css";

function Nav({ to, children }) {
    return <Link to={to}>{children}</Link>
}

export default function Navbar() {
    return <div id="navbar">
        <h1>dlytp</h1>

        <div>
            <Nav to="/">Home</Nav>
            <Nav>Library</Nav>
            <Nav to="/downloader">Downloader</Nav>
            <Nav>Settings</Nav>
            <a onClick={() => window.electronAPI.quit()}>Quit</a>
        </div>
    </div>
}