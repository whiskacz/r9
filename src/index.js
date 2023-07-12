import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Title from './componets/Title';
import Ranger from './componets/Ranger';
import Circle from './componets/Circle';
import './css/index.css'

function R9App() {
  
  const [rangerValue, setRangerValue] = useState(0)

  const handleValueChange = (e) => {
    setRangerValue(e.target.value)
  }
    let bgColor; 
    if(rangerValue > 0)
    {bgColor = "red"}
    if(rangerValue > 50)
    {bgColor = "blue"}
  
  
    return (
    <div className='wrapper'>
        <Title value={rangerValue} />
        <Ranger value={rangerValue} handleValueChange={handleValueChange}/>
        <Circle value={rangerValue} bgColor={bgColor} />
    </div>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<R9App />)
