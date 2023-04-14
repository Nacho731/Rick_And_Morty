import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css"

const Form = ({login}) =>{
    
    const[errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: "",
        password: ""

    });
    
    const handleChange = (event) =>{
        setUserData({
         ...userData,
         [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
     }

   return( 
   
    <div >
        <form className={style.centrado} onSubmit={handleSubmit}>
            <img src={"./rym5.png"} alt='' />
            <h4 htmlFor="email" style={{color:"Black"}} >Email:</h4>
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p style={{color:"red"}}>{errors.email}</p> }
            <br />
            <br />
            <h4 htmlFor="password" style={{color:"Black"}} >Password:</h4>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p> }
            <br />
            <br />
            <button className={style.botonsub} >Submit</button>
        </form>
    </div>
)}

export default Form;