import React, { useState } from 'react';
import Board from './bord.jsx';

const App = () => {
  const [allLists, addList] = useState([
    {
      name: 'Winnie',
      content: ['Winnie 1', 'Winnie 2'],
    },
    {
      name: 'Bob',
      content: ['Bob 1', 'Bob 2'],
    },
    {
      name: 'Thomas',
      content: ['Thomas 1', 'Thomas 2'],
    },
    {
      name: 'George',
      content: ['George 1', 'George 2'],
    },
  ])

  const createNewMessge = (message, index) => {
    //find the target list
    const t = allList[index]
    const newContent = [...t.content, message]
    const newList = {
      name: t.name,
      content: newContent
    }
    return newList
  }

  const handleAddMessage = (message, listIndex) => {
    addList([
      ...allList.slice(0,listIndex), 
      createNewMessge(message, listIndex),
      ...allList.slice(listIndex + 1, allList.length)
    ])
  }
  
  return(  
    <div className="container">
      <Board />
      {/* {allLists.map(ele => <Board addMessage={handleAddMessage} key={ele.name} name={ele.name} content={ele.content}/>)} */}

    </div>
  )
};

export default App;

