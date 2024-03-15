import { Button } from '@mui/material';
import { useState } from 'react';
import { TextInput } from './TextInput';

interface InputCollectorProps {
  placeholder: string;
  maxInputs?: number;
  onInputsChange: (newInputs: string[]) => void;
}

export type InputState = 'ENTERING' | 'CONFIRMED' | 'INITIAL'
export const InputCollector: React.FC<InputCollectorProps> = ({ placeholder, maxInputs, onInputsChange }) => {
  const [inputs, setInputs] = useState<string[]>(['']);

  const [inputState, setInputState] = useState<InputState>('INITIAL');
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
          placeHolder={`${placeholder}${maxInputs === 1 ? ''
            : ` ${index + 1}`}`}
          onInputChange={(newValue) => handleInputChange(newValue, index)}
          onDelete={inputs.length > 1 ? () => deleteInput(index)
            : undefined}
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