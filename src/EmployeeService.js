import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
const EMPLOYEE_API="http://localhost:2030/viewAll";
const NEW_EMPLOYEE_API="http://localhost:2030/save";
const DELETE_EMPLOYEE_API="http://localhost:2030/deleteEmp";
class EmployeeService
{
   getEmployee()
   {
      return axios.get(EMPLOYEE_API);
   }
   createEmployee(employee)
   {
      return axios.post(NEW_EMPLOYEE_API,employee);
   }
   delEmployee(empid)
   {   
      alert(empid);
      return axios.get("http://localhost:2030/deleteEmp/"+empid);
   }
   searchEmpByName(name)
   {
     return axios.put("http://localhost:2030/search/"+name);
   }
}
export default new EmployeeService;