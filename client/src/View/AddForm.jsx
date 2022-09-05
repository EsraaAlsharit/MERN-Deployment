import React from 'react'
import List from '../Components/List';
import New from '../Components/New';


const AddForm = () =>{

    return (
        <div className='continuer m-5'>
            <div className='border border-dark p-5 d-flex justify-content-between align-items-center'>
                <p></p>
                <h1>Add Pirate</h1>
                <a href='/Pirates' className='btn btn-info'>Crew Board</a>
            </div>
        <div className='continuer p-5 border border-dark'>
        <New/>
        </div>
        </div>
    );
}
export default AddForm;