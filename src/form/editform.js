import React, { useState } from 'react';

function Editforms(props) {

const [users,setusers]=useState(props.currentUser)

const handlechange=(e)=>{
    const {name,value}=e.target
    setusers({...users,[name]:value})
   
}
 const  Submit=(e)=>{
    e.preventDefault()
    handlechange(e, props.updateUser(users))
    }
    return (
        <form>
            <div className="form-group ">
            <label>Name</label>
            <input className='form-control' type='text' name='name' value={users.name} onChange={handlechange}></input>
            </div>
            <div className='form-group'>
            <label>Username</label>
            <input type='text'className='form-control' name='username' value={users.username}  onChange={handlechange}></input>
            </div>
            <button className='btn btn-primary' type='submit' onClick={Submit} >Submit</button>
            <button  className='btn btn-primary mx-2'type='submit'  onClick={()=>{props.setcurrent(false)}}>Cancel</button>
        </form>
    );
}

export default Editforms;