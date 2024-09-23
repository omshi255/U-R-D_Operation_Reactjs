import Darkmode from './Darkmode';
import './App.css';
import react,{useState} from 'react'
import Navbar from './Navbar'
function App() {

const [data,setData]=useState(0)

  return (
    <div className='App'  >
  <Navbar/>
  <Darkmode  />
     <div class="counter">
     <h1>Update,Delete,Reset Data At Real Time</h1>
     <h1>{data}</h1>
     </div>
     <div class="btn">
     <button  className='id1' onClick={()=>setData(data+1)}>Update Data</button>
      <button className='id2' onClick={()=>setData(data-1)}>decrement Data</button>
      <button className='id3' onClick={()=>setData(0)}>Reset Data</button>
      
     
     </div>
     
    </div>
  );
}

export default App;
