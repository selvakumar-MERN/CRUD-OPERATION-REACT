import React, { useState } from 'react';

function Forms(props) {
const user={
    id:"",
    name:"",
    username:""
}
const [users,setusers]=useState(user)

const handlechange=(e)=>{
    const {name,value}=e.target
    setusers({...users,[name]:value})
   
}
 const  Submit=(e)=>{
    e.preventDefault()
   // props.adduser(users)
     handlechange(e, props.adduser(users))
   
    }
    return (
        <form>
            <div className="form-group ">
            <label>Name</label>
            <input className='form-control' type='text' name='name'  onChange={handlechange}></input>
            </div>
            <div className='form-group'>
            <label>Username</label>
            <input type='text'className='form-control' name='username'  onChange={handlechange}></input>
            </div>
            <button className='btn btn-primary' type='submit' onClick={Submit} >Submit</button>
            
        </form>
    );
}

export default Forms;