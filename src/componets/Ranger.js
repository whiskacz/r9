import React from 'react'

export default function Ranger({value, handleValueChange}) {
  return (
    <input type="range" 
    
    value={value}
    min="0"
    max={100}
    onChange={handleValueChange}
    
        style={{
        width:"30vw",
        margin:"80px auto 120px",
        
    }} />
  )
}
