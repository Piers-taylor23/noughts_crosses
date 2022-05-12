import React from 'react';
import { useState } from 'react';
function Text() {
    const [text, setText] = useState("Click me");
    const [count, setCount] = useState(null);
    return (
        <>
        <button
        type="button"
        onClick={() => setCount(count + 1)}
        >
            {text}
        </button>
        <p>{count}</p>
        </>
    )
}
export default Text;