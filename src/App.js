import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter,Route,Routes,NavLink,Link} from "react-router-dom";
import ListEmployee from "./ListEmployee.js";
import AddEmployee from "./AddEmployee.js";
import DelEmp from "./DelEmp.js";
import UpdateComp from "./UpdateComp.js";
import SearchEmp from "./SearchEmp.js";
class App extends React.Component
{
   render(){
      return<>
             <BrowserRouter>
                <NavLink>
                   <ul>
                     <li><Link to="/" className="test">Home Page</Link></li>
                     <li><Link to="/newEmployee" className="test">Add Employee</Link></li>
                     <li><Link to="/viewAlls" className="test">View Employee</Link></li>
                     <li><Link to="/Search" className="test">Search Employee</Link></li>
                  </ul>
               </NavLink>
               <Routes>
                 <Route path="/" element={<h1>Home Page</h1>}/>
                 <Route path="/newEmployee" element={<AddEmployee/>}/>
                 <Route path="/viewAlls" element={<ListEmployee/>}/>
                 <Route path="/delemp/:empid" element={<DelEmp/>}/>
                 <Route path="/updateemp/:empid/:empname/:empsal" element={<UpdateComp/>}/>
                 <Route path="/Search" element={<SearchEmp/>}/>
              </Routes>
            </BrowserRouter>
        </> 
  }
}
export default App;
