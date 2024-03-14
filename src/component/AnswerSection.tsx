import { Button } from "@mui/material";
import { Answer } from "./Answer";

interface Props {
  answer: string;
  handleAskAnotherQuestion: () => void;
}

export const AnswerSection: React.FC<Props> = ({ answer, handleAskAnotherQuestion }) => {
  return (
    <>
      <Answer answer={answer} />
      <Button variant="contained" onClick={handleAskAnotherQuestion}>Ask another question</Button>
    </>
  );
};