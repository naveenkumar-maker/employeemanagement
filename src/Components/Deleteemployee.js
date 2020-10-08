import React, { createContext } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import firebase from './firebase';
import {Link} from 'react-router-dom';
import './update.css';
export default function Deleteemployee({employee}) {
    const deleteemployee=()=>{
    const employeeRef=firebase.database().ref('Emp').child(employee.id);
    employeeRef.remove();
    }
    const updateemployee=()=>{
        const employeeRef=firebase.database().ref('Emp').child(employee.id); 
        employeeRef.update({
            complete:!employee.complete,
        });
    }
    
    
    const mystyles={
        color:"red",
         margin:'4px'
    }
    const create={
        color:'blue',
        margin:'4px'
    }
   
    return (
        <div className="active">
           <Link onClick={deleteemployee}class="delete" ><DeleteIcon style={mystyles} /></Link>
           <Link onClick={updateemployee} to="./"><CreateIcon style={create}/></Link>
        </div>
    )
}
