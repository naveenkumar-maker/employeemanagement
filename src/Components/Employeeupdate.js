import React,{useState,useEffect} from 'react'
import firebase from './firebase';
import './editemployee.css';



import {Link} from 'react-router-dom';
import Deleteemployee from './Deleteemployee';

export default function Employeeupdate() {
    const [employeeList,setemployeeList]=useState();
    
    useEffect(()=>{
        const employeeRef=firebase.database().ref('Emp');
        employeeRef.on('value',(snapshot)=>{
            const employees=snapshot.val();
            const employeeList=[];
            for(let id in employees){
                employeeList.push({id,...employees[id]});
                
            }
            setemployeeList(employeeList)

        });
    },[]);
    
   
    
    
    return (
        <div >
            
            <table className="employees">
                 <thead >
                    <tr>
                    <th >FirstName</th>
                    <th>LastName</th>
                    <th>Date</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Experience</th>
                    <th>Permanent Address</th>
                    <th>Present Address</th>
                    <th>Education Details</th>
                    <th>PhoneNo</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>
                  </thead>
                
            {
                employeeList?employeeList.map((employee,index)=>
                  
                    <tbody>
                         <tr>
                            <td>{employee.values.firstName}</td>   
                            <td>{employee.values.lastName}</td>
                            <td>{employee.values.date}</td>
                            <td>{employee.values.department}</td>
                            <td>{employee.values.salary}</td>
                            <td>{employee.values.experience}</td>
                            <td>{employee.values.permanent}</td>
                            <td>{employee.values.present}</td>
                            <td>{employee.values.education}</td>
                            <td>{employee.values.phone}</td>
                            <td>{employee.values.email}</td>
                            <td>{employee.values.status}</td>
                            <td>
                               <Deleteemployee employee={employee}/> 
                              
                               
                            </td>
                          </tr>
                            </tbody>
                     
                           ):''

            }

            </table>
            
        </div>
    )
}
