import "./Table.css"

function Usertable(props) {
   const deletename=props.deleteval
   const edituser=props.edituser
    return (
       <table className="table table-striped">
        <thead>
            <tr className='heading'>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            { props.users.length>0 ? (
                props.users.map((items)=>{
                return(
                    
                    <tr className='tabledata'>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.username}</td>
                    
                         <button className='btn btn-danger mx-2 my-2' onClick={()=>deletename(items.id)}>Delete</button>
                         <button className='btn btn-info' onClick={()=>edituser(items.id,items)} >Edit</button>
                    </tr>
                    
                    
                    
                )
            })
            ):(
                <tr>
                    <td colSpan={5}>No users found</td>
                </tr>
            )
        }
        </tbody>
       </table>
    );
}

export default Usertable;