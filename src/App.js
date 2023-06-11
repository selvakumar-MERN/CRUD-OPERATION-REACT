import {  useState } from "react";
import Usertable from "./table/Table";
import Forms from "./form/Form";
import Editforms from "./form/editform";
import "./App.css"

function App() {
  const userList=[{
    id:1,
    name:"selva",
    username:"selva81222"
  }
  ]
  const[users,setUsers]=useState(userList)
  const[edituser,setcurrent]=useState(false)
  const initialUser = {id:'', name: '', username: ''};

    const [currentUser, setCurrentUser] = useState(initialUser);
 const adduser=(user)=>{
  user.id=users[users.length-1].id+1
  setUsers([...users,user])
  
 }

 const deletename=(id)=>{
 const remove= users.filter(items=>items.id!==id)
  setUsers(remove)
 
}
const editingUser=(id,user)=>{
  setcurrent(true)
 setCurrentUser(user)
 }
 const updateUser=(user)=>{
 setUsers((users.map(items=>(items.id===currentUser.id ? user : items)))
  
 )
 }
  return (
    <div className="container">
      <div className="row">
           <div className="col-md-12 m-4 text-center header">
           <h1> CRUD APP</h1>
           </div>
      </div>
       <div className="row">
        <div className="col-12 col-md-6 ">
          <div className="col-md-12 mt-5 p-3 form ">
          {edituser ? (
            <div>
              <h2>edit users</h2>
              <Editforms currentUser={currentUser}
                setcurrent={setcurrent}
                updateUser={updateUser}
              />
              </div>
            ):(
              <div>
              <h2>Add Users</h2>
              <Forms adduser={adduser}></Forms>
              </div>
               )}
          </div>
          </div>
        <div className="col-12 col-md-6 mt-5">
            <h2 className="mx-4">View Users</h2>
            <Usertable users={users} deleteval={deletename} edituser={editingUser}></Usertable>
            
        </div>
          
      </div>
      
      
    </div>
  );
}
export default App;
