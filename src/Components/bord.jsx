import React from 'react';


const Board = ({ index, mvLeft, mvRight, rmMessage, addMessageToList, list}) => {

  const handleAddMessage = () => {
    const message = window.prompt('add something!');
    addMessageToList(message)
  };

  const handleDeleteMessage = message => {
    rmMessage(message);
  };

  return (
    <div id={`${list.listName}`} className="board">
      <h1 className="board-title">{list.listName}</h1>
      <ul>
        {list.listContent.map((ele, i)=> 
        <li key={i}>
          <button onClick={()=>mvLeft(ele)}>left</button>
          <button onClick={()=>mvRight(ele)}>right</button>
          <span>{ele}</span>
          <button onClick={()=>{handleDeleteMessage(ele)}}>X</button>
        </li>)}
      </ul>
      <button onClick={handleAddMessage}>Add card</button>
    </div>
    )
};


export default Board;
