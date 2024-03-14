import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import { InputState } from './InputCollector';
interface Props {
  placeHolder: string;
  onInputChange: (newValue: string) => void;
  onDelete?: () => void;
  setInputState: (newState: InputState) => void;
}

export const TextInput: React.FC<Props> = ({ placeHolder, onInputChange, onDelete, setInputState }) => {
  const [inputValue, setInputValue] = useState('');
  const [isEditable, setIsEditable] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  const handleIconClick = () => {
    const newIsEditable = !isEditable;
    setIsEditable(newIsEditable);
    if (newIsEditable) {
      setInputState('ENTERING');
    } else {
      setInputState('CONFIRMED');
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleIconClick();
    }
  };

  return (
    <>
      {
        isEditable ? (
          <TextField
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onBlur={handleIconClick}
            placeholder={placeHolder}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleIconClick}>
                  <AddIcon />
                </IconButton>
              ),
            }}
          />
        ) : (
          <div>
            <span>{inputValue}</span>
            <IconButton onClick={handleIconClick}>
              <EditIcon />
            </IconButton>
            {onDelete &&
              <IconButton onClick={onDelete} >
                <DeleteIcon />
              </IconButton>
            }

          </div>
        )}

    </>

  )
};