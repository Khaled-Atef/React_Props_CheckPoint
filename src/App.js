import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';
import myPhoto from "./profile_with_mask.jpg";



function App() {
  return (
    <div className="App" style={{backgroundColor:"yellowgreen" , display:"inline-flex" , paddingLeft:"80px"}}>
      
      {/* <profile>Image1:<br/> <img src={myPhoto} alt="myImage" height="100" width="200"/> </profile>
      <profile>Image2: </profile>  -------- IT IS WRONG  */}
      <Profile name="Name: " occup ="Profession: " old="age: ">
        {myPhoto}
      </Profile>
      
      
    </div>
  );
}

export default App;

