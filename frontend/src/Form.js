import React from 'react'
import {useState} from 'react';
import { fetchUsers } from './utils';
import axios from 'axios';
export default function Form() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [Adress, setadress] = useState();
    const [data,setdata]=useState(null);
    const [loading,setloading]=useState(false);
    const [counter,setCounter]=useState(0);
    const [number,setnumber]=useState();
    const [first_name,setfn]=useState();
    const [last_name,setln]=useState();
    const delayCount = () => (
      setTimeout(() => {
        setCounter(counter + 1)
      }, 500)
    )

    const [users,setusers]=useState();

    
    const getusers=async(e)=>{
      e.preventDefault();
      const response=await axios.get('http://127.0.0.1:8000/getuser/');
      setusers(response.data);
      console.log(users);

    }
 const handleclick=async(e)=>{
 
 e.preventDefault();
 
   const dataa={first_name:first_name,last_name:last_name,email:email,password:password,address:Adress,number:number}
setloading(true);
// console.log(dataa);
   const response=await fetchUsers(dataa)
   setdata(response.data);
 setloading(false);
 console.log(response);
   
 }

 const renderData = () => {
  return users.map((item) => (
    <div >




<div class="card" style={{width: "18rem"}} >
  <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1924px-Person_icon_BLACK-01.svg.png" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Person</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">first_name: {item.fields.first_name}</li>
    <li class="list-group-item">last_name: {item.fields.last_name}</li>
    <li class="list-group-item">Adress: {item.fields.address}</li>
    <li class="list-group-item">Email: {item.fields.email}</li>
    <li class="list-group-item">Number: {item.fields.number}</li>
  </ul>

</div>
    
    </div>
  ));
};


   return (
     
      <>
      {loading?<div data-testid='loading'>Loading...</div>:<>
    <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
    <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
    <button data-testid="button-async" onClick={delayCount}>async</button>
 
    <form onSubmit={handleclick}>



   <div class="form-row">

   <div class="form-group col-md-6">
       <label for="fname">Enter Firstname</label>
       <input type="text" class="form-control" id="fname" placeholder="fname" onChange={(e)=>{setfn(e.currentTarget.value)}} data-testid='fname' value={first_name}/>
     </div>

     <div class="form-group col-md-6">
       <label for="lname">Enter last_name</label>
       <input type="text" class="form-control" id="lname" placeholder="lname" onChange={(e)=>{setln(e.currentTarget.value)}} data-testid='lname' value={last_name}/>
     </div>

     <div class="form-group col-md-6">
       <label for="inputEmail4">Enter Email</label>
       <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange={(e)=>{setemail(e.currentTarget.value)}} data-testid='email' value={email}/>
     </div>

 

     <div class="form-group col-md-6">
       <label for="inputPassword4">Enter Password</label>
       <input type="password" class="form-control" id="inputPassword4" placeholder="Password" onChange={(e)=>{setpassword(e.currentTarget.value)}} data-testid='password' value={password}/>
     </div>
   

   <div class="form-group col-md-6">
       <label for="inputadd">Enter Adress</label>
       <input type="text" class="form-control" id="inputadd" placeholder="inputadd" onChange={(e)=>{setadress(e.currentTarget.value)}} data-testid='inputadd' value={Adress}/>
     </div>
   

   <div class="form-group col-md-6">
       <label for="number">Phone Number</label>
       <input type="text" class="form-control" id="number" placeholder="number" onChange={(e)=>{setnumber(e.currentTarget.value)}} data-testid='number' value={number}/>
     </div>
   </div>
  
   <div class="form-group">
     <div class="form-check">
       <input class="form-check-input" type="checkbox" id="gridCheck" />
       <label class="form-check-label" for="gridCheck">
         Check me out
       </label>
     </div>
   </div>
   <button type="submit" class="btn btn-primary" data-testid="button">Sign in</button>
   <button class="btn btn-primary" data-testid="button2" onClick={getusers}>Get all users</button>

 </form> </>
}

{
  users &&  <div data-testid='fetchdata'>{renderData()}</div>
}


 </>
   

    
   );
}
