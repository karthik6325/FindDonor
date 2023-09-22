import React, { useState } from "react"
import "./donate.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const Donate = ({ setLoginUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        age: "",
        blood: "",
        city: "",
        number: "",
        email: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = () => {
        axios.post("http://localhost:8001/details", user)
            .then(res => {
                alert(res.data.message)
                //setLoginUser(res.data.user)
                if(res.data.message==="Successfully Registered"){
                    history.push("/")
                }
            })
    }

    return (
        <div className="donatepage">
            <h1>Please enter your details</h1>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your name" ></input><br />
            <input type="text" name="age" value={user.age} onChange={handleChange} placeholder="Enter your age" ></input><br />
            <input type="text" name="blood" value={user.blood} onChange={handleChange} placeholder="Enter your blood group" ></input><br />
            <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="Enter your city"></input><br />
            <input type="text" name="number" value={user.number} onChange={handleChange} placeholder="Enter your mobile number" ></input><br />
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" ></input><br />
            <input className="button" type="submit" name="submit" onClick={submit}></input><br />
        </div>
    )
}

export default Donate