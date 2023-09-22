import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./homepage.css"

const Homepage = ({ setLoginUser }) => {
    return (
        <div className="homepage">
            <div className="choce1">
                <Link to="/donate">Donate</Link>
            </div>
            <div className="choce2">
                <Link to="/receive">Reaceive</Link>
            </div>
            <div className="log_button" onClick={() => setLoginUser({})} >Logout</div><br />
        </div>
    )
}

export default Homepage