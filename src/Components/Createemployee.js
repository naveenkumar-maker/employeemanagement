import React,{useState}from 'react'
import firebase from './firebase';
import './employeecreate.css';
  import {Link} from 'react-router-dom';
  


export default function Createemployee(){
  
    const initialvalue={
        firstName:'',
        lastName:'',
        date:'',
        department:'',
        salary:'',
        experience:'',
        permanent:'',
        present:'',
        education:'',
        phone:'',
        email:'',
        status:'',

    }
    const[values,setValues]=useState(initialvalue);
    
    
     
    const Changehandler=()=>{
      const employeeRef=firebase.database().ref('Emp');
      const employees={
          values,
          complete:false,
      }
      employeeRef.push(employees);
    };
    // const setvalues=()=>{
    //    setValues({validation:true})

      
       
    // }
    return (
      
      <div className="wrapper" >
      <div className="title">
        Employee mangement
      </div>
      <div className="form">
         <div className="inputfield">
            <label>First Name</label>
            <input type="text" className="input"value={values.firstName} onChange={e=>setValues({...values,firstName:e.target.value})} Required /> 
            </div>  
          <div className="inputfield">
            <label>Last Name</label>
            <input type="text" className="input" value={values.lastName}onChange={e=>setValues({...values,lastName:e.target.value})}/>
         </div>  
          <div className="inputfield">
            <label>Date of Join</label>
            <input type="date" className="input"value={values.date}onChange={e=>setValues({...values,date:e.target.value})}/>
         </div>  
        <div className="inputfield">
            <label>Department</label>
            <input type="text" className="input" value={values.department} onChange={e=>setValues({...values,department:e.target.value})}/>
         </div> 
         <div className="inputfield">
          <label>salary</label>
          <input type="text" className="input" value={values.salary}onChange={e=>setValues({...values,salary:e.target.value})}/>
       </div> 
          <div className="inputfield">
            <label>Experience</label>
            <div className="custom_select">
              <select value={values.experience}onChange={e=>setValues({...values,experience:e.target.value})}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
         </div> 
         <div className="inputfield">
          <label>Address present</label>
          <input type="text" className="input" value={values.present}onChange={e=>setValues({...values,present:e.target.value})}/>
       </div> 
       <div className="inputfield">
        <label>Permanent</label>
        <input type="text" className="input" value={values.permanent} onChange={e=>setValues({...values,permanent:e.target.value})}/>
     </div> 
        <div className="inputfield">
            <label>Education Details(Qualification,<br/>University/Percentage,<br/>CompletionYear</label>
            <textarea className="textarea"value={values.education} onChange={e=>setValues({...values,education:e.target.value})}></textarea>
         </div>
         <div className="inputfield">
          <label>Phone Number</label>
          <input type="text" className="input" value={values.phone} onChange={e=>setValues({...values,phone:e.target.value})}/>
       </div>  
       <div className="inputfield">
        <label>Email Address</label>
        <input type="text" className="input" vlaue={values.email}onChange={e=>setValues({...values,email:e.target.value})}/>
     </div> 
      <div className="inputfield">
          <label>ActiveStatus</label>
          <div className="custom_select">
            <select value={values.status} onChange={e=>setValues({...values,status:e.target.value})}>
              <option >Select</option>
              <option >Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>  
         
       <div className="inputfield">
      
    <Link className="link"onClick={Changehandler} to ="./update">Submit</Link>
    
    </div>
       
        
      </div>
      
  </div>
  
)

}

   

         
           
      
