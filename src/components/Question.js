import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

const Question = () => {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h2>{question.question}</h2>
      <Options question={question} />
    </div>
  );
};

export default Question;
