import React, {useState} from "react"
import "./donate.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const Donate = ({ setLoginUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const login = () => {
    //     axios.post("http://localhost:8001/login", user)
    //         .then(res => {
    //             alert(res.data.message)
    //             setLoginUser(res.data.user)
    //             history.push("/")
    //         })
    // }

    return (
        <div className="donatepage">
            <h1>Please enter your details</h1>
            <input type="text" name="name" placeholder="Enter your name" ></input><br/>
            <input type="text" name="age" placeholder="Enter your age" ></input><br/>
            <input type="text" name="city" placeholder="Enter your city"></input><br/>
            <input type="text" name="number" placeholder="Enter your mobile number" ></input><br/>
            <input type="email" name="email" placeholder="Enter your email" ></input><br/>
            <input type="submit" name="submit"></input><br/>
        </div>
    )
}

export default Donate