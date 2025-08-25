import React from "react";

const Progress = ({ index, numQuestions, points, numPossible, answer }) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1} / </strong> {numQuestions}
      </p>
      <p>
        {points} / {numPossible}
      </p>
    </header>
  );
};

export default Progress;
