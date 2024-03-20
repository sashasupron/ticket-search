import { Client } from 'figma-js'; 


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
    <>

    </>
  )
}

export default App;