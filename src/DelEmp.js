import React,{useEffect,useState} from "react";
import ReactDom from "react-dom";
import {useParams} from "react-router-dom";
import EmployeeService from "./EmployeeService.js";

let DelEmp=()=>{
  let {empid} =useParams();
  let [msg,setMsg]=useState("");
   useEffect(()=>{
       let promObj=EmployeeService.delEmployee(empid);
       promObj.then((res)=>{
        setMsg("Employee Deleted Success....");
       });
    });

    return(<>
	<h1>{msg}</h1>
      </>);
}
export default DelEmp;