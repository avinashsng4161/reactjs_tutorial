import React from 'react'

export default function Users(props) {

    console.log(props);
  return (
    <>
        <h1>Users Components</h1>

        {/* Example 1 */}
        <button onClick={props.handleClick}>Click Me</button>

        {/* Example 2 */}
        <p>Count: {props.count}</p>
        <button onClick={props.increment}>Increment</button>
    </>
  )
}
