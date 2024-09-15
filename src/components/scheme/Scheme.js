import React from "react";
import '../scheme/Scheme.css'
import{details} from './Data'

import List from "./List";



export default function Scheme() {
  
   
  return (
    <div>
        
      <div className="header">
        <div className="main">
        Government Schemes for STARTUPS
        INITIATIVES BY Central Ministries and Departments
        </div>
        
      </div>
      <List item={details}/>
      
    </div>
  );
}
