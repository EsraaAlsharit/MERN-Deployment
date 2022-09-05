import React from 'react'
import List from '../Components/List';


const Dashboard = () =>{

    return (
        <div className='continuer m-5'>
            <div className='border border-dark p-5 d-flex justify-content-between align-items-center '>
                <p></p>
                <h1>Pirate Crew</h1>
                <a href='/Pirates/new' className='btn btn-info'>Add Pirate</a>
            </div>
        <div className='continuer p-5 border border-dark'>
        <List/>
        </div>
        </div>
    );
}
export default Dashboard;