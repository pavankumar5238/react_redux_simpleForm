import React,{useState} from "react";
import { useDispatch } from 'react-redux';
//import { createPost } from '../../api';
import { createPost, getPosts } from '../actions/formPost';

function Form() {
    //const [count, setCount] = useState(0);
    const [postData, setPostData]=useState({
        firstName:'',
        middleName:'',
        email:'',
        password:'',               
    })




const dispatch=useDispatch();


    const handleSubmit=(e)=>{
            e.preventDefault();  //not to refresh browser
            dispatch(createPost(postData))
           // console.log({postData});
           // console.log(postData.selectedFile);
    }


     return (
       <div className="form-group" style={{ marginTop: 10 }}>
         {/* <p>You clicked {count} times</p> */}
         <h1>Registration form</h1>
         <form onSubmit={handleSubmit}>
        <input 
            name='firstName' 
            type='name'   
            className="form-control" 
            placeholder="First Name"
            value={postData.firstName}
            onChange={(e)=>{setPostData({...postData, firstName:e.target.value})}}
        ></input> <br></br>
        <input  
            name='middleName' 
            placeholder="Middle Name" 
            className="form-control"
            value={postData.middleName}
            onChange={(e)=>{setPostData({...postData, middleName:e.target.value})}}
            ></input><br></br>
        <input 
            name='email' 
            placeholder="email"  
            className="form-control"
            value={postData.email}
            onChange={(e)=>{setPostData({...postData, email:e.target.value})}}
            ></input><br></br>
        <input 
            name='password' 
            type='password' 
            placeholder="Password"  
            className="form-control"
            value={postData.password}
            onChange={(e)=>{setPostData({...postData, password:e.target.value})}}
            ></input><br></br>
         <button type='submit'>
         Submit
        </button>
        </form>
      </div>
    );}

export default Form;
