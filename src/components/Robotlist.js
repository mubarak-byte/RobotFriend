import React from 'react'
import Robots from './Robots';

const Robotlist = ({Robot}) =>{
    return(
        <div>
            {
 Robot.map((user,i) => 
 {
     return(  
      <Robots 
       id={Robot[i].id} 
        name={Robot[i].name} 
         email={Robot[i].email}
          />
     )
 })
            }
       
     </div>
    )
}
export default Robotlist