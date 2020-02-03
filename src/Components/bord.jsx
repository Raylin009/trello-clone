import React from 'react';


const Board = ({rmMessage, addMessageToList, list}) => {

  const handleAddMessage = () => {
    const message = window.prompt('add something!');
    addMessageToList(message)
  };

  const handleDeleteMessage = message => {
    rmMessage(message);
  }


  return (
    <div id={`${list.listName}`} className="board">
      <h1 className="board-title">{list.listName}</h1>
      <ul>
        {list.listContent.map((ele, index)=> 
        <li key={index}>
          <button onClick={()=>{handleMvLeft(message)}}>Left</button>
          <span>{ele}</span>
          <button onClick={()=>{handleDeleteMessage(ele)}}>X</button>
        </li>)}
      </ul>
      <button onClick={handleAddMessage}>Add card</button>
    </div>
    )
};


export default Board;
