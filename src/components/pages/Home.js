import	React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

	const Home = () => {

		const [users , setUser] = useState([]);

		useEffect(() => {
			loadUsers();
		},[]);


		const loadUsers = async () =>{

			const result = await axios.get("http://localhost:3001/users");
			setUser(result.data.reverse());
			console.log(result.data);
		}	



		const deleteUser = async id =>{

			await axios.delete(`http://localhost:3001/users/${id}`);
			loadUsers();
		}

		return (

	 <div className="container">
	 <div className="py-4">
      <h1>Home Page</h1>


       <table className="table table-bordered">
    <thead>
      <tr>

        <th scope="col">#</th>
        <th scope="col">Firstname</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope = "col">Action</th>
      </tr>
    </thead>
    <tbody>

	{users.map((user,index) =>(
		<tr>
		<th scope="row">{index+1}</th>
		<td>{user.name}</td>
		<td>{user.username}</td>
		<td>{user.email}</td>

		<td>

		<Link  to= {`/user/${user.id}`} className="btn btn-primary mr-2">view</Link>
		<Link  className="btn btn-danger mr-2" onClick={()=>deleteUser(user.id)}>delete</Link>
		<Link  to= {`/users/edit/${user.id}`} className="btn btn-primary mr-2">edit</Link>

		</td>

		</tr>
		))}

    </tbody>
  </table>


      </div>
    </div>

	)

}

export default Home;
