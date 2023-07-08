import React from 'react'

export default function Profile() {

  // Example 1
  const isLoggedIn = true;

  // example 2
  const items = ["Apple", "Banana", "Orange"];

  // Example 3
  const isAuthenticate =false;

  return <> 
  
  {/* Example 1 */}
  {isLoggedIn ? <h2>Welcome User</h2> : <h2>Welcome Guest</h2>} 
  
  {/* Example 2 */}
  <div>
    {items.length > 0 ? (
      <ul>
        {
          items.map((item, index) =>(
            <li key ={index}>{item}</li>
          ))}
      </ul>
    ): (
      <p>No Items to display</p>
    )}
  </div>

  {/* Example 3 */}
  <div>
    {isAuthenticate && (
      <button onClick = {() => console.log("Logged Out")}>Logout</button>
    )}
  </div>

  </>
}
