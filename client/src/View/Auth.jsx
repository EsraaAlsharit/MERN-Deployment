import React, { useState } from 'react'
import axios from 'axios';


const Auth = () =>{

    const [firstName, setfirstName] = useState(""); 
    const [lastName, setlastName] = useState(""); 
    const [email, setemail] = useState(""); 
    const [password, setpassword] = useState("");
    const [passwordc, setpasswordc] = useState("");
    const[error, setError] = useState([])

    // const [nameError, setNameError] = useState(""); 
    // const [ageError, setAgeError] = useState("");
    
    const onSubmitHandler = e => {
        e.preventDefault();
        // setNameError(null)
        // setAgeError(null)
        // if(name.length < 1){
        //     setNameError("name is required")
        // }
        // else if(name.length<3){
        //     setNameError("name has to be more than 3 characters")
        // }
        // if(age.length < 1){
        //     setAgeError("age is required")
        // }

        // if(nameError == null && ageError == null){
        axios.post('http://localhost:8000/api/users/new', {
            firstName,
            lastName,
            email,
            password,
            passwordc
        })
            .then(res=>console.log(res))
            .catch(err=> {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
    }

    const onSubmitHandlerLog = e => {
        e.preventDefault();
        // setAgeError(null)
        // if(name.length < 1){
        //     setNameError("name is required")
        // }
        // else if(name.length<3){
        //     setNameError("name has to be more than 3 characters")
        // }
        // if(age.length < 1){
        //     setAgeError("age is required")
        // }

        // if(nameError == null && ageError == null){
        axios.post('http://localhost:8000/api/users', {
            email,
            password,
        })
            .then(res=>console.log(res))
            .catch(err=> {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
    // }
    }

    return (
        <div className='continuer m-5'>
            <div className='border border-dark p-5 d-flex justify-content-center align-items-center '>
                <h1>Welcome to Pirate Crew</h1>
            </div>
        <div className='continuer p-5 border border-dark'>
            <div className='d-flex justify-content-between'>
            <div className='card border border-dark p-5'>
                    <h3>Register</h3>
                    <form onSubmit={onSubmitHandler} className='' >
                <div className='form-group my-2'>
                <label>firstName</label>
                    <input type="text" id='fname' className='form-control'  onChange={(e)=>setfirstName(e.target.value)} value={firstName}/>
                    {/* <small className='text-danger' >{errorname}</small> */}
                </div>
                <div className='form-group my-2'>
                     <label>lastName</label>
                    <input type="text" id='lname' className='form-control' onChange={(e)=>setlastName(e.target.value)} value={lastName}/>
                    {/* <small className='text-danger' >{errorImgUrl}</small> */}
                </div>
                <div className='form-group my-2'>
                <label>Email</label>
                    <input type="email" id='emailRe' className='form-control' onChange={(e)=>setemail(e.target.value)} value={email}/>
                    {/* <small className='text-danger' >{errorTreasure}</small> */}
                </div>
                <div className='form-group my-2'>
                    <label htmlFor=''>password</label>
                    <input  type="password"  className='form-control' onChange={(e)=>setpassword(e.target.value)} value={password}/>
                    {/* <small className='text-danger' >{errorPhrases}</small> */}
                </div>
                <div className='form-group my-2'>
                    <label htmlFor=''>password confirm</label>
                    <input  type="password"  className='form-control' onChange={(e)=>setpasswordc(e.target.value)} value={passwordc}/>
                    {/* <small className='text-danger' >{errorPhrases}</small> */}
                </div>
                <div className='form-group d-flex justify-content-around'>
                <input type="submit" className='btn btn-primary' value="Register"/>
                </div>
                    </form>
            </div>
            <div className='card border border-dark p-5'>
                <h3>Login</h3>
                <form onSubmit={onSubmitHandlerLog} className='' >
                <div className='form-group my-2'>
                    <label htmlFor='#'>Email</label>
                    <input type="email" id='emailLog' className='form-control' onChange={(e)=>setemail(e.target.value)} value={email}/>
                    {/* <small className='text-danger' >{errorTreasure}</small> */}
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='name'>password</label>
                    <input  type="password" id='passLog' className='form-control' onChange={(e)=>setpassword(e.target.value)} value={password}/>
                    {/* <small className='text-danger' >{errorPhrases}</small> */}
                </div>
                <div className='form-group d-flex justify-content-around'>
                <input type="submit" className='btn btn-primary' value="Add Pirate"/>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Auth;