import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

// use state as a number "count"
export default function CounterHooks({ initialCount }) {
    console.log("Render Counter Hooks")
    const [count, setCount] = useState( initialCount )
    const style = useContext(ThemeContext)
    return (  
        <div>    
            <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}

// use state object
/* export default function CounterHooks({ initialCount }) {
    console.log("Render Counter Hooks")
    const [state, setState] = useState( { count: initialCount} )  count is assigned as a constructor variable here, useState return an array
    return (  
        <div>    
            <button onClick={() => setState(prevState => {
                return { count: prevState.count - 1}
            })}>-</button>
            <span>{count}</span>
            <button onClick={() => setState(prevState => {
                return { count: prevState.count + 1}
            })}>+</button>
        </div>
    )
}     */