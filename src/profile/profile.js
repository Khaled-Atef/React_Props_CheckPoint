import PropTypes from "prop-types" ;
import React from "react";
import Handlename from './handleName';

const Profile =  (props) =>{
    

    let x= (name)=>{
        return (alert(name));
    }

   return(
   <>
        
       <p style={{paddingLeft:"20px"}}>
       image: 
    
          <img src={props.children} height="100" width="200" />
          <br/>
          {props.name}
           {fullname}   
          
           <br/>
           {bio}
           <br/>
           {props.occup}
           {profession}
           <br/>
           <p>
           {props.old}
           {age}
           </p>
           
           <br/>
           <Handlename y={x} />
       </p>
    </>);

};

Profile.defaultProps = {
    fullname : "Khaled Atef" ,
    bio : "I don't have enough time for now to summarize my bio but I will do that soon :) ",
    profession : "full stack developer",
    age : "26",
};

let {bio,fullname,profession,age} = Profile.defaultProps ;

Profile.propTypes = {
   age: PropTypes.number ,
   bio: PropTypes.string 
};

export default Profile ;

/* let props = {
    y: function(name){
        return(alert(name)) ;
    }
} */


// ay component feeh parameter esmoh props e3tebroh object feeh property and their values .         