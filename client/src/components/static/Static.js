import React from 'react';
import Titles from './Titles'
import UserIcon from './UserIcon'
class Static extends React.Component{
   render(){
     return(
       <div className="d-flex justify-content-between">
           <div>
             <Titles />
           </div>
           <div>
             <UserIcon />
           </div>
       </div>
     );
   }
};

export default Static;
