import React from "react";
import { Message } from "../types";

interface MessageProps {
  message: Message;
}

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="message">
      <img src={message.iconUrl} alt={message.userName} className="avatar" />
      <div className="message-content">
        <div className="message-header">
          <span className="username">{message.userName}</span>
          <span className="timestamp">
            {new Date(message.dateOfSubmission).toLocaleString()}
          </span>
        </div>
        <div className="comment">{message.comment}</div>
        {message.s3ImageUrl && (
          <div className="message-image-container">
            <img
              src={message.s3ImageUrl}
              alt="Message attachment"
              className="message-image"
            />
          </div>
        )}
        {message.quotedMessage && (
          <div className="quoted-message">
            <img
              src={message.quotedMessageAvatarLink}
              alt={message.quotedMessageAuthor}
              className="quoted-avatar"
            />
            <div className="quoted-content">
              <span className="quoted-author">
                {message.quotedMessageAuthor}
              </span>
              <div className="quoted-text">{message.quotedMessage}</div>
            </div>
          </div>
        )}
        <div className="vote-count">Votes: {message.voteCount}</div>
      </div>
    </div>
  );
};

export default MessageComponent;
