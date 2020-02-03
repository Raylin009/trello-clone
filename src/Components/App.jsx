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

  const mvMessage = (message, ogListIndex, destListIndex) => {
    const newOgList = megaList[ogListIndex].listContent.filter(ele => ele !== message);
    const newDestList = [...megaList[destListIndex].listContent, message];
    const temp = [
      ...megaList.slice(0,ogListIndex),
      {...megaList[ogListIndex], listContent: newOgList},
      ...megaList.slice( ogListIndex + 1)
    ]
    addToMegaList([
      ...temp.slice(0,destListIndex),
      {...temp[destListIndex], listContent: newDestList},
      ...temp.slice(destListIndex + 1),
    ])
  }
  
  return(  
    <div className="container">
      {megaList.map((list, index, arr) => (
        <Board 
          key={`maga.${index}`}
          mvLeft={(message) => index !== 0 ? mvMessage(message, index, index - 1) : console.log('left end')}
          mvRight={(message) => index < arr.length -1 ? mvMessage(message, index, index + 1) : console.log('right end')}
          rmMessage={(message) => rmMessageToList(message, index)}
          addMessageToList={(message) => addMessageToList(message, index)}
          list={list}
        />
      ))}
    </div>
  )
};

export default App;

