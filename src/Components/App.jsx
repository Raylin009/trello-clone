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
      <Board rmMessage={(message) => rmMessageToList(message, 0)} addMessageToList={(message) => addMessageToList(message, 0)} list={megaList[0]} />
      {/* {allLists.map(ele => <Board addMessage={handleAddMessage} key={ele.name} name={ele.name} content={ele.content}/>)} */}

    </div>
  )
};

export default App;

