import React from "react"
import "./receive.css"

const Receive = ({ setLoginUser }) => {
    return (
        <div className="homepage">
            <div className="log_button" onClick={() => setLoginUser({})} >Logout</div><br />
            <div className="choce1">
                <div className="choice_button">Donor</div>
            </div>
            <div className="choce2">
                <div className="choice_button">Receiver</div>
            </div>
        </div>
    )
}

export default Receive