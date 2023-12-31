import React, { useState, useEffect, PureComponent } from "react";
import "../pages/home.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const [hiredCount, setHiredCount] = useState(0);
  const [declinedCount, setDeclinedCount] = useState(0);
  const [noAnswerCount, setNoAnswerCount] = useState(0);
  const [applicationsSentCount, setApplicationsSentCount] = useState(0);

  useEffect(() => {
    // Retrieve the counts from localStorage when the component mounts
    const storedHiredCount = localStorage.getItem("hiredCount");
    const storedDeclinedCount = localStorage.getItem("declinedCount");
    const storedNoAnswerCount = localStorage.getItem("noAnswerCount");
    const storedApplicationsSentCount = localStorage.getItem(
      "applicationsSentCount"
    );

    // Update the state with the retrieved counts
    setHiredCount(parseInt(storedHiredCount) || 0);
    setDeclinedCount(parseInt(storedDeclinedCount) || 0);
    setNoAnswerCount(parseInt(storedNoAnswerCount) || 0);
    setApplicationsSentCount(parseInt(storedApplicationsSentCount) || 0);
  }, []);

  useEffect(() => {
    // Store the counts in localStorage whenever they change
    localStorage.setItem("hiredCount", hiredCount);
    localStorage.setItem("declinedCount", declinedCount);
    localStorage.setItem("noAnswerCount", noAnswerCount);
    localStorage.setItem("applicationsSentCount", applicationsSentCount);
  }, [hiredCount, declinedCount, noAnswerCount, applicationsSentCount]);

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

  const handleHiredClickSubtract = () => {
    setHiredCount(hiredCount - 1);
  };
  const handleDeclinedClickSubtract = () => {
    setDeclinedCount(declinedCount - 1);
  };
  const handleNoAnswerClickSubtract = () => {
    setNoAnswerCount(noAnswerCount - 1);
  };
  const handleApplicationsSentClickSubtract = () => {
    setApplicationsSentCount(applicationsSentCount - 1);
  };

  useEffect(() => {
    if (hiredCount < 0) {
      window.alert("You cannot have a negative number");
      setHiredCount(hiredCount + 1);
    }
    if (declinedCount < 0) {
      window.alert("You cannot have a negative number");
      setDeclinedCount(declinedCount + 1);
    }
    if (noAnswerCount < 0) {
      window.alert("You cannot have a negative number");
      setNoAnswerCount(noAnswerCount + 1);
    }
    if (applicationsSentCount < 0) {
      window.alert("You cannot have a negative number");
      setApplicationsSentCount(applicationsSentCount + 1);
    }
  }, [hiredCount, declinedCount, noAnswerCount, applicationsSentCount]); // If hiredCount is a dependency, it can cause a loop

  const totalCount = hiredCount + declinedCount + noAnswerCount;
  
  return (
    <div className="white-text" id="background">
      <div className="container row">
        <div id="chart-section" className="col s12 m12">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                { name: "Hired", count: hiredCount }, // { name: "Hired", count: 5 }
                { name: "Declined", count: declinedCount },
                { name: "No Answer", count: noAnswerCount },
                { name: "Applications Sent", count: applicationsSentCount },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div id="data-row" className="row container center">
        <div className="col s12 m4">
          <h2 className="franklin bold">Job Counter</h2>
          <p>Hired: {hiredCount}</p>
          <p>Declined: {declinedCount}</p>
          <p>No Answer: {noAnswerCount}</p>
          <p>Applications Sent: {applicationsSentCount}</p>
          <p>Total: {totalCount}</p>
        </div>

        <div className="col s12 m5 container ">
          <div className="col m3">
            <h4 className="franklin bold">Hired</h4>
            <button className="btn" onClick={handleHiredClick}>
              +1
            </button>
            <button className="btn" onClick={handleHiredClickSubtract}>
              -1
            </button>
          </div>
          <div className="col m3">
            <h4 className="franklin bold">Declined</h4>
            <button className="btn" onClick={handleDeclinedClick}>
              +1
            </button>
            <button className="btn" onClick={handleDeclinedClickSubtract}>
              -1
            </button>
          </div>
          <div className="col m3">
            <h5 className="franklin bold">No Answer</h5>
            <button className="btn" onClick={handleNoAnswerClick}>
              +1
            </button>
            <button className="btn" onClick={handleNoAnswerClickSubtract}>
              -1
            </button>
          </div>
          <div className="col m3">
            <h5 className="franklin bold">Applications Sent</h5>
            <button className="btn" onClick={handleApplicationsSentClick}>
              +1
            </button>
            <button
              className="btn"
              onClick={handleApplicationsSentClickSubtract}
            >
              -1
            </button>
          </div>
          <div className="row">
            <div className="col s12 l6">
              <button onClick={handleResetClick} className="reset-button btn">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
