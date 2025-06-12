import React from 'react'
import Button from './Button'
const Buttonlist = () => {
  const buttonList = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Data structure ' },
    { id: 3, label: 'movies ' },
    { id: 4, label: 'podcast ' },
    { id: 5, label: 'Java' }
    , { id: 6, label: 'Python' },
    { id: 7, label: 'JavaScript' },
    { id: 8, label: 'React' },
    { id: 9, label: 'Node.js' },
    { id: 10, label: 'CSS'}
    , { id: 11, label: 'HTML' },
    { id: 12, label: 'BootStrap' },
    { id: 15, label: 'Vue.js' }
    , { id: 16, label: 'Angular' },
    
    
  ];
  return (
    <div>
      <div className="flex flex-wrap">
        {buttonList.map((button) => (
          <Button key={button.id} name={button.label} />
        ))}
      </div>
      
    </div>
  )
}

export default Buttonlist
