import React from "react";
import ReactDom from "react-dom";
import EmployeeService from "./EmployeeService.js";
class AddEmployee extends React.Component
{
   constructor(props)
   {
      super(props);
      this.state={
                 id:"",
                 name:"",
                 sal:"",
                 msg:""
            } 
   }
   genHandler=(e)=>{
     this.setState({[e.target.name]:e.target.value});
   }
   saveEmployee=(e)=>{
      e.preventDefault();
      let employee={
                  id:this.state.id,
                  name:this.state.name,
                  sal:this.state.sal
            }
        let promObject=EmployeeService.createEmployee(employee);
        promObject.then((res)=>{
           this.setState({msg:res.data});
        });
       promObject.catch((res)=>{
          this.setState({msg:res.data});
       });
        
   }
   render()
   {
      return(<>
           <center>
         <input type='text' name='id' value={this.state.id} onChange={(e)=>this.genHandler(e)}/><br/><br/>
         <input type='text' name='name' value={this.state.name} onChange={(e)=>this.genHandler(e)}/><br/><br/>
         <input type='text' name='sal' value={this.state.sal} onChange={(e)=>this.genHandler(e)}/><br/><br/>
         <input type='submit' name='s' value='addNewEmployee' onClick={(e)=>this.saveEmployee(e)}/><br/><br/>
         <h1>{this.state.msg}</h1>
           </center>
      </>);
   }
}
export default AddEmployee;