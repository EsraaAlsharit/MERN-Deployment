import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

const List = (props) => {
    const [Pirate, setPirate] = useState([]); 

    const handleDelete = (id) =>{
        // var answer = window.confirm(`are you sure you want to remove ${Pirate.name}`);
        axios.delete("http://localhost:8000/api/pirate/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
        
    }
    
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/pirate")
        .then(res => setPirate(res.data))
        .catch(err => console.error(err))
    },[Pirate])

    return (
        <div className=' '>
            {
            Pirate.map((pirate,i) =>{
                return (
                    <div className='card border border-dark p-3'>
                    <div className='d-flex justify-content-around'>
                        <img src={pirate.ImgUrl} width="80" height="80" />
                        <div className='text-center w-75'>
                            <h5>{pirate.name}</h5>
                            <div className='d-flex justify-content-around'>
                                <Link to={"/Pirates/"+pirate._id} className='btn btn-info'>View Pirate</Link>
                                <button className='btn btn-danger' onClick={()=>{handleDelete(pirate._id)}}>Walk the Plank</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
            }
            
       
            </div>
        
        
    )
}

export default List;