import React, {useState} from 'react';


const Board = ({addMessage, name, content}) => {
  // const [list, addToList] = useState(['item 1', 'item2'])

  const handleAddCard = () => {
    const message = window.prompt('add something!');
    addToList([...list, message])
  }


  return (
      <div id={`${name}`} className="board">
      <h1 className="board-title">{name}</h1>
      <ul>
        {list.map((ele, index)=> 
        <li key={index}>
          <button onClick={()=>{handleMvLeft(message)}}>Left</button>
          <span>{ele}</span>
          <button>Right</button>
        </li>)}
      </ul>
      <button onClick={handleAddCard}>Add card</button>
    </div>
    )
};


export default Board;
