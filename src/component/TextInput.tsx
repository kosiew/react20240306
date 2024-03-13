import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

import DeleteIcon from '@mui/icons-material/Delete';
interface Props {
  placeHolder: string;
  onInputChange: (newValue: string) => void;
  onDelete?: () => void;
  onEditableChange?: (isEditable: boolean) => void;
}

export const TextInput: React.FC<Props> = ({ placeHolder, onInputChange, onDelete, onEditableChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [isEditable, setIsEditable] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onInputChange(event.target.value);
  };

  const handleIconClick = () => {
    const newIsEditable = !isEditable;
    setIsEditable(newIsEditable);
    if (onEditableChange) {
      onEditableChange(newIsEditable);
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