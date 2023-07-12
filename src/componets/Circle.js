import React from 'react'

export default function Circle({value, bgColor}) {
  return (
    <div style={{
        width: `${value * 2}px`,
        height: `${value * 2}px`,
        backgroundColor:bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:"50%",
        color:"#555"
        
    }}>Circle</div>
  )
}
