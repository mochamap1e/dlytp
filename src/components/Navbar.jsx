import { Link } from "react-router-dom";

import "./Navbar.css";

function Nav({ to, children }) {
    return <Link to={to}>{children}</Link>
}

export default function Navbar() {
    return <div id="navbar">
        <h1>dlytp</h1>

        <div>
            <Nav>Home</Nav>
            <Nav>Library</Nav>
            <Nav>Queue</Nav>
            <Nav>Settings</Nav>
            <a onClick={() => window.electronAPI.quit()}>Quit</a>
        </div>
    </div>
}