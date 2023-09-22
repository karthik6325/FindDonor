import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://karth:R3ifDXgywcEWlNrH@cluster0.ycop7nd.mongodb.net/user?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userSchema)

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    blood: String,
    city: String,
    number: Number,
    email: String
})

const People = mongoose.model("People", peopleSchema);

//Routes
app.post("/login", (req, res)=> {
    const { email, password } = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
})

app.post("/details", (req, res)=> {
    const { name, age, blood, city, number, email } = req.body
    People.findOne({ email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new People({
                name,
                age,
                blood,
                city,
                number,
                email
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered" })
                }
            })
        }
    })
}) 

// app.post("/donors", (req, res)=> {
//     const { city } = req.body
//     People.find({ city: city}, (err, user) => {
//         if(user){
//             res.send(user)
//         } else {
//             res.send({message: "No match2"})
//         }
//     })
// }) 

app.post("/donors", (req, res)=> {
    const {city , blood}  = req.body
    People.find({ city: city, blood: blood}, (err, user) => {
        if(user){
            res.send({message: "Found",user})
        } else {
            res.send({message: "Not found"})
        }
    })
}) 

app.listen(8001,() => {
    console.log("started at port 9000")
})