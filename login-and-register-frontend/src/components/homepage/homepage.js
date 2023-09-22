import React from "react"
import { useHistory } from "react-router-dom"
import "./homepage.css"

const Homepage = ({ setLoginUser }) => {
    const history = useHistory()
    return (
        <div className="homepage">
            <div className="log_button" onClick={() => setLoginUser({})} >Logout</div><br />
            <div className="format">
                <div className="button1" onClick={() => history.push("/donate")}>Register as Donor</div>
                <div className="button2" onClick={() => history.push("/receive")}>Find a Donor</div>
            </div>
        </div>
    )
}

export default Homepage