const FinishScreen = ({ points, numPossible, highScore, dispatch }) => {
  const percentage = (points / numPossible) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🏆";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "🫡";
  if (percentage === 0) emoji = "💩💩💩";

  return (
    <>
      <p className="result">
        {emoji} Your score <strong>{points}</strong> out of {numPossible}{" "}
        {Math.ceil(percentage)}%
      </p>

      <p className="highscore">(HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz!
      </button>
    </>
  );
};

export default FinishScreen;
