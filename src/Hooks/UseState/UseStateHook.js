import React, {useState} from 'react';

const UseStateHook = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Use State Hook</h3>
            <button onClick={()=>setCount(count+1)}>Increase Counter</button> 
            <button> {count} </button>
            <button onClick={()=>setCount(count-1)}>decrease Counter</button> 
        </div>
    );
};

export default UseStateHook;