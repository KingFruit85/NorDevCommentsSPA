import React from "react";
import { Message } from "../types";

interface MessageProps {
  message: Message;
}

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  const handleClick = () => {
    window.location.href = message.messageLink;
  };

  return (
    <div className="message" onClick={handleClick}>
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
            {message.s3ImageUrl.split(",").map((url, index) => (
              <img
                key={index}
                src={url.trim()}
                alt={`Message attachment ${index + 1}`}
                className="message-image"
              />
            ))}
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
              {message.s3QuotedMessageImageUrl && (
                <div className="message-image-container">
                  {message.s3QuotedMessageImageUrl
                    .split(",")
                    .map((url, index) => (
                      <img
                        key={index}
                        src={url.trim()}
                        alt={`Quoted Message attachment ${index + 1}`}
                        className="message-image"
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
        <div className="vote-count">
          Votes: {message.voteCount}
          <div className="voters-list">
            {message.voters.map((voter, index) => (
              <div key={index}>{voter}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
