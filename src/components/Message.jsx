import React from 'react';

const Message = ({ msg, type }) => {
  return (
    <div className="message">
      <p className={type}>{msg}</p>
    </div>
  );
};

export default Message;
