import React from 'react';
import useMessageCard from './useMessageCard';
import './MessageCard.scss';

const MessageCard = (props) => {
  const {
    date,
    onDeleteClick,
    onCheckBoxClick,
    text,
    source,
  } = useMessageCard(props);

  return (
    <div className="message">
      <input type="checkbox" onClick={onCheckBoxClick}></input>
      <div className="message-data">
        <div className="message-metadata">
          <div className='source' >~{source}</div>
          <div className='date'>{date.toLocaleString()}</div>
          <button onClick={onDeleteClick}>Delete</button>
        </div>
        <div className="message-text">{text}</div>
      </div>
    </div>
  );
};

export default MessageCard;
