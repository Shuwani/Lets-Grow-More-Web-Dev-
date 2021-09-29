
import React ,{useEffect, useState} from 'react';
import "./Style.css";
// import ClipLoader from "react-spinners/ClipLoader";

function App(){
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },5000);
  },[])

  const getUser=async() =>{
    const response = await fetch("https://reqres.in/api/users?page=1");
    const result = await response.json();
    console.log(result);
    setUsers(result.data)
}

return (
  <div>
    <div className="brand-name">LetsGrowMore</div>
    <button className="btn" onClick={getUser}>Get Users</button>
    {
      loading ? <div className="loading">
        <h1>Loading.....</h1>
        </div> :
      
      <div className="container">
         {users.map(info => {
          return(
          <div className="layout" key={info.id}>
            <div className="img"><img src={info.avatar} alt="..."/></div>
            <div className="profile">
              <div className="name">{info.first_name} {info.last_name}</div>
              <div className="email">Email: {info.email}</div>
            </div>
          </div>
          )
         })}
      </div>
    }
  </div>
  )
}
export default App

 {/* {users.map(info=>(
                    <li key={info.id}>Email:{info.email}<img src={info.avatar} alt="..."/></li>
                ))} */}



          //        {users?.map(info => {
          // return(
          //   <div className="layout" key={info.id}>
          //    <img src={info.avatar} alt="..."/> 
          //    <div className="name">{info.first_name} {info.last_name}</div>
          //    <div className="email">{info.email}</div>
          //   </div>
          // )
          // })}