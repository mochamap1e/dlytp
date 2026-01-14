import Navbar from "./Navbar";

import "./Page.css"

export default function Page({ children }) {
    return <div id="page">
        <Navbar />
        {children}
    </div>
}