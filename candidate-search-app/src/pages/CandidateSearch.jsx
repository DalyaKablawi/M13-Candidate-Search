import React, { useState, useEffect } from "react";
import { getUserData } from "../api/API";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch the first candidate's data (you can change the username here)
    getUserData("octocat").then((data) => setCandidate(data));
  }, []);

  const handleSaveCandidate = () => {
    setCandidates([...candidates, candidate]);
    setCurrentIndex(currentIndex + 1);
    // Fetch the next candidate
    getUserData("defunkt").then((data) => setCandidate(data));
  };

  const handleNextCandidate = () => {
    setCurrentIndex(currentIndex + 1);
    // Fetch the next candidate (replace with next username logic)
    getUserData("mojombo").then((data) => setCandidate(data));
  };

  if (!candidate) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <img src={candidate.avatar_url} alt={candidate.login} />
        <p>Name: {candidate.name}</p>
        <p>Username: {candidate.login}</p>
        <p>Location: {candidate.location}</p>
        <p>Email: {candidate.email}</p>
        <p>Company: {candidate.company}</p>
      </div>
      <button onClick={handleSaveCandidate}>+</button>
      <button onClick={handleNextCandidate}>-</button>
      {currentIndex >= 5 && <p>No more candidates available</p>}
    </div>
  );
};

export default CandidateSearch;
