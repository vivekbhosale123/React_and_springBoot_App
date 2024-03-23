import React,{useState,useEffect} from "react";
import ReactDom from "react-dom";
import {Link} from "react-router-dom";
import EmployeeService from "./EmployeeService.js";
let SearchEmp=()=>{
let [employee,setEmployee]=useState([]);
let [name,setName]=useState("");
let [count,setCount]=useState(0);
useEffect(()=>{
     if(count==0){
   EmployeeService. getEmployee().then((res)=>{
	   setEmployee(res.data);
           setCount(1);
      });
    }
  },[count]);
let accepName=(e)=>{
    setName(e.target.value);
    if(e.target.value.length!=0){
    EmployeeService.searchEmpByName(e.target.value).then((res)=>{
	   setEmployee(res.data);
      });

   } 
   else
   {
        EmployeeService.getEmployee().then((res)=>{
	setEmployee(res.data);
       });
   }
}
   return(<>
     <center><input type='text' name='search' value={name} onChange={(e)=>accepName(e)}/><br/><br/> </center>
        <center>
             <table border="6" width="70%" align="center">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Delete</th>
                  <th>Update</th>
               </tr>
               <tbody>
                   {
                      employee.map((employee)=><tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.sal}</td>
                        <td><Link to={`/delemp/${employee.id}`}>Delete</Link></td>
                        <td><Link to={`/updateemp/${employee.id}/${employee.name}/${employee.sal}`}>Update</Link></td>
                      </tr>)
                   }
              </tbody>
            </table>
         </center>
     </>);
}
export default SearchEmp;