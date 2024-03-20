import { Client } from 'figma-js'; 
import image from './assets/background1.png';
import './App.css'


const client = Client({
  personalAccessToken: 'figd_mXj_LUE9P4L2oh1ptGmxkB8-iukihLTchcCP-QUI'
});


client.file('G84li0MrDPWRZGW5lVLIr1').then(file => {
  console.log(file);
}).catch(error => {
  console.error(error);
});






function App() {
  return (
    <div className="fullscreen">
      <img src = {image} className = "full-img" />
        <div className = "mainSearch">
          <input type = "text" placeholder = "Where from?" />
          <input type = "text" placeholder = "Where to?" />
        </div>
      </div>




  )
}

export default App;