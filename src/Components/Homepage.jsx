import {useState} from 'react';
const Homepage = () => {
    
    const [value, setValue] = useState(0);

    function AddValue(){
        setValue(value+1)
    }
    
  return (
    <div>
        <button onClick={AddValue}>Button</button>
        <h1>{value}</h1>
    </div>
  )
}

export default Homepage