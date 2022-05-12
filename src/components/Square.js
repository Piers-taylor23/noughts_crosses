import React from 'react';
import { useState } from 'react';
function Square() {
    const [count, setCount] = useState(0);
    return (
        <button className="square" onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}
export default Square