import React,{useState} from "react";
import ReactDom from "react-dom";
import {useParams} from "react-router-dom";
import EmployeeService from "./EmployeeService.js";
let UpdateComp=()=>{
   let {empid,empname,empsal}=useParams();
   let [emp,setEmp]=useState({
          id:empid,
          name:empname,
          sal:empsal
    });
   let [msg,setMsg]=useState("");
   let genHandler=(e)=>{
        setEmp(prevState=>{
              return {...prevState,[e.target.name]:e.target.value}
        });
    }
   let updateEmployee=(e)=>{
     e.preventDefault();
     
     let employee={
          id:emp.id,
          name:emp.name,
          sal:emp.sal
      }
     let promObject=EmployeeService.createEmployee(employee);
     promObject.then((res)=>{
          setMsg("Employee Updated Successfully");
     });
     promObject.catch((res)=>{
          setMsg("Employee not Updated Successfully");
     });
  } 
    return ( 
         <center>
           <h1>Update The Data</h1>
           <input type='text' name='id'  value={emp.id} onChange={(e)=>genHandler(e)}/><br/><br/>
           <input type='text' name='name'  value={emp.name} onChange={(e)=>genHandler(e)}/><br/><br/>
           <input type='text' name='sal'  value={emp.sal} onChange={(e)=>genHandler(e)}/><br/><br/>
           <input type='submit' name='s' value='Update Employee' onClick={(e)=>updateEmployee(e)}/>
           <h1>{msg}</h1>
        </center>
        );
}
export default UpdateComp;