import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router-dom";
import EmployeeService from "./EmployeeService.js";
class ListEmployee extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
                  employee:[]
              }
    }
    render()
    {
        return <>
          
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
                       this.state.employee.map((employee)=><tr key={employee.id}>
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
        </>
    }
    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
           this.setState({employee:res.data});
        });
   }
}
export default ListEmployee;