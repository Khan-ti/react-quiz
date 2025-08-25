import { useQuiz } from "../contexts/QuizContext";

const Progress = () => {
  const { numPossible, index, answer, points, numQuestions } = useQuiz();
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
