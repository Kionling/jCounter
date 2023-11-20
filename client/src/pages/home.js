import React, { useState } from "react";
import "../pages/home.css";
import "../pages/home.css";

function Home() {
  const [hiredCount, setHiredCount] = useState(0);
  const [declinedCount, setDeclinedCount] = useState(0);
  const [noAnswerCount, setNoAnswerCount] = useState(0);
  const [applicationsSentCount, setApplicationsSentCount] = useState(0);
  const handleResetClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset the counts?"
    );
    if (confirmed) {
      setHiredCount(0);
      setDeclinedCount(0);
      setNoAnswerCount(0);
      setApplicationsSentCount(0);
    }
  };

  const handleHiredClick = () => {
    setHiredCount(hiredCount + 1);
  };

  const handleDeclinedClick = () => {
    setDeclinedCount(declinedCount + 1);
  };

  const handleNoAnswerClick = () => {
    setNoAnswerCount(noAnswerCount + 1);
  };

  const handleApplicationsSentClick = () => {
    setApplicationsSentCount(applicationsSentCount + 1);
  };

  const totalCount = hiredCount + declinedCount + noAnswerCount;

  return (
    <div className="container center">
      <div>
        <h2>Job Counter</h2>
        <p>Hired: {hiredCount}</p>
        <p>Declined: {declinedCount}</p>
        <p>No Answer: {noAnswerCount}</p>
        <p>Applications Sent: {applicationsSentCount}</p>
        <p>Total: {totalCount}</p>
      </div>
      <div>
        <button onClick={handleHiredClick}>Hired</button>
        <button onClick={handleDeclinedClick}>Declined</button>
        <button onClick={handleNoAnswerClick}>No Answer</button>
        <button onClick={handleApplicationsSentClick}>Applications Sent</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
}

export default Home;
