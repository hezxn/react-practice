import React, { useState} from 'react';
const count = () => {
    const [count, countFunc] = useState(0)

    function updateCount() {
        countFunc(prev => prev + 1)
    }
    
    return(
        <div>
        <p> State in function based component (useState Hook)</p>
        <span>{count} </span>
        <button onClick={updateCount}> ++ </button>
        </div>
    )

}

export default count;