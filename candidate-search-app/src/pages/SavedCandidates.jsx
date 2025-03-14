import React from "react";

const SavedCandidates = () => {
  const savedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];

  return (
    <div>
      {savedCandidates.length === 0 ? (
        <p>No candidates saved</p>
      ) : (
        savedCandidates.map((candidate, index) => (
          <div key={index}>
            <img src={candidate.avatar_url} alt={candidate.login} />
            <p>Name: {candidate.name}</p>
            <p>Username: {candidate.login}</p>
            <p>Location: {candidate.location}</p>
            <p>Email: {candidate.email}</p>
            <p>Company: {candidate.company}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedCandidates;
