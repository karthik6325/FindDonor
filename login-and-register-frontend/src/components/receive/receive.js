import React, { useState } from "react"
import "./receive.css"
import axios from "axios"
import { useHistory } from "react-router-dom"


const Receive = ({ setLoginUser }) => {
    const history = useHistory()
    const [donorlist, setDonorList] = useState([])
    const [user, setUser] = useState({
        city: "",
        blood: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = () => {
        axios.post("http://localhost:8001/donors", user)
            .then(res => {
                //alert(res.data.message)
                console.log(res.data);
                //console.log(json(res.data.user).lenth)
                if (res.data.user.length === 0) {
                    alert("No data Found!")
                }
                //setLoginUser(res.data.user)
                 else {
                    //const json=res.json();
                     setDonorList(res.data.user);
                     //console.log(donorlist)
                     //history.push('/donorlist')
                }
                
            })
            //console.log()
            //.then(history.push('/donorlist'))
    }

    return (
        <div className="receivepage">
            <h1>Find a donor</h1>
            <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="Enter your city"></input><br />
            <input type="text" name="blood" value={user.blood} onChange={handleChange} placeholder="Enter your blood group"></input><br />
            <input className="sub-button" type="submit" name="submit" onClick={submit}></input><br />
         {donorlist.length > 0 && (
            <div className="detailspage">
                <h2>Available Donors</h2>
                <div className="details">
                    {donorlist.map((donor, index) => (
                        <div className="detailbox" key={index}>Name : {donor.name}<br/> Age : {donor.age}<br/> Email : {donor.email}<br/> Phone no : {donor.number}<br/></div> 
                        ))}
                </div>
            </div>
        )} 
        </div>
    )
}

export default Receive




