import React, { useState, useEffect, useMemo } from "react";
import { Message } from "./types";
import MessageComponent from "./components/MessageComponent";
import "./App.css";
import sampleMessages from "./sampleMessages.json";

const API_URL = "https://nordevcommentsbackend.fly.dev/api/messages/";
const USE_LOCAL_DATA = process.env.REACT_APP_USE_LOCAL_DATA === "true";
const ITEMS_PER_PAGE = 15;

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (USE_LOCAL_DATA) {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setMessages(sampleMessages as unknown as Message[]);
        } else {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error("Failed to fetch messages");
          }
          const data = await response.json();
          setMessages(data);
        }
        setLoading(false);
      } catch (err) {
        setError("An error occurred while fetching messages");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const sortedAndFilteredMessages = useMemo(() => {
    return messages
      .filter(
        (message) =>
          message.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
          message.userName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b.voteCount - a.voteCount); // Sort by voteCount in descending order
  }, [messages, searchTerm]);

  const totalPages = Math.ceil(
    sortedAndFilteredMessages.length / ITEMS_PER_PAGE
  );

  const paginatedMessages = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedAndFilteredMessages.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [sortedAndFilteredMessages, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nor(Dev)Comments bot - All Comments!</h1>
      </header>
      <div className="controls">
        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
      <div className="message-list">
        {paginatedMessages.map((message) => (
          <MessageComponent key={message.messageId} message={message} />
        ))}
      </div>
    </div>
  );
};

export default App;
