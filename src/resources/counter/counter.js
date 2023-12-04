import { useState } from 'react';
import './app.css';


function App() {

  const [ number,  change, ] = useState(0)
  
  const minus = ()=>{    
    if(number > 0 )
    change (number-1) }




  return (
    <div className="App">
     

    <div className='cont'>


            <div className='numbers'> {number}  </div>
            

            
            <div className='buttons'>
            
            <button onClick={()=>{change (number+1)}}>+ </button>
            <button onClick={minus}>- </button>

            </div>



    </div>




    </div>

  );
}

export default App;
