import axios from 'axios';
import {useHistory} from 'react-router-dom'
import React, { useState,useEffect } from 'react'

const New = () => {
    const [name, setName] = useState(""); 
    const [ImgUrl, setImgUrl] = useState(""); 
    const [Treasure, setTreasure] = useState(); 
    const [Phrases, setPhrases] = useState(""); 
    const [position, setPosition] = useState(""); 
    const [pegLeg, setPegLeg] = useState(true); 
    const [eyePatch, setEyePatch] = useState(true); 
    const [hookHand, setHookHand] = useState(true); 

    const [Captain, setCaptain] = useState(true); 

    
    const history = useHistory();
    const[error, setError] = useState([])
    const[errorImgUrl, setErrorImgUrl] = useState('')
    const[errorname, setErrorname] = useState('')
    const[errorTreasure, setErrorTreasure] = useState('')
    const[errorPhrases, setErrorPhrases] = useState('')
    const[errorposition, setErrorposition] = useState('')


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate/new', {
            name,
            ImgUrl,
            Treasure,
            Phrases,
            position,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(res => history.push("/Pirates/"))
            .catch(err=>{
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)}
            )
    }
    
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pirate/captain")
        .then(res => setCaptain(res.data))
        .catch(err => console.error(err))
    },[Captain])

    const nameHandler=(e)=>{
        if(e.target.value.length ===0){
            setErrorname("name is required")
        }
        else{
            setErrorname("")
            setName(e.target.value)
    }}
    const ImgUrlHandler=(e)=>{
        if(e.target.value.length ===0){
            setErrorImgUrl("Image url is required")
        }        else{
            setErrorImgUrl("")
            setImgUrl(e.target.value)
    }}
    const TreasureHandler=(e)=>{
        if(e.target.value.length ===0){
            setErrorTreasure("number of Treasure is required")
        }        else{
            setErrorTreasure("")
            setTreasure(e.target.value)
    }}
    const PhrasesHandler=(e)=>{
        if(e.target.value.length ===0){
            setErrorPhrases("Catch Phrases is required")
        }        else{
            setErrorPhrases("")
            setPhrases(e.target.value)
            
    }}
    const PositionHandler=(e)=>{
        if(e.target.value ==="Captain"){
           if( Captain.length ===0 ){
            setPosition(e.target.value)}
            else{ setErrorposition("only one Captain is allow")}
        }else{
            setErrorposition("")
            setPosition(e.target.value)
    }}

    return (
        <div className=''>
            <div className='card p-5'>
            {error.map((error,i) => <small className='text-danger' key={i}>{error}</small>)}
                <form onSubmit={onSubmitHandler} className='' >
                <div className='form-group my-2'>
                    <label htmlFor='name'>Pirate Name</label>
                    <input type="text" id='name' className='form-control' onChange={nameHandler} />
                    <small className='text-danger' >{errorname}</small>
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='name'>Image url</label>
                    <input type="url" id='name' className='form-control' onChange={ImgUrlHandler} />
                    <small className='text-danger' >{errorImgUrl}</small>
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='#'># of Treasure Chests:</label>
                    <input type="number" id='#' className='form-control' onChange={TreasureHandler} />
                    <small className='text-danger' >{errorTreasure}</small>
                </div>
                <div className='form-group my-2'>
                    <label htmlFor='name'>Pirate Catch Phrases</label>
                    <textarea  id='name' className='form-control' onChange={PhrasesHandler} ></textarea>
                    <small className='text-danger' >{errorPhrases}</small>
                </div>
                <div className='form-group my-2'>
                    <label htmlFor=''>Crew Position:</label>
                    <select class="form-control"  onChange={PositionHandler}>
                        <option value={""}>choice</option>
                        <option value={"First Mate"}>First Mate</option>
                        <option value={"Quarter Master"}>Quarter Master</option>
                        <option value={"Boatswain"}>Boatswain</option>
                        <option value={"Powder Monkey"}>Powder Monkey</option>
                        <option value={"Captain"}>Captain</option>
                    </select>
                    <small className='text-danger' >{errorposition}</small>
                </div>
                <div>
                <div class="form-check">
                <input checked={pegLeg}  value={!pegLeg} onChange={(e)=>{setPegLeg(e.target.value)}} type="checkbox" id='pegLeg' name='pegLeg' class="form-check-input" />
                <label class="form-check-label" for="pegLeg">
                    Peg Leg
                </label>
                </div>
                <div class="form-check">
                <input checked={eyePatch}  value={!eyePatch} onChange={(e)=>{setEyePatch(e.target.value)}} type="checkbox" id='eyePatch' name='eyePatch' class="form-check-input" />
                    <label class="form-check-label" for="eyePatch">
                        Eye Patch
                    </label>
                </div>
                <div class="form-check">
                <input checked={hookHand}  value={!hookHand} onChange={(e)=>{setHookHand(e.target.value)}} type="checkbox" id='hookHand' name='hookHand' class="form-check-input" />
                    <label class="form-check-label" for="hookHand">
                        Hook Hand
                    </label>
                </div>
                </div>
                <div className='form-group d-flex justify-content-around'>
                <input type="submit" className='btn btn-primary' value="Add Pirate"/>
                </div>
                </form>
            </div>
        </div>       
    )
}

export default New;