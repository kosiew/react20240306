import { Button } from "@mui/material";
import { InputCollector } from "./InputCollector";

interface Props {
  gotQuestion: boolean;
  showAnswer: string;
  showGetAnswer: boolean;
  handleGetAnswer: () => void;
  setChoices: (choices: string[]) => void;
}

export const ChoiceSection: React.FC<Props> = ({
  gotQuestion,
  showAnswer,
  showGetAnswer,
  handleGetAnswer,
  setChoices,
}) => {
  if (showAnswer !== 'HIDDEN') {
    return null;
  }

  return (
    <>
      {gotQuestion && (
        <div>
          <InputCollector placeholder="Choice" onInputsChange={setChoices} />
        </div>
      )}
      {showGetAnswer && (
        <Button variant="contained" onClick={handleGetAnswer}>Get Answer Now</Button>
      )}
    </>
  );
};