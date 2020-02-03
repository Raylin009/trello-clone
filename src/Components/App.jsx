import React, { useState } from 'react';
import Board from './bord.jsx';

const {data} = require('../../server/exampleData.js')

const App = () => {
  const [megaList, addToMegaList] = useState(data);

  const addMessageToList = ( message, listIndex ) => {
    const targetList = megaList[listIndex];
    addToMegaList([
      ...megaList.slice(0,listIndex),
      {
        ...targetList,
        listContent: [
          ...targetList.listContent,
          message
        ]
      },
      ...megaList.slice(listIndex + 1),
    ])
  };

  const rmMessageToList = (message, listIndex) => {
    const targetList = megaList[listIndex];
    const newListContent = targetList.listContent.filter(ele => message !== ele);
    const newList = { ...targetList, listContent: newListContent};
    addToMegaList([
      ...megaList.slice(0,listIndex),
      newList,
      ...megaList.slice(listIndex + 1),
    ])
  };
  
  return(  
    <div className="container">
      {megaList.map((list, index) => (
        <Board 
          rmMessage={(message) => rmMessageToList(message, index)}
          addMessageToList={(message) => addMessageToList(message, index)}
          list={list}
        />
      ))}
    </div>
  )
};

export default App;

