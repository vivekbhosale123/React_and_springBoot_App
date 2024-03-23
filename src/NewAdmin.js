import React from "react";
import ReactDom from "react-dom";

class NewAdmin extends React.Component
{
        
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
export default NewAdmin;