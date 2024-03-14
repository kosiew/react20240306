import { Button } from '@mui/material';
import { useState } from 'react';
import { InputState } from '../App';
import { TextInput } from './TextInput';

interface InputCollectorProps {
  placeholder: string;
  maxInputs?: number;
  onInputsChange: (newInputs: string[]) => void;
  setInputState: (newState: InputState) => void;
  inputState: InputState;
}

export const InputCollector: React.FC<InputCollectorProps> = ({ placeholder, inputState, setInputState, maxInputs, onInputsChange }) => {
  const [inputs, setInputs] = useState<string[]>(['']);

  const handleInputChange = (newValue: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = newValue;
    setInputs(newInputs);
    onInputsChange(newInputs);
  };

  const addInput = () => {
    if (maxInputs === undefined || inputs.length < maxInputs) {
      setInputs([...inputs, '']);
      setInputState('INITIAL');
    }
  };

  const deleteInput = (index: number) => {
    const newInputs = [...inputs];
    if (inputs.length > 1) {
      newInputs.splice(index, 1);
    } else {
      newInputs[index] = '';
    }
    setInputs(newInputs);
    onInputsChange(newInputs);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          placeHolder={`${placeholder} ${index + 1}`}
          onInputChange={(newValue) => handleInputChange(newValue, index)}
          onDelete={inputs.length > 1 ? () => deleteInput(index) : undefined}
          setInputState={setInputState}
        />
      ))}
      <>
        {(!maxInputs || inputs.length < maxInputs) && inputState === 'CONFIRMED' && (
          <Button onClick={addInput}>Add {placeholder}</Button>
        )}
      </>

    </div>
  );
};