import React from 'react';

const Message = ({ msg, type }) => {
  return (
    <div className="message">
      <h2 className={type}>{msg}</h2>
    </div>
  );
};

export default Message;
