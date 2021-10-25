
import './App.css';
import  Profile from './profile/Profile'

let date ={
  fullName :"Dhouha Bessalah",
  bio: "web dev student ",
  profession: "student",
  img:"https://t3.ftcdn.net/jpg/03/29/36/40/360_F_329364028_wVuGGblS5BxfbbQYiPMZzpzOuAYUBkzx.jpg"
}

function handleName(el)
{
 return alert (el);

}
handleName(date.fullName)
function App() {
 
  return (
<>
<Profile fullName={date.fullName} bio={date.bio} profession={date.profession} img={date.img}/>
  </>);
}

export default App;
