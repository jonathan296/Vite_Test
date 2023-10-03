import { useState } from "react";
import { puppyList } from "./data"
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  
  
  return (
    
      <div>
        
        <h1>Click on a puppy!</h1>
        {
        puppies.map((puppy) => {
          return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })}
        
        
        <div className="featPuppy">{featPupId && (
        <div>
          <h1>Featured Puppy:</h1>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}</div>

      </div> 
      
    
  )
}

export default App
